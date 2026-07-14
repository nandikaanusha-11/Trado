import React from 'react';
import Navbar from "../Navbar.js";
import Hero from "./Hero.js";
import Brokerage from "./Brokerage.js";
import Footer from "../Footer.js";
import OpenAccount from "../OpenAccount.js";
function PricingPage() {
    return ( 
        <>
       
         <Hero />
         <OpenAccount/>
         <Brokerage />
      
        </>
     );
}

export default PricingPage;