import React, { Component } from 'react';
import FormData from 'form-data';

const iStyle = { objectFit: "cover" }

class Catdb extends Component {
  constructor(props){
    super(props)
    
  }
  
   
  render() {
     return (
      <div>
      {this.props.catdata.map(( col , i ) => {
            return <li key ={i} ><a href="#">
                      <span className="list_icon">
                          <img src={`https://powerful-plateau-21054.herokuapp.com/${col.catedImage}`} alt="up" heigh="40px" width="40px" style={iStyle} />
                      </span> { col.categories }</a>
                    </li>
        }
      )}
     </div>
     )
  }
}

export default Catdb;