import React, { Component } from 'react';

class Footer extends Component {
   
  render() {
     return (
        <div>
            <div className="clear" />
                <div className="footr">
                    <div className="footr_lft">
                    <div className="footer_div1">Copyright © Pet-Socail 2014 All Rights Reserved</div>
                        <div className="footer_div2"><a href="#">Privacy Policy </a>| <a href="#"> Terms &amp; Conditions</a></div>
                    </div>
                    <div className="footr_rgt">
                    <ul>
                        <li><a href="#"><img src="/images/social_1.png" /></a></li>
                        <li><a href="#"><img src="/images/social_2.png" /></a></li>
                        <li><a href="#"><img src="/images/social_3.png" /></a></li>
                        <li><a href="#"><img src="/images/social_4.png" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
     )
    }
}

export default Footer;