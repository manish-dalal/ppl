import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
            userpoststate: ""
    }
  }

  componentWillMount() { 
    this.userposts();
    console.log('Component WILL MOUNT!postdata') 
  }

  userposts = () =>{
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      method: 'Post',
      body: JSON.stringify({userid : localStorage.getItem('userid')})
    }
  
    fetch("https://powerful-plateau-21054.herokuapp.com/post/userpost", options)
    .then((response) => {
        
        response.json().then((userpostData) => {
          console.log("userpostdata", userpostData.post);
          
          this.setState( { userpoststate : userpostData.post} )
          console.log("state--userpost",this.state.userpoststate);
          
          })
      })
    
    .catch((err) => {
      console.log("err", err);
    })
    
  }

  render() {
    if(this.state.userpoststate.length === 0){
      return false //return false or a <Loader/> when you don't have anything in your photoshow[]
     }
     
     return (
        <div>
             {this.state.userpoststate.map(( col , i ) => {

            return    <div className="contnt_2" key={i} >
            <div className="div_a">
              <div className="div_title">{col.title}</div>
              <div className="btm_rgt">
                <div className="btm_arc">{col.categories}</div>
              </div>
              <div className="div_top">
                <div className="div_top_lft"><img src="/images/img_6.png" />{col.username}</div>
                <div className="div_top_rgt"><span className="span_time">{new Date(col.date).toUTCString()}</span></div>
              </div>
              <div className="div_image"><Link to = {`/timeline/singlepost/${col._id}`}><img src={`https://powerful-plateau-21054.herokuapp.com/${col.postedImage}`} alt="pet" /></Link></div>
              <div className="div_btm">
                <div className="btm_list">
                  <ul>
                    <li><a href="#"><span className="btn_icon"><img src="/images/icon_001.png" alt="share" /></span>Share</a></li>
                    <li><a href="#"><span className="btn_icon"><img src="/images/icon_002.png" alt="share" /></span>Flag</a></li>
                    <li><a href="#"><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>0 Likes</a></li>
                    <li><a href="#"><span className="btn_icon"><img src="/images/icon_004.png" alt="share" /></span>4 Comments</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        }
        )}
        </div>
     )
    }
}

export default Home;