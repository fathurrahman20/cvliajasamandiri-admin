import OurAdvantageTable from "@/components/our-advantage/our-advantage-form";
import { useGetOurAdvantage } from "@/hooks/useOurAdvantage";
import Layout from "@/layout";

export default function OurAdvantagePage() {
  const { data: dataOurAdvantage } = useGetOurAdvantage();
  return (
    <Layout page="Keunggulan Kami">
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">
          Edit Keunggulan Kami{" "}
        </h1>
        <OurAdvantageTable data={dataOurAdvantage?.data} />
      </div>
    </Layout>
  );
}
