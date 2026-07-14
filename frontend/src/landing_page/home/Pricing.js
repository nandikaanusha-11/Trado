import React from 'react';
function Pricing() {
    return ( 
        <div className="container">
            <div className="row">
                 <div className="col-3 p-3 offset-1 mt-5 mb-5">
                    <h3>Unbeatable Pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See pricing<i class="fa-solid fa-arrow-right"></i></a>
                 </div>
                 <div className="col-2"></div>
                 <div className="col-6">
                    <div className="row text-center mt-5 pt-4 mb-5">
                        <div className="col border">
                            <h1>&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                            
                        </div>
                        <div className="col border">
                            <h1>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                            
                        </div>
                    </div>
                 </div>
            </div>
        </div>
     );
}

export default Pricing;