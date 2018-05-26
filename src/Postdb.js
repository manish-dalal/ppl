import React, { Component } from 'react';
import FormData from 'form-data';
import {Link} from 'react-router-dom';
import UserProfile from './UserProfile'


const style1 = { width : '66%'}
class Postdb extends Component {
  constructor(props){
    super(props)
    this.state={
            photoshow: ""
    }
    console.log("constructor");
  }

  componentWillMount() { 
    this.showposts();
    console.log('Component WILL MOUNT!postdata') 
  }

  showposts = () =>{
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      method: 'Post',
      body: JSON.stringify(this.state)
    }
  
    fetch("https://powerful-plateau-21054.herokuapp.com/post/showdb", options)
    .then((response) => {
        
        response.json().then((postData) => {
          console.log("postdata", postData.post);
          
          this.setState( {photoshow : postData.post} )
          console.log("state--post",this.state.photoshow);
          
          })
      })
    
    .catch((err) => {
      console.log("err", err);
    })
    
  }


  render() {
    {console.log("postdb++++",this.state.photoshow) }
    if(this.state.photoshow.length === 0){
      return false //return false or a <Loader/> when you don't have anything in your photoshow[]
     }
    
     return (
      <div>
      <UserProfile />
      {this.state.photoshow.map(( col , i ) => {

            return    <div className="contnt_2" key={i} style={style1}>
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
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>{col.like.length} Likes</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_004.png" alt="share" /></span>{col.comment.length} Comments</a></li>
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

export default Postdb;