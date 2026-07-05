import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Orders = () => {
   const [allOrders,setallOrders]=useState([]);
   useEffect(()=>{
      axios.get("http://localhost:3002/addOrder").then((res)=>{
         setallOrders(res.data);
      });
   },[]);



  return (
    <div>
    
    <h3 className="title">Orders ({allOrders.length})</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Name</th>
            <th> Qty</th>
            <th >Price</th>
            <th>Mode</th>
           
          </tr>
       </thead>
       <tbody>
         {allOrders.map((stock,index)=>{

           return(
             <tr key={index}>
               <td>{stock.name}</td>
                <td>{stock.qty}</td>
                 <td style={{fontSize:"15px"}}>{stock.price}</td>
                <td  style={{fontSize:"15px"}}>{stock.mode}</td>
                 
                
              </tr>
           )
         })}
          </tbody>
          </table>

    
   

    {allOrders.length === 0 &&(
            <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        {/* <Link  className="btn" onClick={handleBuyClick}>
          Get started
        </Link> */}
      </div>
    </div> 
    )}
    </div>
  );
};

export default Orders;
