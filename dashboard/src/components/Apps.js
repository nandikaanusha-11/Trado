import React from "react";

const Apps = () => {
  return (
  <>
  <h1>Explore our other apps</h1>
  <div className="row">
    <div className="col">
         <a href="https://coin.zerodha.com/">
    <img src="/Zerodha-Coin.jpg" alt="coin" className="m-5" 
    style={{width:"55%",height:"55%"}}/>
  </a>
    </div>

    <div className="col">
          <a href="https://streak.zerodha.com/">
    <img src="/streak.png" alt="coin" className="m-5 p-5" 
    style={{width:"60%",height:"55%"}}/>
  </a>

    </div>

    <div className="col">
             <a href="https://sensibull.com/">
    <img src="/sensibull.png" alt="coin" className="m-5 p-5" 
    style={{width:"55%",height:"55%"}}/>
  </a>

    </div>
    
   
  
  </div>
  

  <div className="row">

    <div className="col">
      
    <a href="https://www.smallcase.com/">
    <img src="/logo-full.svg" alt="coin" className="m-5 p-5" 
    style={{width:"60%",height:"70%"}}/>
  </a>
    </div>

    <div className="col">
         <a href="https://quicko.com/partners/zerodha">
    <img src="/quicko.svg" alt="coin" className="m-5 p-5"
    style={{width:"40%",height:"40%"}}/>
  </a>
    </div>
    
    <div className="col">
         <a href="https://www.tijorifinance.com/dashboard/">
    <img src="/tijori.jpg" alt="coin" className="m-5 p-5"
    style={{width:"40%",height:"40%"}}/>
  </a>
 
    </div>

   
 

  </div>
  
  </>
  )
};

export default Apps;
