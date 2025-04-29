import RequirementNoDriverTable from "@/components/requirement/requirement-no-driver-form";
import RequirementWithDriverForm from "@/components/requirement/requirement-with-driver-form";
import { Separator } from "@/components/ui/separator";
import {
  useGetRequirementNoDriver,
  useGetRequirementWithDriver,
} from "@/hooks/useRequirement";
import Layout from "@/layout";

export default function RequirementPage() {
  const { data } = useGetRequirementWithDriver();
  const { data: dataRequirementNoDriver } = useGetRequirementNoDriver();
  return (
    <Layout page="Footer">
      <div className="md:max-w-1/2 ">
        <h1 className="text-start font-semibold mt-4 mb-6">
          Edit S&K Sewa Mobil Plus Driver{" "}
        </h1>
        <RequirementWithDriverForm data={data?.data} />
      </div>
      <Separator className="my-8 border-2" />
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">
          Edit S&K Sewa Mobil Lepas Kunci{" "}
        </h1>
        <RequirementNoDriverTable data={dataRequirementNoDriver?.data} />
      </div>
    </Layout>
  );
}
