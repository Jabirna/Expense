import Header from "./components/Header";
import Balance from "./components/Balance";
import './App.css';
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaccton from "./components/AddTransaccton";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div>
      <Header/>
      <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaccton/>
      </div>
      </div>
    </GlobalProvider>
  );
}
export default App;
