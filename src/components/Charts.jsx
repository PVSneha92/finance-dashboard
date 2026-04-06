import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip } from "recharts";

const Charts = ({ transactions }) => {
  const income = transactions.filter(t => t.type === "income");
  const expense = transactions.filter(t => t.type === "expense");

  const pieData = [
    { name: "Income", value: income.reduce((a, b) => a + b.amount, 0) },
    { name: "Expense", value: expense.reduce((a, b) => a + b.amount, 0) }
  ];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <LineChart width={400} height={300} data={transactions}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>

      <PieChart width={300} height={300}>
        <Pie data={pieData} dataKey="value" outerRadius={100}>
          {pieData.map((entry, index) => (
            <Cell key={index} fill={index === 0 ? "#82ca9d" : "#ff7f7f"} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Charts;