import { OurServiceDetailType } from "@/types";
import EditOurService from "./modal-add-edit-our-service";
import AddOurService from "./modal-add-edit-our-service";
import DeleteOurService from "./dialog-delete-our-service";

interface OurServiceTableProps {
  data: OurServiceDetailType[] | undefined;
}

export default function OurServiceTable({ data }: OurServiceTableProps) {
  return (
    <div>
      <div className="mt-4 sm:mt-0 sm:flex-none">
        <AddOurService />
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
                  Title
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell">
                  Description
                </th>
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4">
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
                    {item.title}
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:table-cell">
                    {item.description}
                  </td>
                  <td className="relative py-4 pl-3 text-right text-sm font-medium">
                    <div className="flex flex-row gap-x-2">
                      <EditOurService initialData={item} />
                      <DeleteOurService id={item.id} />
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
