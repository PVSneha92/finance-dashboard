const SummaryCard = ({ title, amount }) => {
  const color =
    title === "Income"
      ? "text-green-600"
      : title === "Expense"
      ? "text-red-600"
      : "text-blue-600";

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>₹{amount}</h2>
    </div>
  );
};

export default SummaryCard;