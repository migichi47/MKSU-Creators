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
import { TiUserAddOutline } from "react-icons/ti";

import { AdminHeader } from "./components/AdminHeader";
import { DashboardCard } from "./components/DashboardCard";
import { Footer } from "../Pages/components/Footer";
import { useContext } from "react";
import { AddCreatorContext } from "./AdminContextProvider";

export function AdminPage() {
  const { pendingCreators, verifiedCreators } = useContext(AddCreatorContext);
  const data = [
    { name: "Mukeli", voters: 40 },
    { name: "Morin", voters: 30 },
    { name: "opiri", voters: 50 },
    { name: "daisy", voters: 20 },
  ];

  const dashboardCards = [
    {
      text: "TOTAL VOTES",
      value: 23,
      icon: <MdHowToVote />,
      destination: "analytics",
    },
    {
      text: "VERIFIED CREATORS",
      value: verifiedCreators.length,
      icon: <MdOutlineVerified />,
      destination: "creators",
    },
    {
      text: "PENDING VERIFICATION",
      value: pendingCreators.length,
      icon: <MdOutlinePendingActions />,
      destination: "creators",
    },
    {
      text: "ADD CREATOR",
      value: "+",
      icon: <TiUserAddOutline />,
      destination: "add-creator",
    },
  ];

  return (
    <>
      <div className="relative top-22 px-10 lg:px-40 pt-6 space-y-10">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl dark:text-neutral">
            Dashboard Overview
          </h1>
          <p className="text-zinc-400 text-sm">
            Monitor real-time election statistics and creator performance.
          </p>
        </div>

        <div className="w-[60%] sm:w-[80%] lg:w-full mx-auto sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 sm:gap-10 bg-b">
          {dashboardCards.map((card) => {
            return <DashboardCard key={card.value} {...card} />;
          })}
        </div>

        {/* add a bar chart - summary analytics */}
        <div className="border border-tertiary/20 dark:border-neutral/50  max-w-120 md:ml-20 mb-50 rounded-xl">
          <div className="w-inherit border-b border-tertiary/20 dark:border-neutral/50  py-4 pl-15 font-semibold">
            Creators with Most votes
          </div>
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
    </>
  );
}
