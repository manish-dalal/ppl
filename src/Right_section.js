import React, { Component } from 'react';
import Postform from './Postform'
import Catform from './Catform'
import Catdb from './Catdb'



class Right_section extends Component {
    constructor(props){
        super(props)
        
        this.state={
            form: false,
            catflag: false,
            catshow: ""
         }
    }
    
  componentWillMount() {
      this.catposts()
   }

    catposts = () =>{
      let options = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
        method: 'Post',
        body: JSON.stringify(this.state.user)
      }
  
      fetch("https://powerful-plateau-21054.herokuapp.com/cat/showcatdb", options)
      .then((response) => {
          
          response.json().then((catData) => {
            this.setState( {catshow : catData.cat} )
            console.log("state--cata",this.state.catshow);
            
            })
        })
      
      .catch((err) => {
        console.log("err", err);
      })
      
    }
  

    postform = ()=>{
        this.setState({form: !this.state.form })
    }

    catform = () => {
        this.setState({catflag: !this.state.catflag })
    }
    
  render() {
     return (
      <div>
            <div className="content_rgt">
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <a href="#" onClick={this.postform} >Upload Post</a> </div>
              {this.state.form?( <Postform  catdata={this.state.catshow} ></Postform>):<p></p>} 
             
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <a href="#" onClick={this.catform}>Add Categories</a> </div>
              {this.state.catflag?( <Catform catmethod={this.catposts} ></Catform>):<p></p>}            

              <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                <div className="rght_list">
                  <ul>
                    {this.state.catshow?(<Catdb catdata={this.state.catshow}/>):(<p></p>) }

                  </ul>
                </div>
              </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                <div className="sub_dwn">
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img1.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img2.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Dogs</div>
                    </div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img3.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Rabbits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              
      </div>


     )
  }
}

export default Right_section;