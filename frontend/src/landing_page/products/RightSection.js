import React from 'react';

function RightSection({imageUrl,title,description,tryDemo,learnMore,googlePlaystore,appleStore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5 mb-5 p-5">
                    <h3 className=" mt-5">{title}</h3>
                    <p className="mr-5">{description}</p>

                   
                        <a href={learnMore} style={{marginRight:"90px",textDecoration:"none"}} className="mb-2">
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        

                    
                </div>

                <div className="col-6 mb-5">
                    <img src={imageUrl} alt={title}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;