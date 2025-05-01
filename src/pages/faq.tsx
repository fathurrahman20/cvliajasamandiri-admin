import FaqTable from "@/components/faq/faq-form";
import { useGetFaq } from "@/hooks/useFaq";
import Layout from "@/layout";

export default function FaqPage() {
  const { data: dataFaq } = useGetFaq();
  return (
    <Layout page="FAQ">
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">Edit FAQ </h1>
        <FaqTable data={dataFaq?.data} />
      </div>
    </Layout>
  );
}
