import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";

import "./general.css";
import "./admin-page.css";

export function AdminPage() {
  const data = [
    { name: "Mukeli", voters: 40 },
    { name: "Morin", voters: 30 },
    { name: "opiri", voters: 50 },
    { name: "daisy", voters: 20 },
  ];

  return (
    <>
      <Header />
      <AdminSidebar />
      <div className="dashboard-card-container">
        <div className="dashboard-card sign-ups-card">
          <p>Sign ups</p>
          <p>23</p>
        </div>
        <div className="dashboard-card most-voted-card">
          <p>Most voted</p>
          <p>Mukeli 6 votes</p>
        </div>
        <div className="dashboard-card total-votes-card">
          <p>Total votes</p>
          <p>35</p>
        </div>
      </div>

      <ResponsiveContainer width="70%" height={350} className={"bar-chart-container"}>
        <div className="leaderboard-text">LeaderBoard</div>
        <BarChart height={300} data={data} className="bar-chart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="voters" fill="#4f46e5" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
