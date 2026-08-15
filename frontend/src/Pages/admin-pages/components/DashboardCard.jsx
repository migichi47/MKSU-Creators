import { useNavigate } from "react-router-dom";

export function DashboardCard({ text, value, icon }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative border border-tertiary/20 dark:border-neutral/20 flex grow h-25 max-w-60 min-w-50 pt-4 pl-4 rounded-lg hover:bg-secondary/10  hover:border-amber-50/0 transition-colors cursor-pointer"
      onClick={() => {
        navigate("/admin/analytics");
      }}
    >
      <div className="space-y-2 pl-3">
        <p className="text-xs">{text}</p>
        <p className="font-bold text-2xl">{value}</p>
      </div>
      <div className={`absolute right-4 bg-secondary/80 p-1 rounded-lg text-white`}>{icon}</div>
    </div>
  );
}
