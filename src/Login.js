import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


const pStyle = { fontSize: '15px', color : 'red'}
class Login extends Component {
  constructor(props) {
      super(props);
    console.log("this is login console",this.props);
       this.state={
                    user:   { 
                                email: "",
                                password: "",
                            },
                    invalid :"" 
                }
   }

change = (e)=>{
    this.setState({ ...this.state, user: { ...this.state.user, [e.target.name] :  e.target.value}})
}

validation = () =>{
    let data = this.state.user;
    let flag = true;
    for( let val in data)
    {      
      if( data[val].length == 0)
      {
          ReactDOM.findDOMNode(this.refs[val]).style.border = "1px solid red"
          flag = false;
      }
      else if( val == 'password' &&  data.password.length < 6  )
      {
            ReactDOM.findDOMNode(this.refs.password).style.border = "1px solid red"
            flag = false
      }
      else
      {
            ReactDOM.findDOMNode(this.refs[val]).style.border = "1px solid #e0dbdb"
      }
    }
    let value = data.email
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(value))
    {
            ReactDOM.findDOMNode(this.refs.email).style.border = "1px solid red"        
            flag= false
    }
    
    return flag  
  }

submit1 = (e) => {
    e.preventDefault();
    
    let flag = this.validation()
    if( flag)
    {
        let options = {
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
          method: 'Post',
          body: JSON.stringify(this.state.user)
            }

        
        fetch("https://powerful-plateau-21054.herokuapp.com/login", options)
        .then((response) => {
            
          // console.log("this is the response",response);
            response.json().then((userData) => {
              console.log("userData---",userData);
              if(userData.email)
              {
                localStorage.setItem('userid',userData._id);
                localStorage.setItem('username',userData.username);
                this.props.history.push("/timeline/post")
              }
              else
              {
                this.setState({invalid: userData.v})
              }
            })
          })
        
        .catch((err) => {
          console.log("err", err);
        })
      }
}

  render() {
            return (
                <div>
               
                <div className="container">
                  <div className="content">
                    <div className="content_rgt">
                      <div className="login_sec">
                        <h1>Log In</h1>
                        <p  style={pStyle}>{this.state.invalid}</p>
                        <ul>
                            <form onSubmit={this.submit1}>
                          <li><span>Email-ID</span><input type="text" placeholder="Enter your email" ref="email" name="email" onChange={this.change}/></li>
                          <li><span>Password</span><input type="password" placeholder="Enter your password" ref="password" name="password" onChange={this.change}/></li>
                          <li><input type="checkbox" />Remember Me</li>
                          <li><input type="submit" defaultValue="Log In" /><a href>Forgot Password</a></li>
                            </form>
                        </ul>
                        <div className="addtnal_acnt">I do not have any account yet.<Link to="/user/register"><a href>Create My Account Now !</a> </Link></div>
                      </div>
                    </div>
                    <div className="content_lft">
                      <h1>Welcome from PPL!</h1>
                      <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                      <img src="/images/img_9.png" alt /> </div>
                  </div>
                </div>
              </div>
            );
          }
}

export default Login;
