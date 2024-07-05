import SyncAltIcon from "@mui/icons-material/SyncAlt";
import usaFlag from "../img/usaFlag.png";
import nigerianFlag from "../img/NigerianFlag.png";

const CurrencyCard: React.FC = () => {
  return (
    <div
      id="container_bodySectionRight"
      className="w-[25%] h-[243px] border border-[#E5E7EB] rounded-[12px] py-[20px] px-[20px]"
    >
      <div
        id="container_bodySectionRightTop"
        className="w-full flex justify-between"
      >
        <span className="text-[15px] font-medium text-[#1F2937]">
          Selection Currency
        </span>
        <span className="text-[14px] font-normal text-[#1F2937] flex gap-[4px] items-center">
          USD
          <img src={usaFlag} alt="usaFlag" className="h-[17px] w-[23.33px]" />
        </span>
      </div>
      <hr className="mt-[15px] mb-[15px]" />
      <div id="container_bodySectionRightCenter">
        <span className="text-[14px] text-[#6B7280] font-normal">
          Currency & Rate
        </span>
        <div className="flex items-center gap-[3px] mt-[10px]">
          <div className="rounded-[4px] border border-[#F3F4F6] py-[13px] px-[16px] w-[66px] h-[41px] flex items-center justify-center">
            <img
              src={usaFlag}
              alt="usaFlag"
              className="w-[24px] h-[15px] object-cover"
            />
          </div>

          <SyncAltIcon
            style={{
              width: "20px",
              height: "20px",
              color: "#9CA3AF",
            }}
          />

          <div className="rounded-[4px] border border-[#F3F4F6] py-[12px] px-[16px] w-[165px] h-[41px] flex items-center gap-[8px]">
            <img
              src={nigerianFlag}
              alt="nigerianFlag"
              className="w-[24px] h-[14.4px] object-cover"
            />
            <span className="font-normal text-[14px] text-[#34373F]">
              ₦1,119.53
            </span>
          </div>
        </div>
      </div>
      <button className="w-full mt-[30px] bg-[#F3F4F6] py-[10px] px-[14px] rounded-[4px] h-[40px] font-normal text-[14px] text-[#1F2937]">
        Edit section currency
      </button>
    </div>
  );
};

export default CurrencyCard;
