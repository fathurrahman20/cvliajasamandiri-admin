import { SectionCards } from "@/components/section-dashboard-card";
import Layout from "@/layout";

export default function DashboarPage() {
  return (
    <Layout page="Dashboard">
      <div className="@container/main flex flex-1 flex-col gap-y-2">
        <h1 className="px-6 py-4 text-2xl font-semibold">Dashboard</h1>
        <div className="flex flex-col">
          <SectionCards />
        </div>
      </div>
    </Layout>
  );
}
