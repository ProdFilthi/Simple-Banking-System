import { useEffect, useState } from "react";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import TransactionForm from "./Components/TransactionForm";
import TransactionHistory from "./Components/TransactionHistory";

const App = () => {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? parseFloat(savedBalance) : 0;
  });

  const [transactions, setTansactions] = useState(() => {
    const savedTransaction = localStorage.getItem("transactions");
    const defaultTransaction = { Deposits: 0, Withdrawals: 0 };
    try {
      return savedTransaction
        ? JSON.parse(savedTransaction)
        : defaultTransaction;
    } catch (error) {
      console.error("Error parsing transactions from localStorage:", error);
      return defaultTransaction;
    }
  });

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const handleTransaction = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);

    setTansactions((prev) => {
      return {
        ...prev,
        Deposits: amount > 0 ? (prev.Deposits || 0) + amount : prev.Deposits,
        Withdrawals:
          amount < 0
            ? (prev.Withdrawals || 0) + Math.abs(amount)
            : prev.Withdrawals,
      };
    });
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-neutral-300">
      <Header />
      <Balance balance={balance} />
      <TransactionHistory transactions={transactions} />
      <TransactionForm onTransaction={handleTransaction} balance={balance} />
    </div>
  );
};

export default App;
