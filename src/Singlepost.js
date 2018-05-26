  import React, { Component } from 'react';
  import {Link} from 'react-router-dom';


  class Singlepost extends Component {
    constructor(props){
      super(props)
      
      this.state={
        singlepost: "",
        commenttext: " "

      }
  }
  componentWillMount() {
    this.showsingleposts()
  }
   
  showsingleposts = () =>{
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      method: 'Post',
      body: JSON.stringify(this.props.match.params)
    }
  
    fetch("https://powerful-plateau-21054.herokuapp.com/post/showsingleposts", options)
    .then((response) => {
        
        response.json().then((postData) => {
          
          this.setState( {singlepost : postData} )
          console.log("postspostspostspostsposts",this.state.singlepost);
          
          })
      })
    
    .catch((err) => {
      console.log("err", err);
    })
    
  }
  
  change = (e)=>{
    this.setState({ [e.target.name] :  e.target.value})
  }
  
  commentpushfuntion = (e) =>{
    e.preventDefault();
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      method: 'Post',
      body: JSON.stringify({ userid :  localStorage.getItem('userid'), username:  localStorage.getItem('username') , commenttext: this.state.commenttext ,postid : this.props.match.params.postid })
    }
    console.log("bodydatat======", options.body)

    fetch("https://powerful-plateau-21054.herokuapp.com/post/commentpush", options)
    .then((response) => {
        
        response.json().then((postData) => {
          this.showsingleposts();
          console.log("coment sucess",postData);
          
          })
      })
    
    .catch((err) => {
      console.log("err", err);
    })
  }

  likefuntion = () => {
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      method: 'Post',
      body: JSON.stringify({ userid :  localStorage.getItem('userid'), username:  localStorage.getItem('username') ,postid : this.props.match.params.postid })
    }
    console.log("bodydatat======", options.body)

    fetch("https://powerful-plateau-21054.herokuapp.com/post/likepush", options)
    .then((response) => {
        
        response.json().then((postData) => {
          this.showsingleposts();
          console.log("Like sucess",postData);
          
          })
      })
    
    .catch((err) => {
      console.log("err", err);
    })
  }

    render() {
     if(this.state.singlepost.length == 0)
      return false;   
      let data = this.state.singlepost;
      console.log("My State in render>>>>>>>>.",this.state.singlepost)
      return (
        <div>
        
              <div className="content_lft">
                <div className="contnt_2">
                  <div className="div_a">
                    <div className="div_title">{this.state.singlepost.title}</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">{this.state.singlepost.categories}</div>
                    </div>
                    <div className="div_top">
                      <div className="div_top_lft"><img src="/images/img_6.png" />{this.state.singlepost.username}</div>
                      <div className="div_top_rgt"><span className="span_date">{new Date(this.state.singlepost.date).toUTCString()}</span></div>
                    </div>
                    <div className="div_image"><img src={ `https://powerful-plateau-21054.herokuapp.com/${this.state.singlepost.postedImage}`} alt="pet" /></div>
                    <div className="div_btm">
                      <div className="btm_list">
                        <ul>
                        {console.log("++++++++",this.state.singlepost.like)}
                          <li><a href="#"><span className="btn_icon"><img src="/images/icon_001.png" alt="share" /></span>Share</a></li>
                          <li><a href="#"><span className="btn_icon"><img src="/images/icon_002.png" alt="share" /></span>Flag</a></li>
                          <li><a href="#" onClick={this.likefuntion} ><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>{data.like.length} Likes</a></li>
                          <li><a href="#"><span className="btn_icon"><img src="/images/icon_004.png" alt="share" /></span>{data.comment.length} Comments</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contnt_3">
                  <ul>
                    {data.comment.map( (cols , i ) => {
                     
                     return <li keys={i}>
                      <div className="list_image">
                        <div className="image_sec"><img src="/images/post_img.png" /></div>
                        <div className="image_name">{cols.commentusername}</div>
                      </div>
                      <div className="list_info">
                        {cols.commenttext}
                        </div>
                      <input type="button" defaultValue="Reply" className="orng_btn" />
                    </li>
                  }  
                  )}
                    <li>
                      <div className="cmnt_div1">
                      <form onSubmit={this.commentpushfuntion}>
                        <input type="text" placeholder="Enter your Comment" name="commenttext" onChange={this.change} className="cmnt_bx1" />
                        <input type="submit" className="sub_bttn1" defaultValue="Submit Comment" />
                      </form>
                      </div>
                    </li>
                  </ul>
                  <div className="view_div"><a href="#">View more</a></div>
                </div>
              </div>
            <div className="clear" />
          
          </div>
      )
      }
  }

  export default Singlepost;