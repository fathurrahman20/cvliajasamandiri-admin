import { CarDetailType } from "@/types";
import EditCar from "./modal-add-edit-car";
import AddCar from "./modal-add-edit-car";
import DeleteCar from "./dialog-delete-car";
import { formatIdr } from "@/lib/utils";

interface CarTableProps {
  data: CarDetailType[] | undefined;
}

export default function CarTable({ data }: CarTableProps) {
  return (
    <div>
      <div className="mt-4 sm:mt-0 sm:flex-none">
        <AddCar />
      </div>
      <div className="mt-5 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left text-white">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold">
                  No
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
                  Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Image
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Brand
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Biaya Satu Hari
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Biaya Setengah Hari
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Tahun
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  BBM
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Transmisi
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Penumpang
                </th>
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 && (
                <tr>
                  <td colSpan={10} className="text-center py-4">
                    Tidak ada data
                  </td>
                </tr>
              )}
              {data?.map((item, index) => (
                <tr key={item.id}>
                  <td className="relative py-4 pr-3 text-sm font-medium">
                    {index + 1}
                    <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                  </td>
                  <td className="px-3 py-4 text-sm sm:table-cell">
                    {item.name}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    <img src={item.imageUrl} alt={item.name} className="w-20" />
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.brand.name}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {formatIdr(item.priceFullDay)}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.priceHalfDay && formatIdr(item.priceHalfDay)}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.year}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.fuelType}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.transmission}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.maxPassengers}
                  </td>
                  <td className="relative py-4 pl-3 text-right text-sm font-medium">
                    <div className="flex flex-row gap-x-2">
                      <EditCar initialData={item} />
                      <DeleteCar id={item.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
