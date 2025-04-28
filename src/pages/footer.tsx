import FooterForm from "@/components/footer/footer-form";
import { useGetFooter } from "@/hooks/useFooter";
import Layout from "@/layout";

export default function FooterPage() {
  const { data } = useGetFooter();
  return (
    <Layout page="Footer">
      <div className="md:max-w-1/2 ">
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Footer</h1>
        <FooterForm data={data?.data} />
      </div>
    </Layout>
  );
}
