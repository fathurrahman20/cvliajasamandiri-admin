import CarTable from "@/components/car/car-form";
import { useGetCar } from "@/hooks/useCar";
import Layout from "@/layout";

export default function CarPage() {
  const { data: carData } = useGetCar();
  return (
    <Layout page="Armada">
      <div>
        <h1 className="text-start font-semibold mt-4 mb-6">Edit Armada </h1>
        {/* <OurServiceTable data={dataOurService?.data} /> */}
        <CarTable data={carData?.data} />
      </div>
    </Layout>
  );
}
