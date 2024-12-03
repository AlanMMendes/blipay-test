import { FunctionComponent } from "react";

interface DataTableProps {
  results: any;
}

const DataTable: FunctionComponent<DataTableProps> = ({ results }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse bg-white shadow-lg h-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border text-left">Nome</th>
            <th className="px-4 py-2 border text-left">Idade</th>
            <th className="px-4 py-2 border text-left">Renda</th>
            <th className="px-4 py-2 border text-left">Cidade</th>
          </tr>
        </thead>

        <tbody>
          {results?.persons?.map((item: any, index: any) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 border">{item.person.name}</td>
              <td className="px-4 py-2 border">{item.person.age}</td>
              <td className="px-4 py-2 border">{item.person.income}</td>
              <td className="px-4 py-2 border">{item.person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
