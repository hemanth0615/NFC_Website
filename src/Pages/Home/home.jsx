import React from "react";
import Logo from "../../Images/logo.png";
import "./home.css";
import Navbar from "../../Components/navbar/navbar";

function Card(props){
    return(
        <>
            <img class="card_image" src={props.image} alt='' />
            <p class="card_text">{props.text}</p>
            <p class="card_textdescription">{props.textdescription}</p>
        </>
    );
    
    
}

function serviceCard(props){
    return(
        <>
            <p class="serviceCardName">{props.service}</p>
            <p class="serviceCardText">{props.servicedescription}</p>
            <img class="serviceImage" src={props.image} alt='' />
        </>
    );
}

function slider(){
    return(
        <>

        </>

    );
}
function Home(){
    return (
        <div>
            <div class="navbar">
                <Navbar />
            </div>
            <div class="Landing_page">
                <slider />
            </div>
            <div class="aboutus_page">
                <p class="aboutus_text">About Us</p>
                <p class="aboutus_textdescription">lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.lmao </p>
            </div>
            <div class="core_values_page">
                <p class="corevalues">Core Values</p>
                <p class="core_values_text">We provide quality services and are able to assist you because of these core values.</p>
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
            <div class="ourcustomers_page">
                <p class="ourcustomers_text">Our customers</p>
                <p class="ourcustomers_textdescription">lmao imessed up retty bad loreum be like lets sleep and im sure epsum is alone and typing dumb shit like this.</p>
                <button class="knowmore_button">Know More</button>
                <div class="customers">
                    <div class="customers_box">
                        <div class="customer1">
                            <img class="customer1_image"  alt='' />
                            <p class="customer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt. turpis orci, suspendisse tincidunt.</p>
                        </div>
                        <div class="customer2">
                            <img class="customer2_image"  alt='' />
                            <p class="customer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt.</p>
                        </div>
                        <div class="customer3">
                            <img class="customer3_image"  alt='' />
                            <p class="customer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt.</p>
                        </div>
                        <div class="customer4">
                            <img class="customer4_image"  alt='' />
                            <p class="customer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla maecenas turpis orci, suspendisse tincidunt.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div class="services">
                <p class="Services">Services</p>
                <p class="services_text">Services that flex to fit your needs</p>
                <div class="serviceCards">
                    <div class="serviceCard1">
                        <p class="serviceCardName">HR Services</p>
                        <p class="serviceCardText">Near field communication technologies is where we excel and specialise in. We make sure that we are the best at it.</p>
                        <img class="serviceImage"  alt='' />
                    </div>
                    {/* <br class="hr_break" /> */}
                    <div class="serviceCard2">
                        <p class="serviceCardName">Rapid Growth</p>
                        <p class="serviceCardText">Near field communication technologies is where we excel and specialise in. We make sure that we are the best at it.</p>
                        <img class="serviceImage"  alt='' />
                    </div>
                    <div class="serviceCard3">
                        <p class="serviceCardName">Quality Services</p>
                        <p class="serviceCardText">Near field communication technologies is where we excel and specialise in. We make sure that we are the best at it.</p>
                        <img class="serviceImage"  alt='' />
                    </div>
                    <div class="serviceCard4">
                        <p class="serviceCardName">Software Development</p>
                        <p class="serviceCardText">Near field communication technologies is where we excel and specialise in. We make sure that we are the best at it.</p>
                        <img class="serviceImage"  alt='' />
                    </div>
                    <button class="exploremore_button">Explore More</button>
                </div>
            </div>
            <div class="Products_page">
                <p class="products_text">Products</p>
                <p class="products_textdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="products_box">
                    <div class="product1">
                        <img class="product1_image" alt="" />
                        <p class="product1_description">ASSET MANAGEMENT</p>
                    </div>
                    <div class="product2">
                        <img class="product2_image" alt="" />
                        <p class="product2_description">MYQUIX</p>
                    </div>
                    <div class="product3">
                        <img class="product3_image" alt="" />
                        <p class="product3_description">REPORTING TOOL</p>
                    </div>
                </div>
                <div className="contact_page">
                    <p className="contact_text">Contact</p>
                    <p className="contact_description">Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit amet, consectetur.</p>
                    <p className="conversation">Let’s start a conversation</p>
                    <button className="getintough">Get in touch</button>
                </div>
                <div class="footer">
                    

                    <div className="social">
                    <p className="social_text">Social</p>
                        <p className="linkedin">LinkedIn</p>
                        <p className="facebook">Facebook</p>
                        <p className="instagram">Instagram</p>
                    </div>
                    <div className="sitemap">
                    <p className="sitemap_text">Sitemap</p>
                        <p className="footer_aboutus">About Us</p>
                        <p className="footer_services">Services</p>
                        <p className="footer_work">Work</p>
                        <p className="footer_careers">Careers</p>
                        <p className="footer_contact">ContactCareers</p>
                    </div>
                    <div className="office">
                        <p className="office_text">Office</p>
                        <spam className="us">
                            <p className="us_text">US</p>
                            <p className="us_address">4320 Winfield Road Suite 200, Warrenville Illinois, 60555</p>
                        </spam>
                        <span className="india">
                            <p className="india_text">India</p>
                            <p className="india_address">2nd Floor MR Prime,Survey No.6, BP Raju Marg,(Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                        </span>
                        
                    </div>
                    <div className="footer_end_parts">
                        <p className="copyright">© Copyright nfcsolutionsusa. All Rights Reserved</p>
                        <p className="terms">Terms & Conditons</p>
                        <p className="privacypolicy">Privacy Policy</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;