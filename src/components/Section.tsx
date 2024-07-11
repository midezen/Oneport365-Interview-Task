import { Quote, SectionModel } from "../models";
import SectionTable from "./SectionTable";

interface Props {
  data: SectionModel;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean>>;
  quoteDetails: Quote;
}

const Section = ({ data, setAddNewSection, quoteDetails }: Props) => {
  return (
    <div id="section" className="md:w-[75%] w-full overflow-x-auto">
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
            {quoteDetails.quote_date.toString()}
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
