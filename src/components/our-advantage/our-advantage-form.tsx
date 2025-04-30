import { OurAdvantageDetailType } from "@/types";
import EditOurAdvantage from "./modal-add-edit-our-advantage";
import AddOurAdvantage from "./modal-add-edit-our-advantage";
import DeleteOurAdvantage from "./dialog-delete-our-advantage";

interface OurAdvantageTableProps {
  data: OurAdvantageDetailType[] | undefined;
}

export default function OurAdvantageTable({ data }: OurAdvantageTableProps) {
  return (
    <div>
      <div className="mt-4 sm:mt-0 sm:flex-none">
        <AddOurAdvantage />
      </div>
      <div className="mt-5 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left text-white">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold">
                  ID
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
              {data?.map((item) => (
                <tr key={item.id}>
                  <td className="relative py-4 pr-3 text-sm font-medium">
                    {item.id}
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
                      <EditOurAdvantage initialData={item} />
                      <DeleteOurAdvantage id={item.id} />
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
