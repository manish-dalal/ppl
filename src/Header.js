import React, { Component } from 'react';
import {Link, Route, browserHistory, withRouter} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
     }
    
logout = () => {
    localStorage.setItem('userid', "");
    localStorage.setItem('username', "");
} 

  render() {
     return (
        <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="navbar-inner">
                <div className="container">
                    <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                    <a className="brand" href>PPL</a>
                    <div className="pro_info pull-right">
                        <div className="pro_icn"><img src="/images/pic_small.png" /></div>
                            <div className="pro_txt">Me<b className="caret" /></div>
                                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                    <li><a tabIndex={-1} href="#">My Profile</a></li>
                                    <li><a tabIndex={-1} href="#">Message Box</a></li>
                                    <li><a tabIndex={-1} href="#">Change Language</a></li>
                                    <li className="divider" />
                                    <li><a tabIndex={-1} href="#"><input type="text" placeholder="search" /></a></li>
                                </ul>
                            </div>
                        <div className="nav-collapse collapse">
                        <ul className="nav">
                            <li className="active"> <a href='/home' >Home</a> </li>
                            <li className> <a href>E-Coupons</a> </li>
                            <li className> <a href>E-Brands</a> </li>
                            <li className> <a href>Resuse Market</a> </li>
                            <li className> <a href>Lost and Found</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="header_lft">
                <div className="logo"><a href="#"><img src="/images/logo.png" /></a></div>
                    <div className="navigatn">
                        <ul>
                        <li><a href="/home" className="active">Home</a></li>
                        <li><a href="#"> E-Coupons </a></li>
                        <li><a href="#">E-Brands </a></li>
                        <li><a href="#"> Resuse Market </a></li>
                        <li><a href="#"> Lost and Found</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header_rgt">
                <div className="flag_div"><img src="/images/flag.png" /></div>
                    <input type="text" placeholder="Search" className="txt_box" />
                    <div className="msg_box"><a href="#"><span className="msg_count">100</span></a></div>
                    <div className="info_div">
                    <div className="dropdown" >                   
                    <div className="image_div"> <img src="/images/pic.png" /> </div>
                    
                    <button className="dropbtn">-</button>
                        <div class="dropdown-content" >
                            <Link to = "/home">Home</Link>
                            <Link to = "/user/login" onClick={this.logout}>Logout</Link>
                        </div>
                    </div>



                </div>
            </div>
        </div>
        </div>
     )
    }
}

export default Header;