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
import { AdminHeader } from "./components/AdminHeader";

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
      <AdminHeader />
      <div className="bg-black/20 w-fit mx-auto">
        <div
          className=""
          onClick={() => {
            navigate("/admin/creators");
          }}
        >
          <p className="">Verified creators</p>
          <p className="">23</p>
        </div>
        <div
          className=""
          onClick={() => {
            navigate("/admin/creators");
          }}
        >
          <p className="">Pending Creators</p>
          <p className="">6</p>
        </div>
        <div
          className=""
          onClick={() => {
            navigate("/admin/analytics");
          }}
        >
          <p className="">Total votes</p>
          <p className="">35</p>
        </div>
      </div>

      {/* add a bar chart - summary analytics */}
      <ResponsiveContainer width="70%" height={350}>
        <div className="">LeaderBoard</div>
        <BarChart height={300} data={data} className="">
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
