import React from "react";
import { Link } from "react-router-dom";
import "../Services/services.css";
import logo from "../../Images/image 4.png";
import image1 from "../../Images/Rectangle 14.png";
import service1 from "../../Images/Rectangle 294.png";
import service2 from "../../Images/Rectangle 295.png";
import service3 from "../../Images/Rectangle 296.png";
import service4 from "../../Images/Rectangle 297.png";
import service5 from "../../Images/Rectangle 298.png";
import image2 from "../../Images/Development.png";
import callimg from "../../Images/call.png";

function Services(){
    return(
        <div>
            <div class="navbar">
                <div>
                    <img className="navbar-logo1" src={logo} />
                </div>
                <div className="nav-menu1">
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> About Us</Link> </p>
                    <p className='nav-item'><Link to="/services" className='nav-links'> Services</Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> Work</Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> Careers</Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> Contact Us</Link> </p>
                </div>
            </div>
            <div className="section-1">
                <span>Our</span><span className="blue">Services</span>
                <h1>Always there for our customers</h1>
                <img src={image1} />
            </div>
            <div className="section-2">
                <div className="card1">
                    <img src={service1} />
                    <ul><b>BACKEND SERVICES</b>
                        <li>Cloud computing</li>
                        <li>Oracle application</li>
                    </ul>
                </div>
                <div className="card2">
                    <img src={service2} />
                    <ul><b>WEB & APP DEVELOPMENT</b>
                        <li>Mobile app development</li>
                        <li>Enterprizes applications using Java,.net & PHP</li>
                    </ul>
                </div>
                <div className="card3">
                    <img src={service3} />
                    <ul><b>DATA ENGINERRING</b>
                        <li>Big Data</li>
                        <li>SAP</li>
                    </ul>
                </div>
                <div className="card4">
                    <img src={service4} />
                    <ul><b>TRAINING</b>
                        <li>Placement and training</li>
                    </ul>
                </div>
                <div className="card5">
                    <img src={service5} />
                    <ul><b>COMMUNICATIONS</b>
                        <li>NFC & RFID services</li>
                    </ul>
                </div>
            </div>
            <div className="section2">
                <img src={image2} />
                <div className="section2-1">
                    <span>Loren ipsum dolor sit amet,consectetur  </span>
                </div>
            </div>
           
            <div className="section4">
                <span>Loren ipsum dolor sit amet, consectetur  </span>
                <button>Contact us</button>
                <img src={callimg} />
            </div>
            <div className="section5">
                <img src={logo} />
                <span>We specialise in providing solutions in both software and staffing that require a thorough 
                understanding of business, technology, and the balance between the two. </span>
            </div>
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
        </div>
    )
}
export default Services;
