import React from "react";
import { useBet } from "../../context/bet";
import TableHeader from "../../components/tableHeader";
import BetRow from "../../components/betRow";

import "./style.css";

function BetListPage() {
  const { betList, refreshBetList } = useBet();

  return (
    <div className="App">
      <table border="1" cellpadding="1" cellspacing="0">
        <TableHeader count={200} />
        <tbody>
          {betList.map((bet) => (
            <BetRow {...bet} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BetListPage;
