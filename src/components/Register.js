import React, {Component} from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
import { Redirect, Link } from 'react-router-dom'

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            repass: "",
            toLogin: false
        }
    }

    onChangeValue(e) {
        
        const {name, value} = e.target;
        if(value) {
            if(name === "username") {
                this.setState({username: value});
            } else if(name === 'password') {
                this.setState({password: value});
            } else {
                this.setState({repass: value})
            }
        }
    } 

    login() {
        const {username, password, repass} = this.state;

        if(!username || !password || !repass) {
            toast.error("all fields cannot be null!")
            return;
        }

        if(repass !== password) {
            toast.error("repass doesn't match password!")
            return
        }

        let config = {
            headers : {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*' 
            }
        }

        axios.post('http://localhost:8080/api/users', {username, password}, config).then(success => {
            
            if(success.data && success.data.status) {
                toast.success("New Account created!")
                this.gotoLogin();
            } else {
                toast.error("Account already existed!")
            }
        }, error => {
            toast.error("server error!")
        })
    }

    gotoLogin() {
        this.setState({toLogin: true})
    }

    render() {
        if(this.state.toLogin) {
            return <Redirect to="/" />
        }
        return (
            <div className="limiter">
                <div className="container-login100" >
                    <div className="wrap-login100 p-t-30 p-b-50">
                        <span className="login100-form-title p-b-41">
                            Create account
                        </span>
                        <div className="login100-form validate-form p-b-33 p-t-5">
        
                            <div className="wrap-input100 validate-input" data-validate = "Enter username">
                                <input className="input100" type="text" onChange={this.onChangeValue.bind(this)} name="username" placeholder="User name"/>
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" onChange={this.onChangeValue.bind(this)} name="password" placeholder="Password"/>
                                <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Re-Enter password">
                                <input className="input100" type="password" onChange={this.onChangeValue.bind(this)} name="repass" placeholder="Password"/>
                                <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div style={{textAlign: "center"}}>
                                <Link to="/">Back to Login</Link>
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

export default Register;
