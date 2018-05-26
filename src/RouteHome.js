import React, { Component } from 'react';
import Home from './Home';
import Rightsection from './Right_section';
import Postdb from './Postdb';
import Userhomehead from './Userhomehead';

import {Switch,Route} from 'react-router-dom';

class Timeline extends Component {
   
  render() {
    return ( 
        <div className="container">
        <div className="content">
      
        <Rightsection />
        <div className="content_lft">
        <Userhomehead />
        <Switch>
            <Route path='/home' component={Home}/>
        </Switch>

        </div>
        </div>
        <div className="clear" />
        
        </div>  


     )
  }
}

export default Timeline;