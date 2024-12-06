/* eslint-disable react/prop-types */
const Balance = ({ balance }) => {
  return (
    <div className="pt-4 pb-2">
      <h1>
        Current Balance: <span className="text-xl">${balance}</span>
      </h1>
    </div>
  );
};

export default Balance;
