import React from 'react';
function Stats() {
    return ( 
        <div className="conatiner mt-5">
            <div className="row">
                <div className="col-4 offset-2 mt-5">
                    <h3 className="pb-4">Trust with confidence</h3>
                    <div className="pb-3">
                        <h4>Customer-first always</h4>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="pb-3">
                        <h4>No spam or gimmicks</h4>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className="pb-3">
                        <h4>The Zerodha universe</h4>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="pb-3 mb-5">
                        <h4>Do better with money</h4>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <img src="media/images/ecosystem.png" alt="Stats Image" style={{width:"80%"}}/>
                    <div className="mb-5 mr-5" style={{textAlign:"center"}}>
                      <a href=" ">Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                      &nbsp;&nbsp;
                      <a href=" ">Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;