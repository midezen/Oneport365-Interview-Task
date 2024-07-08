import { TableData } from "../models";

interface Prop {
  data: TableData[];
}

const TableModel = ({ data }: Prop) => {
  return (
    <div className="mt-[20px] w-full">
      <table className="w-full">
        <thead className="w-full h-[48px] border-t ">
          <tr className="w-full flex h-[48px] border-b items-center">
            <th className="flex justify-items-start w-[180px] font-normal h-[full] border-r items-center my-[8px] text-[12px] text-[#9AA1B1]">
              Basis
            </th>
            <th className="flex justify-items-start w-[180px] font-normal h-[full] border-r items-center pl-[15px] my-[8px] text-[12px] text-[#9AA1B1]">
              Unit of Measurement
            </th>
            <th className="flex justify-items-start w-[180px] font-normal h-[full] border-r items-center pl-[15px] my-[8px] text-[12px] text-[#9AA1B1]">
              Unit
            </th>
            <th className="flex justify-items-start w-[180px] font-normal h-[full] border-r items-center pl-[15px] my-[8px] text-[12px] text-[#9AA1B1]">
              Rate (USD)
            </th>
            <th className="flex justify-items-start w-[180px] font-normal h-[full] border-r items-center pl-[15px] my-[8px] text-[12px] text-[#9AA1B1]">
              Amount (USD)
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.map((item) => {
            return (
              <tr className="w-full h-[48px] flex items-center text-[14px] text-[#1F2937]">
                <td className="w-[180px] h-[full] border-r my-[8px] text items-center">
                  {item.basis}
                </td>
                <td className="w-[180px] h-[full] border-r my-[8px] pl-[15px] flex items-center">
                  {item.uom}
                </td>
                <td className="w-[180px] h-[full] border-r my-[8px] pl-[15px] flex items-center">
                  {item.unit}
                </td>
                <td className="w-[180px] h-[full] border-r my-[8px] pl-[15px] flex items-center">
                  {item.rate}
                </td>
                <td className="w-[180px] h-[full] border-r my-[8px] pl-[15px] flex items-center">
                  {item.amount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableModel;
