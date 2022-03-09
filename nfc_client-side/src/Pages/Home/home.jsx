import React from "react";
import Logo from "../../Images/logo.png";
import "./home.css";
import Navbar from "../../Components/navbar/navbar";

/*landing page slider Start*/
    // var counter = 1;
    // setInterval(function(){
    //   document.getElementById('radio' + counter).checked = true;
    //   counter++;
    //   if(counter > 4){
    //     counter = 1;
    //   }
    // }, 5000);
/*landing page slider End*/

function Card(props){
    return(
        <>
            <img class="corevalues_card_image" src={props.image} alt='' />
            <p class="corevalues_card_text">{props.text}</p>
            <p class="ourvalues_card_textdescription">{props.textdescription}</p>
        </>
    ); 
}
function Servicecard(props){
    return(
        <>
            <p class="landingpage_serviceCardName">{props.service}</p>
            <p class="landingpage_serviceCardTextdescription">{props.servicedescription}</p>
            <img class="landingpage_serviceImage" src={props.image} alt='' />
        </>
    );
}
function Ourcustomers(props){
    return(
        <>
            <p className="customers_description">{props.customers_description}</p>
            <img src={props.customer_image} alt="" class="customer_image"  />

</>

    );
}
function Slideshow(props){
    return(
        <>
            <div className="slideshow_props">
                <div className="landingpage_productname">
                    <h2 class="landingpage_productname_text">{props.landingpage_productname}</h2>
                </div>
                <div className="landingpage_productdescription">
                    <p class="landingpage_productdescription_text">{props.landingpage_productdescription}</p>
                </div>
                <div className="landingpage_knowmore">
                    <button class="landingpage_knowmore_text">{props.landingpage_knowmore}</button>
                </div>
                <div className="landingpage_productimage">
                    <img src={props.landingpage_productimage} alt="" class="landingpage_productimage_image" />
                </div>
            </div>
            
            
        </>
    );
}
function Home(){
    return (
        <div>
            <div class="navbar">
                <Navbar />
            </div>
            <div className="landingpage_body1" >
                <div className="slider">
                    <div className="slides">
                        <div class="slide1">
                            <Slideshow landingpage_productname="MYQUIX " landingpage_productdescription="loreum epsum loreum epsum better loreum ep loreum loreum loreum" landingpage_knowmore="Know More" landingpage_productimage={Logo}  />
                            
                        </div>
                        <div class="slide2">
                            
                        </div>
                        <div class="slide3">
                            
                        </div>
                    </div>
                    <div className="manual_buttons">
                        <button class="button1">
                        <p className="button1_text">MYQUIX
                        <hr /></p>
                            {/* <hr class="button1_line" /> */}
                        </button>
                        
                        {/* <hr class="button1_line" /> */}
                        <button class="button2">
                            <p className="button2_text">ASSET MANAGEMENT <hr /></p>
                            {/* <hr class="button2_line" /> */}
                        </button>
                        
                        <button class="button3">
                            <p className="button3_text">REPORTING TOOL <hr /></p>
                            {/* <hr class="button3_line" /> */}
                        </button>
                        
                        <button class="button4">
                            <p className="button4_text">SEE MORE <hr /></p>
                            {/* <hr class="button4_line" /> */}
                        </button>
                        
                    </div>
                    
                </div>
            </div>
            <div className="landingpage_body2">
                <div class="landingpage_aboutus_page">
                <p class="aboutus_text">About Us</p>
                <p class="aboutus_textdescription">lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.lmao </p>
                </div>
            </div>
            <div className="landingpage_body3"></div>
                <div class="core_values_page">
                <p class="corevalues_text">Our Values</p>
                <div class="core_values_cards">
                
                    <div class="core_values_card1">
                        <Card   text="Product Development" textdescription="Near field communication technologies is where we excel and specialise in. We make sure that we are the best at it." />
                    </div>
                    <div class="core_values_card2">
                        <Card   text="NFC Solutions" textdescription="Reliable contactless technology for ticketing, payment, and loyalty along with logical and physical access is what we offer you." />
                    </div>
                    <div class="core_values_card3">
                        <Card   text="Authenticity Check" textdescription="To identify the right candidates, Authentic Checks to check profiles/address verification for both pre-employment and post-employment, which we shall provide." />
                    </div>
                      
                </div>
            </div>
            <div className="landingpage_body4">
                <p class="ourcustomers_text">Our customers</p>
                <p class="ourcustomers_textdescription">lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.</p>
                <div className="landingpage_services_getintouch">
                        <button className="landingpage_services_getintouch_button">Get in touch</button>
                    </div>
                <div className="ourcustomer_boxes">
                    <div className="box1">
                        <Ourcustomers customers_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt. turpis orci, suspendisse tincidunt." customer_image={Logo} />
                    </div>
                    <div className="box2">
                        <Ourcustomers customers_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt. turpis orci, suspendisse tincidunt." customer_image={Logo} />
                    </div>
                    <div className="box3">
                        <Ourcustomers customers_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt. turpis orci, suspendisse tincidunt." customer_image={Logo} />
                    </div>
                    <div className="box4">
                        <Ourcustomers customers_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt. turpis orci, suspendisse tincidunt." customer_image={Logo} />
                    </div>
                </div>

            </div>
            <div class="landingpage_body5">
                <div class="landingpage_services">
                <p class="landingpage_Services_text">Services</p>
                <p class="services_text_description">lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.</p>
                <div className="service_cards">
                    <div className="serviceCard1">
                         <Servicecard service="HR Services" servicedescription="Template helper for generator lorem-ipsum placeholder text. Should work with any template engine, but can also be used a regular javascript util." image={Logo} />
                        <hr></hr>
                    </div>
                    <div className="serviceCard2">
                        <Servicecard service="Rapid Growth" servicedescription="Template helper for generator lorem-ipsum placeholder text. Should work with any template engine, but can also be used a regular javascript util." image={Logo} />
                        <hr></hr>
                    </div>
                    <div className="serviceCard3">
                        <Servicecard service="Quality Services" servicedescription="Template helper for generator lorem-ipsum placeholder text. Should work with any template engine, but can also be used a regular javascript util." image={Logo} />
                        <hr></hr>
                    </div>
                    <div className="serviceCard4">
                        <Servicecard service="Software Development" servicedescription="Template helper for generator lorem-ipsum placeholder text. Should work with any template engine, but can also be used a regular javascript util." image={Logo} />
                        <hr></hr>
                    </div>
                    <div className="landingpage_services_findmore">
                        <button className="landingpage_services_findmore_button">Find More</button>
                    </div>
                </div>
                
               
            </div>
        </div>
         <div className="landingpage_body6">
                <div className="contact_page">
                    <p className="contact_text">Contact</p>
                    <p className="contact_description">Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit amet, consectetur.</p>
                    <p className="conversation">Let’s start a <span class="span_conversation">conversation</span> </p>
                    <button className="contact_page_submit">Submit</button>
                    <div className="landingpage_contactus_box">
                        <input class="landingpage_fname" type="text"  placeholder="First Name*" required />
                        <hr class="fname_line" />
                        <input className="landingpage_lname" type="text"  placeholder="Last Name*" required />
                          <hr class="lname_line" />
                        <input className="landingpage_phone" type="text"  placeholder="Phone Number*" required />
                            <hr class="phone_line" />
                        <input className="landingpage_email" type="text"  placeholder="Email*" required />
                            <hr class="email_line" />
                        <input className="landingpage_help" type="text"  placeholder="How can we help*" required />
                            <hr class="help_line" />
                    </div>
                </div>

            </div>
            
            <div className="landingpage_footer">
                <hr class="line_above_footer" />
                <div className="landingpage_nfcdescription">
                    <img src={Logo} alt="" className="landingpage_footer_image" />
                    <p className="landingpage_footer_nfc_description">We specialise in providing solutions in both software and staffing that require a thorough understanding of business, technology, and the balance between the two. </p>
                </div>
                <div className="landingpage_footer_social">
                    <p className="landingpage_footer_social_text">Social</p>
                    <p className="landingpage_footer_instagram">Instagram</p>
                        <p className="landingpage_footer_facebook">Facebook</p>
                        <p className="landingpage_footer_linkedin">LinkedIn</p>
                </div>
                <div className="landingpage_footer_sitemap">
                    <p class="landingpage_footer_sitemap_text">Sitemap</p>
                    <p className="landingpage_footer_aboutus">About Us</p>
                    <p className="landingpage_footer_services">Services</p>
                    <p className="landingpage_footer_work">Work</p>
                    <p className="landingpage_footer_careers">Careers</p>
                    <p className="landingpage_footer_contact">Contact</p>

                    
                </div>
                <div className="landingpage_footer_office"><p />
                    <p className="landingpage_footer_office_text">Office</p>
                    <div className="landingpage_footer_usa">
                        <p className="landingpage_footer_usa_text">USA</p>
                        <p className="landingpage_footer_usa_address">4320 Winfield Road Suite 200, Warrenville Illinois, 60555</p>
                    </div>
                    <br />
                    <div className="landingpage_footer_india">
                        <p className="landingpage_footer_usa_text">India</p>
                        <p className="landingpage_footer_usa_address">2nd Floor MR Prime, Survey No.6, BP Raju Marg, (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                    </div>    
                </div>
            </div>
            <div className="footer_bottom">
                <p className="landingpage_footer_copyright">© Copyright nfcsolutionsusa. All Rights Reserved</p>
                <p className="landingpage_footer_terms">Terms & Conditons <hr /></p>
                <p className="landingpage_footer_privacy">Privacy Policy <hr /></p>
            </div>
        </div>
    );
}

export default Home;