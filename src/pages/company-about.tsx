import AboutCompanyForm from "@/components/about-company/about-company-form";
import { useGetAboutCompany } from "@/hooks/useCompany";
import Layout from "@/layout";

export default function AboutCompanyPage() {
  const { data } = useGetAboutCompany();

  return (
    <Layout page="About Company">
      <div className=" ">
        <h1 className="text-start font-semibold mt-4 mb-6">
          Edit About Company
        </h1>
        <AboutCompanyForm data={data?.data} />
      </div>
    </Layout>
  );
}
