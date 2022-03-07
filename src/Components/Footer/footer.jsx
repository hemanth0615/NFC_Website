import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
                <div className="social">
                <h1>social</h1>
                    <p>LINKEDIN</p>
                    <p>FACEBOOK</p>
                    <p>INSTAGRAM</p>
                </div>
                <div className="sitemap">
                <h1>sitemap</h1>
                    <p>About us</p>
                    <p>Services</p>
                    <p>Work</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="office">
                    <h1>office</h1>
                    <h2>US</h2>
                    <p>4320 Winfield Road
                    Suite 200, Warrenville
                    Illinois, 60555</p>
                    <h2>India</h2>
                    <p>2nd Floor MR Prime,
                    Survey No.6, BP Raju Marg,
                    (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                </div>
                <span>© Copyright nfcsolutionsusa. All Rights Reserved</span>
                <span>Terms & Conditons</span>
                <span>Privacy Policy</span>
            </div>
    
    )
}
export default Footer;