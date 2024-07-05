import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import usaFlag from "../img/usaFlag.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import nigerianFlag from "../img/NigerianFlag.png";
import { useState } from "react";

const EditCurrency = ({ handleClose }: any) => {
  const [input, setInput] = useState<string>("");

  return (
    <div id="wrapper">
      <div id="top" className="flex justify-between h-[79px] border-b ">
        <div className="flex flex-col gap-[4px]">
          <span className="text-[16px] text-[#1F2937] font-semibold pt-[24px] pl-[24px]">
            Set Section Currency
          </span>
          <span className="font-normal text-[12px] text-[#6B7280] pl-[24px]">
            Kindly set a currency and rate
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

      <div id="selectCurrency" className="mt-[20px]">
        <span className="text-[#4B5563] text-[12px] font-medium mx-[24px] ">
          Select Currency
        </span>
        <div className="border cursor-pointer flex justify-between items-center border-[#E5E7EB] mx-[24px] h-[44px] px-[10px] mt-[10px]">
          <div className="flex gap-[8px] items-center">
            <img src={usaFlag} alt="" className="w-[24px] h-[17px]" />
            <span className="text-[14px] text-[#1F2937] font-normal">USD</span>
          </div>
          <KeyboardArrowDownIcon
            style={{ width: "20px", height: "20px", color: "#4B5563" }}
          />
        </div>
      </div>

      <div id="question" className="mx-[24px] mt-[20px]">
        <span className="text-[14px] text-[#6B7280]">
          Is this the base currency?
        </span>
        <form
          id="inputs"
          className="text-[14px] text-[#1F2937] flex gap-[24px] items-center mt-[10px]"
        >
          <div className="flex items-center gap-[8px]">
            <input
              type="checkbox"
              name="answer"
              id="yes"
              checked={input === "Yes"}
              onClick={() => setInput("Yes")}
            />
            <label htmlFor="yes">Yes, it is.</label>
          </div>
          <div className="flex items-center gap-[8px]">
            <input
              type="checkbox"
              name="answer"
              id="No"
              checked={input === "No"}
              onClick={() => setInput("No")}
            />
            <label htmlFor="No">No</label>
          </div>
        </form>
      </div>

      <div id="info" className="flex gap-[10px] mx-[24px] mt-[20px]">
        <InfoOutlinedIcon
          style={{ color: "#005BC2", width: "20px", height: "20px" }}
        />
        <p className="text-[12px] text-[#005BC2]">
          <span>Note,</span> Base currency is the currency the customer will
          make payment in.
        </p>
      </div>

      <hr className=" flex justify-center items-center mx-[24px] my-[20px]" />

      <div
        id="CustomersCurrency"
        className={`mt-[20px] ${input === "Yes" && "opacity-[0.4]"}`}
      >
        <span className="text-[#4B5563] text-[12px] font-medium mx-[24px] ">
          Customers Currency
        </span>
        <div className="border cursor-pointer flex justify-between items-center border-[#E5E7EB] mx-[24px] h-[44px] px-[10px] mt-[10px]">
          <div className="flex gap-[8px] items-center">
            <img src={nigerianFlag} alt="" className="w-[24px] h-[17px]" />
            <span className="text-[14px] text-[#1F2937] font-normal">NGN</span>
          </div>
          <KeyboardArrowDownIcon
            style={{ width: "20px", height: "20px", color: "#4B5563" }}
          />
        </div>
      </div>

      <div
        id="EnterRate"
        className={`mt-[20px] ${input === "Yes" && "opacity-[0.4]"}`}
      >
        <span className="text-[#4B5563] text-[12px] font-medium mx-[24px] ">
          Enter Rate
        </span>
        <div className="border cursor-pointer flex justify-between items-center border-[#E5E7EB] mx-[24px] h-[44px] px-[10px] mt-[10px]">
          <div className="flex gap-[8px] items-center">
            <img src={nigerianFlag} alt="" className="w-[24px] h-[17px]" />
            <span className="text-[14px] text-[#1F2937] font-normal">
              ₦1,119.53
            </span>
          </div>
        </div>
      </div>

      <div
        id="buttonWrapper"
        className="h-[93px] w-full border-t mt-[20px] flex items-center justify-center"
      >
        <button
          onClick={handleClose}
          className="h-[44px] items-center rounded-[4px] w-[85%] bg-[#1F2937] text-[14px] font-medium flex justify-center text-[#FFFFFF]"
        >
          Set section currency
        </button>
      </div>
    </div>
  );
};

export default EditCurrency;
