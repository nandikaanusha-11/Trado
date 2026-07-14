import React from 'react';
function Education() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="varsity image" className="mt-5"/>
                </div>
                <div className="col-6 mt-5 mb-5">
                    <h3 className="mt-5">Free and open market education</h3>
                    <div className="pb-2">
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="">varsity<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="pb-2">
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="">Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </div>
            </div>
        </div>
     );
   
}

export default Education;