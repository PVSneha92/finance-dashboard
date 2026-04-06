import { useState, useEffect } from "react";
import { transactions as initialData } from "./data/mockData";

import SummaryCard from "./components/SummaryCard";
import Charts from "./components/Charts";
import TransactionsTable from "./components/TransactionsTable.jsx"
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

function App() {
  const [role, setRole] = useState("viewer");
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, [data]);

  const income = data
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const expense = data
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  const balance = income - expense;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Finance Dashboard</h1>
          <RoleSwitcher role={role} setRole={setRole} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard title="Balance" amount={balance} />
          <SummaryCard title="Income" amount={income} />
          <SummaryCard title="Expense" amount={expense} />
        </div>

        <div className="mt-6">
          <Charts transactions={data} />
        </div>

        {role === "admin" && (
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
              + Add Transaction
            </button>
          </div>
        )}

        <div className="mt-6">
          <TransactionsTable transactions={data} />
        </div>

        <div className="mt-6">
          <Insights transactions={data} />
        </div>

      </div>
    </div>
  );
}

export default App;