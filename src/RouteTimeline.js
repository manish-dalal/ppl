import React, { Component } from 'react';
import Singlepost from './Singlepost';
import Rightsection from './Right_section';
import Postdb from './Postdb';
import {Switch,Route} from 'react-router-dom';
import UserProfile from './UserProfile'


class Timeline extends Component {
   
  render() {
    return ( 
        <div className="container">
        <div className="content">
      
        <Rightsection />
      
        <Switch>
            <Route path='/timeline/singlepost/:postid' component={Singlepost}/> 
            <Route path='/timeline/post' component={Postdb}/>
        </Switch>

        </div>
        <div className="clear" />
        
        </div>  
     )
  }
}

export default Timeline;