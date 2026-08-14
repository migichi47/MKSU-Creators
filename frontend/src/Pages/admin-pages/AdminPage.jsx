import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

export function AdminPage() {
  const data = [
    { name: "Mukeli", voters: 40 },
    { name: "Morin", voters: 30 },
    { name: "opiri", voters: 50 },
    { name: "daisy", voters: 20 },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard-card-container">
        <div
          className="dashboard-card"
          onClick={() => {
            navigate("/admin/creators");
          }}
        >
          <p className="dashboard-card-title">Verified creators</p>
          <p className="dashboard-card-value">23</p>
        </div>
        <div
          className="dashboard-card"
          onClick={() => {
            navigate("/admin/creators");
          }}
        >
          <p className="dashboard-card-title">Pending Creators</p>
          <p className="dashboard-card-value">6</p>
        </div>
        <div
          className="dashboard-card"
          onClick={() => {
            navigate("/admin/analytics");
          }}
        >
          <p className="dashboard-card-title">Total votes</p>
          <p className="dashboard-card-value">35</p>
        </div>
      </div>

      {/* add a bar chart - summary analytics */}
      <ResponsiveContainer
        width="70%"
        height={350}
        className={"bar-chart-container"}
      >
        <div className="leaderboard-text">LeaderBoard</div>
        <BarChart height={300} data={data} className="bar-chart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="voters" fill="#fff1b8b3" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
