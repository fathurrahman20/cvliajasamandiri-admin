import ButtomForm from "@/components/buttom/buttom-form";
import { useGetButtom } from "@/hooks/useButtom";
import Layout from "@/layout";

export default function ButtomPage() {
  const { data } = useGetButtom();
  console.log(`Data Buttom: ${data}`);
  return (
    <Layout page="Button">
      <div className="md:max-w-1/2 ">
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Button Hero</h1>
        <ButtomForm data={data?.data} />
      </div>
    </Layout>
  );
}
