import React, { createContext, useState, useEffect, useContext } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketList, setBasketList] = useState([]);

  useEffect(() => {}, []);

  function addBasket(basket) {
    const id = `${new Date().getTime()}`;
    setBasketList([...basketList, { id, ...basket }]);
  }

  function removeBasket(id) {
    setBasketList([...basketList.filter.filter((b) => b.id !== id)]);
  }

  return (
    <BasketContext.Provider value={{ basketList, addBasket, removeBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export function useBasket() {
  const context = useContext(BasketContext);

  return context;
}
