import React, { Component } from 'react';
import Login from './Login'
import Register from './Register';
import {Switch,Route,Redirect} from 'react-router-dom';

class Login_Register extends Component {
   
  render() {
     return (
      <div>
        <Switch>
            <Route path='/user/register' component={Register}/>
            <Route path='/user/login' component={Login}/>
            <Route path="/" component={() => <Redirect to="/user/register" />} />
        </Switch>
          
        </div>
     )
  }
}

export default Login_Register;
