import React from 'react';
function Brokerage() {
    return ( 
        <div className="row">
            <div className="col pl-4 p-5 border-top" style={{textAlign:"center"}}>
                <h4><a href="" style={{textDecoration:"none"}}>Brokerage calculator</a></h4>
                <ul style={{textAlign:"left",lineHeight:"2.5",marginLeft:"50px",alignItems:"center"}} className="text-muted">
                  <li>Call & Trade and RMS auto-squareoff:Additional charges of 50&#8377;+GST per order.</li>
                  <li>Digital contract notes will be sent via e-mail</li>
                  <li>Physical copies of contract notes,if required,shall be charged 20&#8377; per contract note.Courier charges apply.</li>
                  <li>For NRI account (non-PIS),0.5% or &#8377;100 per executed order for equity (whichever is lower).</li>
                  <li>For NRI account (PIS) ,0.5% or &#8377;200 per executed order for equity(whichever is lower). </li>
                  <li>If the account is in debit balance,any order placed will be charged &#8377; 40 per executed order instead of &#8377; 20 per executed order.</li>
                </ul>
            </div>
            <div className="col p-5 border-top" style={{textAlign:"center"}}>
                <h4><a href="" style={{textDecoration:"none"}}>Charges</a></h4>
            </div>
        </div>
     );
}

export default Brokerage;