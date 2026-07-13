import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const HoldingsContext = createContext();

export const HoldingsProvider = ({ children }) => {
  const [holdings, setHoldings] = useState([]);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:3002/addHoldings");
      setHoldings(res.data.filter(stock => stock.qty > 0));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  return (
    <HoldingsContext.Provider
      value={{
        holdings,
        setHoldings,
        fetchHoldings,
      }}
    >
      {children}
    </HoldingsContext.Provider>
  );
};

export default HoldingsContext;