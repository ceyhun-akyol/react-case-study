import React, { createContext, useState, useEffect, useContext } from "react";

import BetService from "../services/api";
import formatter from "../utils/formatter";

const BetContext = createContext();

export const BetProvider = ({ children }) => {
  const [betList, setBetList] = useState([]);

  useEffect(() => {
    refreshBetList();
  }, []);

  function refreshBetList() {
    BetService.getPublicContent().then(
      (response) => {
        setBetList(response.data.map((_bet) => formatter.bet(_bet)));
      },
      (error) => {
        // error hendle
      }
    );
  }

  return (
    <BetContext.Provider value={{ betList, refreshBetList }}>
      {children}
    </BetContext.Provider>
  );
};

export function useBet() {
  const context = useContext(BetContext);

  return context;
}
