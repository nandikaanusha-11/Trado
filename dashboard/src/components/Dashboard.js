
import React from "react";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider} from './GeneralContext';
import {GeneralContextProvider as GeneralContextSellProvider} from "./GeneralContextSell";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import { HoldingsProvider} from './HoldingsContext';
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";


const Dashboard = () => {
  return (
   <HoldingsProvider>
    <div className="dashboard-container">
    
     <GeneralContextSellProvider>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
    </GeneralContextSellProvider>
   
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
     </HoldingsProvider>
  );
};

export default Dashboard;
