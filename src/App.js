import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from "react-router-dom";

import Home from "./Pages/Home/home";
import AboutUs from "./Pages/About Us/aboutus";
import OurProducts from "./Pages/Our Products/ourproducts";
import OurCustomers from "./Pages/Our Customers/ourcustomers";
import Services from "./Pages/Services/services";
import ContactUs from "./Pages/Contact Us/contactus";
import Careers from "./Pages/Careers/careers";

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
          
      <Route path='/aboutus'>
       <AboutUs />
     </Route>

     <Route path='/OurProducts'>
       <OurProducts />
     </Route>

     <Route path='/OurCustomers'>
       <OurCustomers />
     </Route>

     <Route path='/Services'>
       <Services />
     </Route>

     <Route path='/ContactUs'>
       <ContactUs />
     </Route>

     <Route path='/Careers'>
       <Careers />
     </Route>
     
      </Switch>
    </Router>
  );
}

export default App;