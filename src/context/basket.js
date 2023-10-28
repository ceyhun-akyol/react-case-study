import React, { createContext, useState, useEffect, useContext } from "react";

const BasketContext = createContext();

const dummyBasket = [
  { mbs: 4, code: 1234, name: "gs-fb", o: 7.2 },
  { mbs: 4, code: 1234, name: "gs-fb", o: 7.2 },
  { mbs: 4, code: 1234, name: "gs-fb", o: 7.2 },
];

export const BasketProvider = ({ children }) => {
  const [basketList, setBasketList] = useState(dummyBasket);

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
