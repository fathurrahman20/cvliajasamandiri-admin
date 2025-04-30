import HeroForm from "@/components/hero/hero-form";
import { useGetHero } from "@/hooks/useHero";
import Layout from "@/layout";

export default function HeroPage() {
  const { data } = useGetHero();
  return (
    <Layout page="Hero">
      <div className="md:max-w-1/2 ">
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Hero</h1>
        <HeroForm data={data?.data} />
      </div>
    </Layout>
  );
}
