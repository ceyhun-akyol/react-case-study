import React from "react";
import { useBet } from "../../context/bet";
import TableHeader from "../../components/tableHeader";
import BetRow from "../../components/betRow";

import "./style.css";

function BetListPage() {
  const { betList } = useBet();

  return (
    <div className="App">
      <table border="1">
        <TableHeader count={200} />
        <tbody>
          {betList.map((bet, i) => (
            <BetRow key={i} {...bet} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BetListPage;
