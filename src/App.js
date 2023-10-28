import BetListPage from "./pages/BetListPage";
import "./App.css";
import { BasketProvider } from "./context/basket";
import { BetProvider } from "./context/bet";

function App() {
  return (
    <BasketProvider>
      <BetProvider>
        <BetListPage />
      </BetProvider>
    </BasketProvider>
  );
}

export default App;
