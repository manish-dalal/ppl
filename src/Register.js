import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';


const pStyle = { fontSize: '15px', color : 'red'}
class Register extends Component {
  constructor(props){
     super(props)
     
    console.log("this is register console",this.props);
     this.state={
         user: { 
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: ""
          },
         eremail:""
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
      return false
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

        
        fetch("https://powerful-plateau-21054.herokuapp.com/create", options)
        .then((response) => {
            
          // console.log("this is the response",response);
            response.json().then((userData) => {
              console.log("userData---",userData);
              if(userData.email)
              {
                this.props.history.push("/user/login")
              }
              else
              {
                this.setState({eremail: userData.a})
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
             <div className="register_sec">
               <h1>Create An Account</h1>
               <p style={pStyle}>{this.state.eremail}</p>
               <ul>
                 <form onSubmit={this.submit1}>
                 <li><span>Username</span><input type="text" placeholder="Enter your username" ref= "username" name="username" onChange={this.change} /></li>
                 <li><span>Password</span><input type="password" placeholder="Enter your password" ref= "password" name="password" onChange={this.change}/></li>
                 <li><span>Email</span><input type="text" placeholder="Enter your email" ref= "email" name="email" onChange={this.change}/></li>
                 <li><span>First Name</span><input type="text" placeholder="Enter your first name" ref= "firstname" name="firstname" onChange={this.change}/></li>
                 <li><span>Last Name</span><input type="text" placeholder="Enter your last name" ref= "lastname" name="lastname" onChange={this.change}/></li>
                 <li><input type="checkbox" name="checkbox" ref="checkbox"/>I agree to Term &amp; Conditions</li>
                 <li><input type="submit" defaultValue="Register" /></li>
                 </form>
               </ul>
               <div className="addtnal_acnt">I already have an account.<Link to = "/user/login"><a href>Login My Account !</a></Link></div>
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

export default Register;
