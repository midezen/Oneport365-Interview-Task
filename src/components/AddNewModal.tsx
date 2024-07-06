import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const AddNewModal = ({ handleClose }: any) => {
  return (
    <div id="wrapper">
      <div id="top" className="flex justify-between h-[79px] border-b ">
        <div className="flex flex-col gap-[4px]">
          <span className="text-[16px] text-[#1F2937] font-semibold pt-[24px] pl-[24px]">
            Create New Quote
          </span>
          <span className="font-normal text-[12px] text-[#6B7280] pl-[24px]">
            Enter quote name and time
          </span>
        </div>
        <CloseOutlinedIcon
          style={{
            marginRight: "24px",
            marginTop: "24px",
            color: "#9CA3AF",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
      </div>

      <div id="EnterRate" className="mt-[20px]">
        <span className="text-[#4B5563] text-[12px] font-medium mx-[24px] ">
          Enter Quote Title
        </span>
        <div className="border cursor-pointer flex justify-between items-center border-[#E5E7EB] mx-[24px] h-[44px] px-[10px] mt-[10px]">
          <span className="text-[#1F293780] text-[14px]">
            Enter quote title here
          </span>
        </div>
      </div>

      <div className="flex">
        <div id="startTime" className="mt-[20px] flex-1">
          <span className="text-[#4B5563] text-[12px] font-medium mx-[24px] ">
            Start Time
          </span>
          <div className="border cursor-pointer flex justify-between items-center border-[#E5E7EB] mx-[24px] h-[44px] px-[10px] mt-[10px]">
            <span className="text-[#1F2937] text-[14px]">09 : 00 AM</span>
            <KeyboardArrowDownIcon
              style={{ color: "#6B7280", height: "14px", weight: "14px" }}
            />
          </div>
        </div>
        <div id="EndTime" className="mt-[20px] flex-1">
          <span className="text-[#4B5563] text-[12px] font-medium mx-[24px] ">
            End Time
          </span>
          <div className="border cursor-pointer flex justify-between items-center border-[#E5E7EB] mx-[24px] h-[44px] px-[10px] mt-[10px]">
            <span className="text-[#1F2937] text-[14px]">09 : 00 AM</span>
            <KeyboardArrowDownIcon
              style={{ color: "#6B7280", height: "14px", weight: "14px" }}
            />
          </div>
        </div>
      </div>

      <div
        id="buttonWrapper"
        className="h-[136px] w-full border-t mt-[20px] flex flex-col items-center justify-center"
      >
        <Link
          to="/addNew"
          className="h-[44px] items-center rounded-[4px] w-[85%] bg-[#007003] text-[14px] font-medium flex justify-center text-[#FFFFFF]"
        >
          <button
            onClick={handleClose}
            className="h-[44px] items-center rounded-[4px] w-[85%] bg-[#007003] text-[14px] font-medium flex justify-center text-[#FFFFFF]"
          >
            <span>Create New Quote</span>
          </button>
        </Link>

        <button
          onClick={handleClose}
          className="text-[#E11435] mt-[20px] text-[14px] font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNewModal;
