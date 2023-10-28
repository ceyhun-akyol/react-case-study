import React from "react";

import "./style.css";
import { useBasket } from "../../context/basket";

const Basket = () => {
  const { basketList } = useBasket();
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let _total = 1;
    basketList.map((item) => {
      _total = +item.o * _total;
    });
    setTotal(_total.toFixed(2));
  }, [basketList]);

  return (
    <div className="basket">
      <ul>
        {basketList.map((item, i) => {
          const { mbs, code, name, o } = item;
          return (
            <li key={i}>
              {`${mbs} Kod: ${code} Maç: ${name}`} <b>{`Oran ${o}`}</b>
            </li>
          );
        })}
        <li className="total">
          <b>{`Toplam Tutar: ${total == 1 ? 0 : total} TL`}</b>
        </li>
      </ul>
    </div>
  );
};

export default Basket;
