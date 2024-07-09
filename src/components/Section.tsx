import { SectionModel } from "../models";
import SectionTable from "./SectionTable";

interface Props {
  data: SectionModel;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const Section = ({ data, setAddNewSection }: Props) => {
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

      <SectionTable
        data={data}
        setAddNewSection={setAddNewSection}
        remove={data.section_number > 1 ? true : false}
      />
    </div>
  );
};

export default Section;
