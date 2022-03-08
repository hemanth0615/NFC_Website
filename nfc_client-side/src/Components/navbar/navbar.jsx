import "./navbar.css";
import Logo from "../../Images/logo.png"
function Navbar(){
    return(
        <div class="navbar">
            <img class="logo" src={Logo} alt='' />
            <ul class="nav_elements">
                <li class="nav_aboutus">About Us</li>
                <li class="nav_services">Services</li>
                <li class="nav_careers">Careers</li>
                <li class="nav_work">Work</li>
                <li class="nav_contactus">Contact Us</li>
            </ul>
        </div>
    );
}
export default Navbar;