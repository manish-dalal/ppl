import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import ReactDOM from 'react-dom';


class Postform extends Component {
  constructor(props){
    super(props)
    
    this.state={
            title:"",
            description: "",
            categories: "",           
            postedImage: null,
            userid: localStorage.getItem('userid'),
            username: localStorage.getItem('username'),
            
          }
  }
  onDrop=(acceptedFiles, rejectedFiles)=> {
    if (acceptedFiles && acceptedFiles.length) {
      this.setState({postedImage:acceptedFiles[0]});
    }}

  change = (e)=>{
    this.setState({ [e.target.name] :  e.target.value})
  }

  validation = () =>{
    let data = {
                  title:this.state.title, 
                  description: this.state.description,
                  categories: this.state.categories,
              }
              let flag = true;
              for( let val in data)
              {      
                if( data[val].length == 0)
                {
                    ReactDOM.findDOMNode(this.refs[val]).style.border = "1px solid red"
                    flag = false;
                }
                else
                {
                    ReactDOM.findDOMNode(this.refs[val]).style.border = "1px solid #e0dbdb"
                }
              }          
              return flag
  }
  
  submit1 = (e) => {
    e.preventDefault();
    let flag = this.validation()
    if( flag)
    {
      
      let formData = new FormData();
      formData.append("postedImage",this.state.postedImage);
      formData.append("categories",this.state.categories);
      formData.append("description",this.state.description);
      formData.append("title",this.state.title);
      formData.append("userid",this.state.userid);
      formData.append("username",this.state.username);      
      let options ={
          method: 'POST',
          body: formData
        }
      console.log("form-data", this.state.postedImage);
      

        fetch("https://powerful-plateau-21054.herokuapp.com/post/postadd",options)
        .then((response) => {
            
            response.json().then((userData) => {
              console.log("userData---",userData);
              // this.props.postmethod()
            })
          })
        
        .catch((err) => {
          console.log("err", err);
        })
      }
  }

   
  render() {
     return (
      <div className="contnt_2">
      <div className="register_sec">
        <form onSubmit={this.submit1}  encType="multipart/form-data" >
                <li><span>Title</span><input type="text" placeholder="Enter post title" ref= "title" name="title" onChange={this.change} /></li>
                 <li><span>Description</span><input type="text" placeholder="Enter post description" ref= "description" name="description" onChange={this.change} /></li>
                 <li><span>Categories</span><select ref= "categories" name="categories" onChange={this.change}>
                                   {this.props.catdata.map(( col , i ) => { 
                                           return <option value={col.categories}>{col.categories}</option>                                     
                                    })   }
                                            </select> </li>
 
                 <section>
                 <Dropzone className='imageDropper' name="postedImage" onDrop={this.onDrop}>
                <div>
                  <p >Click Here to Upload A Single Image</p>
                  {this.state.postedImage===null?"":<img src={this.state.postedImage.preview} />}
                </div>
              </Dropzone>
                </section>
                 <li><input type="submit" /></li>
        </form>
     </div>
     </div>
     )
  }
}

export default Postform;