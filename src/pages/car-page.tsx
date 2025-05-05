// import OurServiceTable from "@/components/our-service/our-service-form";
// import { useGetOurService } from "@/hooks/useOurService";
import Layout from "@/layout";

export default function CarPage() {
  // const { data: dataOurService } = useGetOurService();
  return (
    <Layout page="Armada">
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Armada </h1>
        {/* <OurServiceTable data={dataOurService?.data} /> */}
      </div>
    </Layout>
  );
}
