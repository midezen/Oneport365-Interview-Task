import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Home: React.FC = () => {
  return (
    <div id="home" className="p-[40px]">
      <div id="top" className="h-[79px] flex justify-between">
        <div id="existing" className="flex flex-col gap-[2px]">
          <span className="text-[24px] text-[#1F2937] font-semibold">
            All Existing Quotes
          </span>
          <span className="text-[12px] text-[#6B7280]">
            View all created quotes
          </span>
        </div>
        <div id="may" className="text-[24px] flex gap-[8px] font-medium">
          <span className=" text-[#1F2937]">May</span>
          <span className="text-[#00861E]">2024</span>
          <div id="icons">
            <KeyboardArrowLeftOutlinedIcon
              style={{ width: "24px", height: "24px", color: "#1F2937" }}
            />
            <KeyboardArrowRightOutlinedIcon
              style={{ width: "24px", height: "24px", color: "#1F2937" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
