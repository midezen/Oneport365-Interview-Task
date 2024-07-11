import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useState } from "react";
import { SectionModel } from "../models";
import { useLocation } from "react-router-dom";

interface Props {
  data: SectionModel;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean>>;
  remove: boolean;
}

const SectionTable = ({ data, setAddNewSection, remove }: Props) => {
  const location = useLocation();

  const [addNewBasis, setAddNewBasis] = useState<boolean>(
    location.state ? location.state : false
  );

  const handleRemove = () => {
    setAddNewBasis(false);
    setAddNewSection(false);
  };

  return (
    <div className="flex flex-col overflow-x-auto">
      <div
        id="label"
        className="w-full py-[16px] pr-[16px] h-[47px] flex items-center border border-[#E6E7EC] justify-between"
      >
        {!addNewBasis && (
          <span className="h-[47px] border border-[#139C33] text-[#9CA3AF] w-[143px] text-[12px] font-normal flex items-center justify-center">
            Enter Section Label
          </span>
        )}
        {addNewBasis && (
          <span className="w-[200px] h-[47px] pl-[16px]  font-normal text-[12px] text-[#374151] flex items-center">
            {data.section_name}
          </span>
        )}
        {remove && (
          <span
            className="text-[12px] text-[#C70024] cursor-pointer  sm:pr-[20px]"
            onClick={handleRemove}
          >
            Remove Section
          </span>
        )}
      </div>
      <table className="w-full flex flex-col border border-[#E6E7EC] border-b-none overflow-x-auto">
        {/* TABLE HEAD */}
        <thead className="bg-[#F9FAFB] text-[12px] text-[#6B7280] font-normal w-full border-b border-b-[#E6E7EC] flex items-center">
          <tr className="flex w-full items-center h-[49px] ">
            <th className=" w-[206px] border-r  flex items-center px-[16px] ">
              Basis
            </th>
            <th className=" w-[134px] border-r flex items-center justify-between px-[16px]">
              Unit of measure
              <span></span>
            </th>
            <th className=" w-[96px] border-r flex items-center px-[16px]">
              Unit
            </th>
            <th className=" w-[112px] border-r  flex items-center px-[16px]  gap-[7px] justify-between lg:gap-[20px]">
              Rate
              <div className="flex gap-[10px] items-center">
                <span className="bg-[#E5E7EB] rounded-[4px] px-[8px]">USD</span>
              </div>
            </th>
            <th className=" w-[227px] flex items-center px-[16px] gap-[20px]">
              Amount{" "}
              <span className="bg-[#E5E7EB] rounded-[4px] px-[8px]">USD</span>
            </th>
          </tr>
        </thead>

        {/* TABLE BODY */}

        {!addNewBasis ? (
          <tbody className="text-[12px] text-[#6B7280] font-normal w-full">
            <tr className="h-[49px] flex w-full items-center border-b border-b-[#E6E7EC]">
              <td className="w-[206px] border-r flex items-center px-[16px]">
                <span className="text-[#9CA3AF]">Enter Basis</span>
              </td>
              <td className="w-[134px] border-r flex items-center px-[16px] justify-between text-[#6B7280]">
                Per Kilogram
                <div className="flex gap-[10px] items-center">
                  <KeyboardArrowDownIcon
                    style={{ fontSize: "12px", color: "#6B7280" }}
                  />
                </div>
              </td>
              <td className="w-[96px] border-r flex items-center px-[16px] justify-between">
                Enter unit{" "}
              </td>
              <td className="w-[112px] border-r flex items-center px-[16px] justify-between">
                Enter rate
              </td>
              <td className=" flex items-center px-[16px] gap-[30px] justify-between flex-1">
                <span className="">Amount</span>
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
                className="text-[12px] text-[#6B7280] font-normal w-full"
                key={data._id}
              >
                <tr className="h-[49px] flex w-full items-center border-b border-b-[#E6E7EC]">
                  <td className="w-[206px] border-r  flex items-center px-[16px]">
                    <span className="">{sectionData.basis}</span>
                  </td>
                  <td className="w-[134px] border-r flex items-center px-[16px] justify-between text-[#6B7280]">
                    {sectionData.unit_of_measurement}
                    <div className="flex gap-[10px] items-center">
                      <KeyboardArrowDownIcon
                        style={{ fontSize: "12px", color: "#6B7280" }}
                      />
                    </div>
                  </td>
                  <td className="w-[96px] border-r flex items-center px-[16px] justify-between">
                    {sectionData.unit}
                  </td>
                  <td className="w-[112px] border-r flex items-center px-[16px] justify-between">
                    {sectionData.rate}
                  </td>
                  <td className=" flex items-center px-[16px] gap-[30px] justify-between flex-1">
                    <span className="">{sectionData.amount}</span>
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
