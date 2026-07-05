import React, { useState ,useEffect} from "react";
import axios from "axios";
import SellActionWindow from "./SellActionWindow";


const GeneralContextSell = React.createContext({
  holdings: [], 
  setholdings: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");


const [holdings, setholdings] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:3002/addHoldings")
    .then((res) => {
      setholdings(res.data);
    })
}, []);

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
        setholdings,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      
      }}
    >
      {props.children}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID}
                             onClose={handleCloseSellWindow}
                             holdings={holdings}      
                             setholdings={setholdings} />}
    </GeneralContextSell.Provider>
  );

  
};

export default GeneralContextSell;