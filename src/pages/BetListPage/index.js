import React from "react";
import { useBet } from "../../context/bet";
import "./style.css";

function BetListPage() {
  const { betList, refreshBetList } = useBet();

  React.useEffect(() => {
    console.log("betList: ", betList);
  }, [betList]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default BetListPage;
