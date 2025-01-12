import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/post/PostsTable";
import { Newspaper } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 b-5 md:flex-row">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Post" limit={5} />
    </>
  );
}
