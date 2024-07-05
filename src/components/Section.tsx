import { useState } from "react";
import TimePickerComponent from "./TimePickerComponent";
import SectionTable from "./SectionTable";

const Section: React.FC = () => {
  const [addNewBasis, setAddNewBasis] = useState<boolean>(true);
  return (
    <div id="section" className="w-[75%]">
      <div
        id="sectionTop"
        className="w-full h-[48px] py-[8px] px-[16px] bg-[#F9FAFB] flex items-center gap-[10px]"
      >
        <span className="font-medium text-[12px] text-[#374151]">
          Change Quote Time
        </span>
        <div
          id="dateTime"
          className="rounded-[32px] py-[6px] px-[12px] border border-[#DBE3DC]"
        >
          <span className="text-[12px] text-[#007003] font-normal">
            Sat 5th, May 2024
          </span>
        </div>
      </div>
      <div
        id="label"
        className="w-full h-[47px] flex items-center border border-[#E6E7EC]"
      >
        {!addNewBasis && (
          <span className="h-[47px] p-[16px] border border-[#139C33] text-[#9CA3AF] w-[143px] text-[12px] font-normal flex items-center justify-center">
            Enter Section Label
          </span>
        )}
        {addNewBasis && (
          <span className="w-[200px] h-[47px] p-[16px] font-normal text-[12px] text-[#374151] flex items-center">
            ORIGIN HANDLING CHARGES
          </span>
        )}
      </div>
      <SectionTable addNewBasis={addNewBasis} setAddNewBasis={setAddNewBasis} />
    </div>
  );
};

export default Section;
