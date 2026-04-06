const Insights = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const highest = transactions
    .filter((t) => t.type === "expense")
    .reduce((max, curr) =>
      curr.amount > (max?.amount || 0) ? curr : max,
    {});

  const savings = income - expense;

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h3 className="font-semibold mb-2">Insights</h3>
      <p>Total Expense: ₹{expense}</p>
      <p>Savings: ₹{savings}</p>
      <p>Highest Spending: {highest?.category}</p>
    </div>
  );
};

export default Insights;