import OurServiceTable from "@/components/our-service/our-service-form";
import { useGetOurService } from "@/hooks/useOurService";
import Layout from "@/layout";

export default function OurServicePage() {
  const { data: dataOurService } = useGetOurService();
  return (
    <Layout page="Layanan Kami">
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">
          Edit Layanan Kami{" "}
        </h1>
        <OurServiceTable data={dataOurService?.data} />
      </div>
    </Layout>
  );
}
