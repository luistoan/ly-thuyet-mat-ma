import React, {Component} from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
import  { Link } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeValue(e) {
        
        const {name, value} = e.target;
        if(value) {
            if(name === "username") {
                this.setState({username: value});
            } else {
                this.setState({password: value});
            }
        }
    } 

    login() {
        const {username, password} = this.state;
        if(!username || !password) {
            console.log("not login!");
            return;
        }

        let config = {
            headers : {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*' 
            }
        }

        axios.post('http://localhost:8080/api/login', {username, password}, config).then(success => {
            if(success.data && success.data.status) {
                toast.success("Login successful!")
            } else {
                toast.error("Username or password is wrong!")
            }
        }, error => {
            toast("Server Error!")
        })
        console.log(username, password)
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100" >
                    <div className="wrap-login100 p-t-30 p-b-50">
                        <span className="login100-form-title p-b-41">
                            Account Login
                        </span>
                        <div className="login100-form validate-form p-b-33 p-t-5">
        
                            <div className="wrap-input100 validate-input" data-validate = "Enter username">
                                <input className="input100" type="text" onChange={this.onChangeValue.bind(this)} name="username" placeholder="User name"/>
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" onChange={this.onChangeValue.bind(this)} name="pass" placeholder="Password"/>
                                <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div style={{textAlign: "center"}}>
                                <Link to="/register">Go to Register</Link>
                            </div>
        
                            <div className="container-login100-form-btn m-t-32">
                                <button className="login100-form-btn" onClick={this.login.bind(this)}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default Login;
