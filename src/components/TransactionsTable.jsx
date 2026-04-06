import { useState } from "react";

const TransactionsTable = ({ transactions }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h3 className="font-semibold mb-3">Transactions</h3>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          className="border p-2 rounded-md w-full"
          placeholder="Search category..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((t) => (
            <tr key={t.id} className="border-t">
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td
                className={
                  t.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-400 mt-4">
          No transactions found
        </p>
      )}
    </div>
  );
};

export default TransactionsTable;