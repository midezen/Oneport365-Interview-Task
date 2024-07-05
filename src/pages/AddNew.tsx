import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyCard from "../components/CurrencyCard";
import Section from "../components/Section";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useState } from "react";

const AddNew: React.FC = () => {
  const [addNewSection, setAddNewSection] = useState<boolean>(false);
  return (
    <div id="container">
      <div
        id="container_top"
        className="flex justify-between items-center h-[118px] bg-[#FAFAFA] px-[64px]"
      >
        <div id="container_topLeft" className="flex flex-col gap-[4px]">
          <div
            id="container_topLeftTop"
            className="flex items-center font-normal text-[12px] text-[#6B7280] cursor-pointer"
          >
            <NavigateBeforeIcon className="text-[12px]" /> Back to quotes
          </div>
          <p className="text-[24px] text-[#1F2937]-500">
            "Quote Title Here"{" "}
            <span className="text-[#9CA3AF]">[2/5/2024]</span>
          </p>
        </div>
        <div id="container_topRight" className="flex items-center gap-[24px]">
          <button className="py-[10px] px-[14px] rounded-[4px] bg-[#FFFFFF] border border-[#F3F4F6] text-[#6B7280] font-normal text-[14px]">
            Save as draft
          </button>
          <button className="py-[10px] rounded-[4px] px-[14px] bg-[#37B24833] text-[#005C00] font-normal text-[14px]">
            <VisibilityIcon /> Preview
          </button>
        </div>
      </div>
      <div id="container_body" className="px-[64px] w-full ">
        <div id="container_bodySections" className="w-full mt-[39px] ">
          <div
            id="container_bodySection"
            className="flex gap-[24px] items-center mb-[30px]"
          >
            <Section />
            <CurrencyCard />
          </div>
          {addNewSection && (
            <div
              id="container_bodySection"
              className="flex gap-[24px] items-center"
            >
              <Section remove setAddNewSection={setAddNewSection} />
              <CurrencyCard nigeria />
            </div>
          )}
        </div>
        <hr className="w-[73.5%] mt-[43px] mb-[40px] " />
        <button
          onClick={() => setAddNewSection(true)}
          className="bg-[#37B2481A] h-[44px] w-[73.5%] text-[14px] text-[#00861E] flex items-center gap-[8px] justify-center"
        >
          <AddCircleOutlinedIcon
            style={{ color: "#00861E", fontSize: "14px" }}
          />
          Add new Section
        </button>
        <hr className="w-[73.5%] mt-[43px] mb-[40px] " />
        <div
          id="container_bodySectionsBottom"
          className="w-[75%] flex justify-between mb-[30px]"
        >
          <button className="py-[10px] px-[32px] border text-[14px] font-normal text-[#C70024] bg-[#E5E7EB] rounded-[4px]">
            Cancel
          </button>
          <button className=" mr-[20px] py-[10px] px-[32px] bg-[#109B32] rounded-[4px] text-[14px] font-normal text-[#FFFFFF]">
            Save Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
