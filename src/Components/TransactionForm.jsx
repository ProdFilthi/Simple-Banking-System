/* eslint-disable react/prop-types */
import { useState } from "react";
const TransactionForm = ({ onTransaction, balance }) => {
  const [amount, setAmount] = useState("");
  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value)) onTransaction(value);
    setAmount("");
  };
  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && balance - value >= 0) {
      onTransaction(-value);
    } else {
      alert("You don't have enough balance!");
    }
    setAmount("");
  };
  return (
    <div>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        className="py-2 w-64 rounded-md outline-none px-2"
      />
      <div className="flex items-center justify-center gap-4 py-4">
        <button
          onClick={handleDeposit}
          className="bg-blue-500 text-white h-8 rounded-md cursor-pointer w-20"
        >
          Deposit
        </button>
        <button
          onClick={handleWithdraw}
          className="bg-red-500 text-white h-8 rounded-md cursor-pointer w-20"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
