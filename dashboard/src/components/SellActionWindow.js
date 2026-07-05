import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContextSell from "./GeneralContextSell";

import "./BuyActionWindow.css";




const SellActionWindow = ({ uid,holdings, setholdings }) => {
  
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

const [errorMessage, setErrorMessage] = useState("");

const { closeSellWindow } = useContext(GeneralContextSell);



  const handleSellClick = (e) => {
    console.log("1");
    e.preventDefault();


    console.log("2");
//  if (!holdings) {
//       setErrorMessage("System error: Holdings data not found.");
//       return;
//     }
  
    // Find this stock in the holdings state
    const currentStock = holdings.find(stock=>stock.name===uid);
console.log("3", currentStock);
    // Run validation checks
    if (!currentStock) {
      console.log("4");
      setErrorMessage("You do not own this stock in your holdings.");
      return;
    }
  console.log("5");
    if (Number(stockQuantity) > currentStock.qty) {
      console.log("6");
      setErrorMessage(`Insufficient shares. You only hold ${currentStock.qty} shares.`);
      return;
    }
   console.log("7");
    // if (Number(stockQuantity) <= 0) {
    //   setErrorMessage("Please enter a valid quantity.");
    //   return;
    // }

    // If validation passes, proceed to alert the backend server
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL",
    })
    .then((res) => {
      console.log("8");
      const Updatedholdings=holdings.map((stock)=>{
        if(stock.name===uid){
          return{
            ...stock,
            qty:stock.qty-Number(stockQuantity),
          };
        }
        return stock;
      })
      .filter((stock)=>stock.qty>0);
      setholdings(Updatedholdings);
      // Close the popup window
      closeSellWindow();
    })
    .catch((err) => {
      console.log("9");
      setErrorMessage("Server error placing sell order.");
      console.error(err);
    });
  };


  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
           <Link className="btn btn-blue" onClick={handleSellClick}>
           Sell
          </Link>
          
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;