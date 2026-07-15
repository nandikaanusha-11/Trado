import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContextSell from "./GeneralContextSell";

import "./BuyActionWindow.css";
import HoldingsContext from "./HoldingsContext";



const SellActionWindow = ({ uid,holdings, setholdings }) => {
  
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
const { fetchHoldings } = useContext(HoldingsContext);
const [errorMessage, setErrorMessage] = useState("");

const { closeSellWindow } = useContext(GeneralContextSell);




const handleSellClick = async (e) => {
  e.preventDefault();

  try {
    await axios.post("https://trado-1-j98g.onrender.com/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL",
    });

   
    await fetchHoldings();

    closeSellWindow();

  } catch (err) {
    console.error(err.response?.data || err.message);
    setErrorMessage("Server error placing sell order.");
  }
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
    <Link
      to="#"
      className="btn btn-blue"
      onClick={(e) => {
        e.preventDefault();
        handleSellClick(e);
      }}
    >
      Sell
    </Link>
    

    <Link
      to="#"
      className="btn btn-grey"
      onClick={(e) => {
        e.preventDefault();
        handleCancelClick(e);
      }}
    >
      Cancel
    </Link>
  </div>
</div>
    </div>
  );
};

export default SellActionWindow;