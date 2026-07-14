import React from 'react';
function LeftSection({imageUrl,title,description,tryDemo,learnMore,googlePlaystore,appleStore}) {
    return ( 
        <div className="container">
            <div className="row mb-5">
                <div className="col-6 p-3 mb-5">
                    <img src={imageUrl}/>
                </div>
                <div className="col-6 mt-5 mb-5 p-5" style={{alignItems:"center"}}>
                    <h3 className="mb-3">{title}</h3>
                    <p className="mr-5">{description}</p>
                    <div className="mb-3">
                        <a href={tryDemo} style={{marginRight:"90px",textDecoration:"none"}} >Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration:"none"}} >Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div>
                        <a href={googlePlaystore} style={{marginRight:"35px"}}><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href={appleStore}><img src="media/images/appstoreBadge.svg"/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;