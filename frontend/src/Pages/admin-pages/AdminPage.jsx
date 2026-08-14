import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  MdHowToVote,
  MdOutlineVerified,
  MdOutlinePendingActions,
} from "react-icons/md";

import { AdminHeader } from "./components/AdminHeader";
import { DashboardCard } from "./components/DashboardCard";
import {Footer} from "../components/Footer"

export function AdminPage() {
  const data = [
    { name: "Mukeli", voters: 40 },
    { name: "Morin", voters: 30 },
    { name: "opiri", voters: 50 },
    { name: "daisy", voters: 20 },
  ];

  return (
    <>
      <AdminHeader />

      <div className="relative top-22 px-10 lg:px-40 pt-6 space-y-10">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl dark:text-neutral">Dashboard Overview</h1>
          <p>Monitor real-time election statistics and creator performance.</p>
        </div>

        <div className="w-[60%] sm:w-[80%] lg:w-full mx-auto sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 sm:gap-10 bg-b">
          <DashboardCard
            text={"TOTAL VOTES"}
            value={"23"}
            icon={<MdHowToVote />}
            color={"primary"}
          />
          <DashboardCard
            text={"VERIFIED CREATORS"}
            value={"20"}
            icon={<MdOutlineVerified />}
            color={"secondary"}
          />
          <DashboardCard
            text={"PENDING VERIFICATION"}
            value={"3"}
            icon={<MdOutlinePendingActions />}
            color={"tertiary"}
          />
        </div>

        {/* add a bar chart - summary analytics */}
        <div className="border border-tertiary/20 dark:border-neutral/50  max-w-200 mb-50 rounded-xl">
          <div className="w-inherit border-b border-tertiary/20 dark:border-neutral/50  py-4 pl-15 font-semibold">Creators with Most votes</div>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart height={300} data={data} className="">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="voters" fill="#c5b06a" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
