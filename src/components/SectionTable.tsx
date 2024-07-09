import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useContext, useEffect, useState } from "react";
import { quoteToggleContextType, SectionModel } from "../models";
import { QuoteToggleContext } from "../context/quoteToggleContext";

interface Props {
  data: SectionModel;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionTable = ({ data, setAddNewSection }: Props) => {
  const { addNewBasis, setAddNewBasis } =
    useContext<quoteToggleContextType>(QuoteToggleContext);

  const [remove, setRemove] = useState<boolean>(false);

  useEffect(() => {
    data._id === "6670bed61cb82506c20df654" && setRemove(true);
  }, []);
  return (
    <div className="flex flex-col">
      <div
        id="label"
        className="w-full h-[47px] flex items-center border border-[#E6E7EC] justify-between"
      >
        {!addNewBasis && (
          <span className="h-[47px] p-[16px] border border-[#139C33] text-[#9CA3AF] w-[143px] text-[12px] font-normal flex items-center justify-center">
            Enter Section Label
          </span>
        )}
        {addNewBasis && (
          <span className="w-[200px] h-[47px] p-[16px] font-normal text-[12px] text-[#374151] flex items-center">
            {data.section_name}
          </span>
        )}
        {remove && (
          <span
            className="text-[12px] text-[#C70024] cursor-pointer pr-[20px]"
            onClick={() => setAddNewSection(false)}
          >
            Remove Section
          </span>
        )}
      </div>
      <table className="w-full flex flex-col border border-[#E6E7EC] border-b-none">
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
                Enter unit{" "}
                <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
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
          data.section_data.map((sectionData) => {
            return (
              <tbody
                className="h-[49px] text-[12px] text-[#6B7280] font-normal w-full"
                key={data._id}
              >
                <tr className="flex w-full items-center border-b border-b-[#E6E7EC]">
                  <td className="w-[206px] h-[48px] flex items-center p-[16px] justify-between">
                    <span className="">{sectionData.basis}</span>
                    <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                  </td>
                  <td className="w-[134px] h-[48px] flex items-center p-[16px] justify-between text-[#6B7280]">
                    {sectionData.unit_of_measurement}
                    <div className="flex gap-[10px] items-center">
                      <KeyboardArrowDownIcon
                        style={{ fontSize: "12px", color: "#6B7280" }}
                      />
                      <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                    </div>
                  </td>
                  <td className="w-[96px] flex items-center p-[16px] justify-between">
                    {sectionData.unit}
                    <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                  </td>
                  <td className="w-[112px] h-[48px] flex items-center p-[16px] justify-between">
                    {sectionData.rate}
                    <span className="h-[20px] w-[1px] bg-[#E6E7EC]"></span>
                  </td>
                  <td className="h-[48px] flex items-center p-[16px] gap-[30px] justify-between flex-1">
                    <span className="w-[28%] flex justify-center">
                      {sectionData.amount}
                    </span>
                    <DeleteOutlineOutlinedIcon
                      style={{
                        color: "#E11435",
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => setAddNewBasis(false)}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
        <button
          className="h-[44px] w-full text-[14px] text-[#00861E] p-[16px] flex items-center gap-[8px]"
          onClick={() => setAddNewBasis(true)}
        >
          <AddCircleOutlinedIcon
            style={{ color: "#00861E", fontSize: "14px" }}
          />
          Add new basis
        </button>
      </table>
    </div>
  );
};

export default SectionTable;
