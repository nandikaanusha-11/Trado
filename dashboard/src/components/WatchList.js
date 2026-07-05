import React ,{useState,useContext}from "react";
import {Tooltip,Grow} from "@mui/material";
import {watchlist} from "../data/data";
import {KeyboardArrowDown,KeyboardArrowUp,BarChartOutlined,MoreHoriz} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import GeneralContextSell from "./GeneralContextSell";
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        
          {watchlist.map((stock,index)=>{
            return(< WatchListItem stock={stock} key={index}/>);
          })}
        
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem=({stock})=>{
  const [showWatchListAction,setshowWatchListAction]=useState(false);

  const handleMouseEnter=(e)=>{
    setshowWatchListAction(true);
  }

  const handleMouseLeave=(e)=>{
    setshowWatchListAction(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown?"down":"up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown?(
            <KeyboardArrowDown className="down"/>
          ):(<KeyboardArrowUp className="up"/>)}
        </div>
        <span className="price">{stock.price}</span>
      </div>
      {showWatchListAction && <WatchListActions uid={stock.name}/>}
    </li>
  );

};

const WatchListActions=({uid})=>{
 
const { openBuyWindow } = useContext(GeneralContext);
const { openSellWindow } = useContext(GeneralContextSell);
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)"
         placement="top"
         arrow
         TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Sell (S)"
         placement="top"
         arrow
         TransitionComponent={Grow}>
          <button className="sell" onClick={() => openSellWindow(uid)}>Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Analytics (A)"
         placement="top"
         arrow
         TransitionComponent={Grow}>
          <button className="chart"><BarChartOutlined/></button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="More (M)"
         placement="top"
         arrow
         TransitionComponent={Grow}>
          <button className="chart"><MoreHoriz/></button>
        </Tooltip>
      </span>
    </span>
  );
};
