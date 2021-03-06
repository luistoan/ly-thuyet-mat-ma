import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Login from './components/Login'
import Register from './components/Register'

class App extends Component {

    render() {
        
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                    </Switch>
                </BrowserRouter>
                <ToastContainer />
            </div>
        );
  }
}

export default App;
