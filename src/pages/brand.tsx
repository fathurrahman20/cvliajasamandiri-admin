import BrandTable from "@/components/brand/brand-form";
import { useGetBrand } from "@/hooks/useBrand";
import Layout from "@/layout";

export default function BrandPage() {
  const { data: dataBrand } = useGetBrand();
  return (
    <Layout page="Brand">
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Brand </h1>
        <BrandTable data={dataBrand?.data} />
      </div>
    </Layout>
  );
}
