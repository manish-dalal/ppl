import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Catform extends Component {
  constructor(props){
    super(props)
    
    this.state={
            categories: "",           
            catedImage: null,
          }
  }
  onDrop=(acceptedFiles, rejectedFiles)=> {
    if (acceptedFiles && acceptedFiles.length) {
      this.setState({catedImage:acceptedFiles[0]});
    }}

  change = (e)=>{
    this.setState({ [e.target.name] :  e.target.value})
  }
  

  submit2 = (e) => {
    e.preventDefault();
    // let flag = this.validation()
    if( true)
    {
      
      let formData = new FormData();
      formData.append("catedImage",this.state.catedImage);
      formData.append("categories",this.state.categories);
      let options ={
          method: 'POST',
          body: formData
        }
      console.log("form-data", this.state);
      

        fetch("https://powerful-plateau-21054.herokuapp.com/cat/catadd",options)
        .then((response) => {
            
            response.json().then((userData) => {
              console.log("catData---",userData);
              this.props.catmethod( )
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
        <form onSubmit={this.submit2}  encType="multipart/form-data" >
                 <li><span>Categories</span><input type="text" placeholder="Enter categories" ref= "categories" name="categories" onChange={this.change}/></li>
                 <section>
                 <Dropzone className='imageDropper' name="catedImage" onDrop={this.onDrop}>
                 <div>
                  <p >Click Here to Upload A Single Image</p>
                  {this.state.catedImage===null?" ":<img src={this.state.catedImage.preview} />}
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

export default Catform;