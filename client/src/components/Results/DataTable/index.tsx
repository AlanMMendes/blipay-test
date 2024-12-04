import { FunctionComponent } from "react";

interface DataTableProps {
  results: any;
  type: any;
}

const DataTable: FunctionComponent<DataTableProps> = ({ results, type }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="max-w-[480px] border-collapse ">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border text-left">Nome</th>
            {type === "person" && (
              <th className="px-4 py-2 border text-left w-full">Idade</th>
            )}
            {type === "company" && <></>}

            <th className="px-4 py-2 border text-left">Renda</th>
            <th className="px-4 py-2 border text-left">Cidade</th>
          </tr>
        </thead>

        <tbody>
          {results?.map((item: any, index: any) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="border px-2">
                {item?.person?.name || item.company?.name}
              </td>
              {type === "person" && (
                <td className="border px-2">{item?.person?.age}</td>
              )}
              <td className="border px-2">
                {item?.person?.income || item?.company?.revenue}
              </td>
              <td className="px-4 py-2 border w-96">
                {item?.person?.city || item?.company?.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
