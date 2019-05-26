const express = require('express');
const http = require('http');
const mysql = require('mysql');
const crypto = require('crypto')
const randomKey = require('random-key');
const cors = require('cors');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lythuyetmatma"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname ));
app.use(express.json());
app.use(cors({origin:'*'}))
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post('/api/login', function(req, res) {
  console.log("login...")
  if(!req.body || !req.body.username || !req.body.password) {
    res.json({
      message: "invalid params"
    })

    return;
  }
  const { username, password} = req.body;

  const sql = `select * from users where username='${username}'`
  con.query(sql, function(err, results) {
    if (err) throw err;
    if(results) {
      if(!results.length) {
        res.json({
          message: "user not found",
          status: 0
        })
      } else {
        const user = results[0];
        const hashPass = crypto.createHmac('sha512', user.private_key).update(password).digest('hex');

        if(user.password == hashPass) {
          res.json({
            message: "login ok!",
            status: 1
          })
        } else {
          res.json({
            message: "wrong password!",
            status: 0
          })
        }
        
      }
    }
  })
})

app.post('/api/users', function(req, res) {
  console.log("register...")
  if(!req.body || !req.body.username || !req.body.password) {
    res.json({
      message: "invalid params"
    })

    return;
  }
  const { username, password} = req.body;
  const private_key = randomKey.generate(16);
  const hashPass = crypto.createHmac('sha512', private_key).update(password).digest('hex');
  
  const sql = `insert into users(username, password, private_key) values ('${username}', '${hashPass}', '${private_key}')`
  con.query(sql, function(err, results) {
    if (err) {
      res.json({
        message: "user already existed!",
        status: 0
      })
    } else {
      res.json({
        message: "create ok",
        data: results,
        status: 1
      })
    }
  })
})

app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/build', 'index.html'));
});



const server = http.Server(app);

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
