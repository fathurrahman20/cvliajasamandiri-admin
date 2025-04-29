import RegulationForm from "@/components/regulation/regulation-form";
import { useGetRegulation } from "@/hooks/useRegulation";
import Layout from "@/layout";

export default function RegulationPage() {
  const { data } = useGetRegulation();
  return (
    <Layout page="Regulation">
      <div className="md:max-w-1/2 ">
        <h1 className="text-start font-semibold mt-4 mb-6">
          Edit Peraturan Rental
        </h1>
        <RegulationForm data={data?.data} />
      </div>
    </Layout>
  );
}
