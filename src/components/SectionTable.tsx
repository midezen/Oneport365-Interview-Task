import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { BasisData } from "../dummydata";

interface Props {
  addNewBasis: boolean;
  setAddNewBasis: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionTable = ({ addNewBasis, setAddNewBasis }: Props) => {
  return (
    <table className="w-full flex flex-col border border-[#E6E7EC]">
      {/* TABLE HEAD */}
      <thead className="h-[49px] bg-[#F9FAFB] text-[12px] text-[#6B7280] font-normal w-full border-b border-b-[#E6E7EC]">
        <tr className="flex w-full items-center">
          <th className="w-[206px] h-[48px] flex items-center p-[16px] justify-between">
            Basis
            <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
          </th>
          <th className="w-[134px] h-[48px] flex items-center p-[16px] justify-between">
            Unit of measure
            <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
          </th>
          <th className="w-[96px] flex items-center p-[16px] justify-between">
            Unit<span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
          </th>
          <th className="w-[96px] h-[48px] flex items-center p-[16px] justify-center gap-[20px]">
            Rate
            <div className="flex gap-[10px] items-center">
              <span className="bg-[#E5E7EB] rounded-[4px] py-[4px] px-[8px]">
                USD
              </span>
              <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
            </div>
          </th>
          <th className="w-[227px] h-[48px] flex items-center p-[16px] gap-[30px]">
            Amount{" "}
            <span className="bg-[#E5E7EB] rounded-[4px] py-[4px] px-[8px]">
              USD
            </span>
          </th>
        </tr>
      </thead>

      {/* TABLE BODY */}

      {!addNewBasis ? (
        <tbody className="h-[49px] text-[12px] text-[#6B7280] font-normal w-full">
          <tr className="flex w-full items-center border-b border-b-[#E6E7EC]">
            <td className="w-[206px] h-[48px] flex items-center p-[16px] justify-between">
              <span className="text-[#9CA3AF]">Enter Basis</span>
              <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
            </td>
            <td className="w-[134px] h-[48px] flex items-center p-[16px] justify-between text-[#6B7280]">
              Per Kilogram
              <div className="flex gap-[10px] items-center">
                <KeyboardArrowDownIcon
                  style={{ fontSize: "12px", color: "#6B7280" }}
                />
                <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
              </div>
            </td>
            <td className="w-[96px] flex items-center p-[16px] justify-between">
              Enter unit <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
            </td>
            <td className="w-[112px] h-[48px] flex items-center p-[16px] justify-between">
              Enter rate
              <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
            </td>
            <td className="h-[48px] flex items-center p-[16px] gap-[30px] justify-between flex-1">
              <span className="w-[28%] flex justify-center">Amount</span>
              <DeleteOutlineOutlinedIcon
                style={{
                  color: "#E11435",
                  width: "16px",
                  height: "16px",
                  cursor: "pointer",
                }}
              />
            </td>
          </tr>
        </tbody>
      ) : (
        BasisData.map((data) => {
          return (
            <tbody className="h-[49px] text-[12px] text-[#6B7280] font-normal w-full">
              <tr className="flex w-full items-center border-b border-b-[#E6E7EC]">
                <td className="w-[206px] h-[48px] flex items-center p-[16px] justify-between">
                  <span className="">{data.basis}</span>
                  <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                </td>
                <td className="w-[134px] h-[48px] flex items-center p-[16px] justify-between text-[#6B7280]">
                  Per Kilogram
                  <div className="flex gap-[10px] items-center">
                    <KeyboardArrowDownIcon
                      style={{ fontSize: "12px", color: "#6B7280" }}
                    />
                    <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                  </div>
                </td>
                <td className="w-[96px] flex items-center p-[16px] justify-between">
                  {data.unit}
                  <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                </td>
                <td className="w-[112px] h-[48px] flex items-center p-[16px] justify-between">
                  {data.rate}
                  <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                </td>
                <td className="h-[48px] flex items-center p-[16px] gap-[30px] justify-between flex-1">
                  <span className="w-[28%] flex justify-center">
                    {data.amount}
                  </span>
                  <DeleteOutlineOutlinedIcon
                    style={{
                      color: "#E11435",
                      width: "16px",
                      height: "16px",
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          );
        })
      )}
    </table>
  );
};

export default SectionTable;
