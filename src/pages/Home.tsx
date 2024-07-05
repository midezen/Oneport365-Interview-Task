import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Calender from "../components/Calender";
import sun from "../img/sun.png";
import AddNewSlideIn from "../components/AddNewSlideIn";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Home: React.FC = () => {
  return (
    <div id="home" className="relative">
      <div id="top" className="h-[79px] flex justify-between p-[40px]">
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

      <Calender />

      <div
        id="addContainer"
        className="p-[20px] flex flex-col gap-[16px] absolute w-[300px] h-[781px] shadow-[-4px_4px_27px_-3px_rgba(21,36,26,0.46)] bg-[#1F2937] right-0 top-[111px]"
      >
        <div id="addTop" className="flex justify-between text-[13px]">
          <span className="text-[#3B82F6] font-bold">TODAY 2/5/2024</span>
          <span className="flex items-center text-[#FFFFFF]">
            55°<span className="text-[#FFFFFFB2] mr-[2px]">/40°</span>
            <img
              src={sun}
              alt="sun"
              className="w-[16px] h-[16px] object-cover"
            />
          </span>
        </div>

        <div id="items" className="w-full flex flex-col gap-[20px]">
          <AddNewSlideIn time="4.00PM" />
          <AddNewSlideIn time="4.00PM" />
          <AddNewSlideIn time="4.00PM" />
          <AddNewSlideIn time="6.30PM" />
          <AddNewSlideIn time="8:00PM" draft />
        </div>

        <button className="flex items-center bg-[#FFFFFF] justify-center text-[11px] font-medium h-[36px] rounded-[10px]">
          <AddOutlinedIcon
            style={{ width: "10px", height: "10px", color: "#1F2937" }}
          />
          Add new quote
        </button>
      </div>
    </div>
  );
};

export default Home;
