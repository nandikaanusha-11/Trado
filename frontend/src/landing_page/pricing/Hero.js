import React from 'react';
function Hero() {
    return ( 
     <div className="container">
        <div style={{textAlign:"center",margin:"70px"}} className="p-5 border-bottom" >
            <h3>Charges</h3>
            <p style={{fontSize:"20px"}}>List of all charges and taxes</p>
        </div>
        <div className="row p-5 border-bottom">
            <div className="col" style={{alignItems:"center",textAlign:"center"}}>
                <img src="media/images/pricingEquity.svg"/>
                <h2 className="p-1">Free equity delivery</h2>
                <p className="text-muted p-1">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col" style={{alignItems:"center",textAlign:"center"}}>
                <img src="media/images/intradayTrades.svg"/>
                <h2 className="p-1">Intraday and F&O trades</h2>
                <p className="text-muted p-1">AFlat ₹ 20 or 0.03% (whichever is lower) per executed 
                    order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col" style={{alignItems:"center",textAlign:"center"}}>
                <img src="media/images/pricingEquity.svg"/>
                <h2 className="p-1">Free direct MF</h2>
                <p className="text-muted p-1">All direct mutual fund investments are absolutely 
                    free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
     </div>
     );
}

export default Hero;