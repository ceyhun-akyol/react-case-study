import React, { createContext, useState, useEffect, useContext } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketList, setBasketList] = useState([]);

  useEffect(() => {}, []);

  function addBasket(basket) {
    const sameBet = basketList.find((item) => basket.code === item.code);
    if (sameBet) {
      setBasketList([
        ...basketList.filter((b) => b.code !== basket.code),
        { ...basket },
      ]);
    } else {
      setBasketList([...basketList, { ...basket }]);
    }
  }

  function removeBasket(id) {
    setBasketList([...basketList.filter((b) => b.id !== id)]);
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
