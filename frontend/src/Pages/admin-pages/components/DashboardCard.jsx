import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function DashboardCard({ text, value, icon, destination }) {
  const addedClass = destination === "no" ? "cursor-not-allowed" : "";
  return (
    <Link
      className={twMerge(
        "relative border border-tertiary/20 dark:border-neutral/20 flex grow h-25 max-w-60 min-w-50 pt-4 pl-4 rounded-lg hover:bg-secondary/10  hover:border-amber-50/0 transition-colors cursor-pointer",
        addedClass,
      )}
      to={`/admin/${destination !== "no" ? destination : ""}`}
    >
      <div className="space-y-2 pl-3">
        <p className="text-xs">{text}</p>
        <p className="font-bold text-2xl">{value}</p>
      </div>
      <div
        className={`absolute right-4 bg-secondary/80 p-1 rounded-lg text-white`}
      >
        {icon}
      </div>
    </Link>
  );
}
