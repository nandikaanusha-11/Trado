import React from 'react';
import { Link } from "react-router-dom";
function Universe() {
    return ( 
        <div className="container mt-5 p-5 text-muted">
            <div style={{textAlign:"center"}}>
                <h4 className="mb-3">The Zerodha Universe</h4>
                <p >Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-5 " style={{alignItems:"center",textAlign:"center",fontSize:"12px"}}>
                <div className="col p-5" style={{textAlign:"center"}}>
                    <img src="media/images/ZerodhaFundhouse.png" alt="icon1" style={{width:"30%"}} className="mb-2"/>
                    <p className="mb-2">Our asset management venture that is creating simple and 
                        transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col p-5" style={{textAlign:"center"}}>
                    <img src="media/images/sensibullLogo.svg" alt="icon2" style={{width:"30%"}} className="mb-2"/>
                    <p className="mb-2">Options trading platform that lets you
                          reate strategies, analyze positions, and examine
                       data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col p-5" style={{textAlign:"center"}}>
                    <img src="media/images/tijori.svg" alt="icon3" style={{width:"30%"}}/>
                    <p className="mb-0">Investment research platform
                      that offers detailed insights on stocks,
                      sectors, supply chains, and more.</p>
                </div>
                
               
                
            </div>
             <div className="row mt-2 text-muted" style={{alignItems:"center",textAlign:"center",fontSize:"12px"}}>
                <div className="col p-5 pt-1" style={{textAlign:"center"}}>
                    <img src="media/images/smallcaseLogo.png" alt="icon1" style={{width:"30%"}} className="mb-2"/>
                    <p className="mb-2">Thematic investing platform
                          that helps you invest in diversified
                          baskets of stocks on ETFs.</p>
                </div>
                <div className="col p-5 pt-1" style={{textAlign:"center"}}>
                    <img src="media/images/streakLogo.png" alt="icon2" style={{width:"30%"}} className="mb-2"/>
                    <p className="mb-2">Systematic trading platform
                     that allows you to create and backtest
                     strategies without coding.</p>
                </div>
                <div className="col p-5 pt-1" style={{textAlign:"center"}}>
                    <img src="media/images/dittoLogo.png" alt="icon3" style={{width:"30%"}}/>
                    <p className="mb-0">Personalized advice on life
                          and health insurance. No spam
                          and no mis-selling.</p>
                </div>
                
                
                
            </div>

            <div  style={{alignItems:"center",marginLeft:"40rem",marginTop:"2em"}}  >
               

<Link to="/signup">
  <button
    className="p-2 btn btn-primary fs-5 mb-5"
    style={{ width: "20%", margin: "0 auto" }}
  >
    Sign up for free
  </button>
</Link>
               
            </div> 
            
            
            
        </div>
     );
}

export default Universe;