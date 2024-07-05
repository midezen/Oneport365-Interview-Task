import { useState } from "react";
import TimePickerComponent from "./TimePickerComponent";
import SectionTable from "./SectionTable";

interface Props {
  remove: boolean;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const Section = ({ remove, setAddNewSection }: Props) => {
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

      <SectionTable remove={remove} setAddNewSection={setAddNewSection} />
    </div>
  );
};

export default Section;
