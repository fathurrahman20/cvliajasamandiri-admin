import ButtomForm from "@/components/bottom/bottom-form";
import { useGetButtom } from "@/hooks/useButtom";
import Layout from "@/layout";

export default function BottomPage() {
  const { data } = useGetButtom();
  return (
    <Layout page="Button">
      <div className="md:max-w-1/2 ">
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Button Hero</h1>
        <ButtomForm data={data?.data} />
      </div>
    </Layout>
  );
}
