import React, { Component } from 'react';
import Login_Register from './Login_Register';
import Header from './Header';
import Footer from './Footer';
import Timeline from './RouteTimeline';
import RouteHome from './RouteHome';


import {Switch,Route} from 'react-router-dom';

class App extends Component {
   
  render() {
     return (
      <div>
        <Header/>
        <Switch>
          <Route path='/user' component={Login_Register}/>
          <Route path='/timeline' component={Timeline}/>
          <Route path='/home' component={RouteHome}/>
        </Switch>
        <Footer />
     </div>
     )
  }
}

export default App;