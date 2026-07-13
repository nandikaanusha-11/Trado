import React, { useState , useEffect, useContext} from "react";
import axios from "axios";
import SellActionWindow from "./SellActionWindow";

import HoldingsContext from "./HoldingsContext";

const GeneralContextSell = React.createContext({
  holdings: [], 
  setholdings: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

const { holdings, setHoldings } = useContext(HoldingsContext);


  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContextSell.Provider
      value={{
         holdings,
        setHoldings,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      
      }}
    >
      {props.children}
 {isSellWindowOpen && (
  <SellActionWindow
    uid={selectedStockUID}
    onClose={handleCloseSellWindow}
    holdings={holdings}
    setholdings={setHoldings}
  />
)}
    </GeneralContextSell.Provider>
  );

  
};

export default GeneralContextSell;