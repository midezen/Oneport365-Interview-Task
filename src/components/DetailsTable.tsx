import "../customCss.css";

const DetailsTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table id="detailsTable1" className="mt-[40px] w-full ">
        <thead className="w-full">
          <tr className="w-full flex">
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              Attention [Customer Name]
            </th>
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              Email Address
            </th>
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              Commodity
            </th>
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              Service Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex">
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              Daniel Alobode
            </td>
            <td className="font-normal text-[14px] sm:text-[16px] text-[#007003] w-[203px]">
              ample@mail.com
            </td>
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              Electric goods
            </td>
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              Export Air Frieght
            </td>
          </tr>
        </tbody>
      </table>

      <table id="detailsTable2" className="mt-[20px] w-full">
        <thead className="w-full">
          <tr className="w-full flex">
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              Chargeable weight (KG)
            </th>
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              POL (Port of Loading)
            </th>
            <th className="font-normal text-[12px] text-[#9CA3AF] w-[203px] flex justify-items-start">
              POD (Port of Destination)
            </th>
            <th className="font-normal text-[12px] text-[#E11435] w-[203px] flex justify-items-start">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex">
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              55.34KG
            </td>
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              Lagos City
            </td>
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              Johannesburg
            </td>
            <td className="font-normal text-[14px] sm:text-[16px] text-[#1F2937] w-[203px]">
              23rd, March 2024
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
