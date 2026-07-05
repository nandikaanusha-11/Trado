import React , {useState,useEffect} from "react";
// import {holdings} from "../data/data.js";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {
   const [allHoldings,setallHoldings]=useState([]);
   useEffect(()=>{

    Promise.all([
       axios.get("http://localhost:3002/addHoldings"),

       axios.get("http://localhost:3002/addOrder")
    ])
      
      .then(([holdingsRes,ordersRes])=>{
      
         const holdingsData=[...(holdingsRes.data || [])];
         const ordersData=ordersRes.data || [];
         ordersData
            .filter(order=>order.mode==="BUY")
            .forEach(order=>{
              holdingsData.push({
             name: order.name,
            qty: order.qty||0,
           avg: order.price||0, // For an individual order, price acts as the average cost
           price:order.price ||0,
           net: order.net || "+0.00%",
           day: order.day || "+0.00%",
           isLoss: false
           });
      });

      ordersData.
      filter(order=>order.mode==="SELL")
      .forEach(order=>{
        let remainingQty=order.qty;
        for(let holding of holdingsData){
          if(holding.name!==order.name){
            continue;
          }else if(holding.qty>=remainingQty){
            holding.qty-=remainingQty;
            break;
          }else{
             remainingQty-=holding.qty;
             holding.qty=0;
          }
        }
      });
         setallHoldings(holdingsData.filter(stock=>stock.qty>0));   
      });
      
   });

   //creating a subarray labels from the existing list of holdings array
 const labels=allHoldings.map((subArray)=>subArray["name"]);

 const data={
  labels,
  datasets:[
   {
    label:"Stock Price",
    data:allHoldings.map((stock)=>stock.price),
    backgroundColor:"rgba(255,99,132,0.5)",
   }
  ],
 }

  
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

         {allHoldings.map((stock,index)=>{
           const curValue=stock.price*stock.qty;
           const isProfit=curValue-stock.avg*stock.qty >=0.0;
           const profClass=isProfit?"profit":"loss";
           const dayClass =stock.isLoss?"loss":"profit";

           return(
             <tr key={index}>
               <td>{stock.name}</td>
                <td>{stock.qty}</td>
                 <td>{stock.avg.toFixed(2)}</td>
                 <td>{stock.price.toFixed(2)}</td>
                 <td>{curValue.toFixed(2)}</td>
                 <td className={profClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                 <td className={profClass}>{stock.net}</td>
                 <td className={dayClass}>{stock.day}</td>
              </tr>
           )
         })}

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
}

export default Holdings;
