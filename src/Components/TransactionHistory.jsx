/* eslint-disable react/prop-types */
const TransactionHistory = ({ transactions }) => {
  const { Deposits, Withdrawals } = transactions;
  return (
    <div>
      <h1 className="text-center py-2">Transaction History</h1>
      <ul className="flex items-center justify-center gap-4 py-2">
        <p>Deposits: ${Deposits}</p>
        <p>Withdrawals: ${Withdrawals}</p>
      </ul>
    </div>
  );
};

export default TransactionHistory;
