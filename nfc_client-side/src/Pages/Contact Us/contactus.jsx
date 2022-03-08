import "./contactus.css";
import Navbar from "../../Components/navbar/navbar";
// import nfcTag from "../../Components/NFC-TAG/nfc_tag"
function contactUs(){
    return(
        <>
            <div class="navbar">
                <Navbar />
            </div>
            <div className="body1">
                <div className="semicicle">
                    <p className="body1_text">Lorem ipsum dolor sit amet,consectetur adipiscing elitm ipsum dolor sit.</p>
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
                <nfcTag />
            </div>

        </>
    );
}
export default contactUs;