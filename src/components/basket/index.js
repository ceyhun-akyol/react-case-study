import React from "react";

import "./style.css";
import { useBasket } from "../../context/basket";

const Basket = () => {
  const { basketList } = useBasket();
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {});

  return (
    <div className="basket">
      <ul>
        {basketList.map((item) => {
          const { mbs, code, name, o } = item;
          return (
            <li>
              {`${mbs} Kod: ${code} Maç: ${name}`} <b>{`Oran ${o}`}</b>
            </li>
          );
        })}
        <li className="total">
          <b>{`Toplam Tutar: ${total} TL`}</b>
        </li>
      </ul>
    </div>
  );
};

export default Basket;
