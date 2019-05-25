const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname ));
app.use(express.static(path.join(__dirname, '/build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

const server = http.Server(app);

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
