import "./contactus.css";
import Navbar from "../../Components/navbar/navbar";
<<<<<<< HEAD:src/Pages/Contact Us/contactus.jsx
import nfcTag from "../../Components/NFC-TAG/nfc_tag";
import Semicircle from "../../Images/Ellipse 99.png";
import Logo from "../../Images/logo.png";

=======
// import nfcTag from "../../Components/NFC-TAG/nfc_tag"
>>>>>>> 95a3283b0a98accc2880fa40661b8834743e3306:nfc_client-side/src/Pages/Contact Us/contactus.jsx
function contactUs(){
    return(
        <>
            <div class="navbar">
                <Navbar />
            </div>
            <div className="body1">
                <div className="semicicle">
                    <p className="body1_text">Lorem ipsum dolor sit amet,consectetur adipiscing elitm ipsum dolor sit.</p>
                    <div className="semicircle">
                        {/* <img class="semicricle" src={Semicircle} alt="" /> */}
                    </div>
                </div>
            </div>
            <div className="body2">
                <p className="body2_text1">Lorem ipsum dolor sit amet</p>
                <p className="body2_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit amet, consectetur.</p>
                <p className="contactus_conversation">Let’s start a conversation</p>
                <div className="body2_box">
                    <input className="contactus_fname" type="text" name="name" placeholder="First Name*" required />
                    <input className="contactus_lname" type="text" name="name" placeholder="Last Name*" required />
                    <input className="contactus_phone" type="text" name="name" placeholder="Phone Number*" required />
                    <input className="contactus_email" type="text" name="name" placeholder="Email*" required />
                    <input className="contactus_help" type="text" name="name" placeholder="How can we help*" required />
                    <button class="contactus_send_button"><p className="contactus_send_text">Send</p></button> 
                </div>
            </div>
            <div class="body3">
                <div className="ourLocation">
                    <p className="contactus_ourlocation_text">Our Location</p>
                    <div className="address_boxes">
                        <div className="contactus_usa_box">
                            <p className="usa_text">
                            USA</p>
                            <p className="contactus_address">4320 Winfield Road Suite 200, Warrenville Illinois, 60555
                            United States of America</p>
                        </div>
                        <div className="contactus_india_box">
                            <p className="usa_text">
                            India</p>
                            <p className="contactus_address">2nd Floor, MR Prime,
                            Survey No.6, BP Raju Marg,
                            (Behind Ratnadeep Super Market)
                            White Fields, Kondapur,
                            Hyderabad, Telangana – 500084</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="body4">
                <div className="nfc_description_page">
                    <img src={Logo} alt="" className="nfc_logo" />
                    <p className="nfc_description">We specialise in providing solutions in both software and staffing that require a thorough understanding of business, technology, and the balance between the two. </p>
                    <hr class="nfc_description_page_hr"></hr>
                </div>
                
            </div>
            <div className="contactus_footer">
                <div className="body5_footer">
            
                <div className="C-section3">
                <div className="social">
                <h1 className="social-h">social</h1><br />
                    <p>linkedin</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
                <div className="sitemap">
                <h1 className="sitemap-h">sitemap</h1><br />
                    <p>About us</p>
                    <p>Services</p>
                    <p>Work</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="office">
                    <h1 className="office-h">office</h1><br />
                    <div className="us-c">
                        <h2>US</h2><br />
                        <p>4320 Winfield Road
                        Suite 200, Warrenville
                        Illinois, 60555</p>
                    </div>
                    <div className="india-c">
                        <h2>India</h2><br />
                        <p>2nd Floor MR Prime,
                        Survey No.6, BP Raju Marg,
                        (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                    </div>                   
                </div>
                <div className="extra">
                    <span className="copyright">© Copyright nfcsolutionsusa. All Rights Reserved</span>
                    <span className="terms">Terms & Conditons</span>
                    <span className="privacy">Privacy Policy</span>
                </div>
                
            </div>
            </div> 
            </div>
            

            
        </>
    );
}
export default contactUs;