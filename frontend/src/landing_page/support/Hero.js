import React from 'react';
function Hero() {
    return ( 
      <div class="container-fluid" id="supportHero" style={{backgroundColor:"rgb(56,126,209)",color:"white"}}>
            <div className="row">
               <div className="col-4 offset-2 my-5 p-5">
                  <p style={{textAlign:"left"}}>Support Portal</p>
                  <h3>Search for an answer or browse help topics to create a ticket</h3>
                  <input placeholder="Eg:how do activate F&O,why is my order getting rejected..." style={{width:"100%",height:"35%",padding:"20px",borderRadius:"10px",border:"none"}}/>
                  <div>
                    <a  href="">Track account opening</a>&nbsp;
                    <a href="">Track segment activation</a>&nbsp;
                    <a href="">Intraday</a>&nbsp;
                    <a href="">margins</a><br/>
                    <a href="">Kite user manual</a>
                  </div>
               </div>
            
               <div className="col-4 px-5 my-5">
                 <p style={{textAlign:"right"}}><a href="">Track Tickets</a></p>
                 <h3 className=" mb-4">Featured</h3>
                 <ol>
                     <li><a href="">Current Takeovers and delisting</a></li>
                    <li><a href="">Latest Intraday Leverages</a></li>
                 </ol>
                </div>
                <div className="col-2"></div>
           </div>
      </div>
    );
}

export default Hero;