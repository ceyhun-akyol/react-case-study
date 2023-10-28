import BetListPage from "./pages/BetListPage";
import Basket from "./components/basket";

import { BasketProvider } from "./context/basket";
import { BetProvider } from "./context/bet";

import "./App.css";

function App() {
  return (
    <BasketProvider>
      <BetProvider>
        <BetListPage />
        <Basket />
      </BetProvider>
    </BasketProvider>
  );
}

export default App;
