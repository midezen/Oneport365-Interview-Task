import SyncAltIcon from "@mui/icons-material/SyncAlt";
import usaFlag from "../img/usaFlag.png";
import nigerianFlag from "../img/NigerianFlag.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditCurrency from "./EditCurrency";
import { useState } from "react";
import { CurrencyInfo } from "../models";

interface Prop {
  data: CurrencyInfo;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const CurrencyCard = ({ data }: Prop) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      id="container_bodySectionRight"
      className="md:w-[25%] w-full h-[243px] border border-[#E5E7EB] rounded-[12px] py-[20px] px-[20px]"
    >
      <div
        id="container_bodySectionRightTop"
        className="w-full flex justify-between"
      >
        <span className="text-[15px] font-medium text-[#1F2937]">
          Selection Currency
        </span>
        <span className="text-[14px] font-normal text-[#1F2937] flex gap-[4px] items-center">
          {data.currency}
          <img
            src={data.currency === "NGN" ? nigerianFlag : usaFlag}
            alt="usaFlag"
            className="h-[17px] w-[23.33px]"
          />
        </span>
      </div>
      <hr className="mt-[15px] mb-[15px]" />
      <div id="container_bodySectionRightCenter">
        <span className="text-[14px] text-[#6B7280] font-normal">
          Currency & Rate
        </span>
        <div className="flex items-center gap-[3px] mt-[10px]">
          <div className="flex-1 xl:flex-none rounded-[4px] border border-[#F3F4F6] py-[13px] px-[16px] md:w-[66px] h-[41px] flex items-center justify-center">
            <img
              src={data.currency === "NGN" ? nigerianFlag : usaFlag}
              alt="usaFlag"
              className="w-[24px] h-[15px] object-cover"
            />
          </div>

          <SyncAltIcon
            style={{
              // width: "20px",
              height: "20px",
              color: "#9CA3AF",
            }}
            className="flex-1 md:w-[20px] xl:flex-none"
          />

          <div className="flex-1 rounded-[4px] border xl:flex-none border-[#F3F4F6] py-[12px] px-[16px] md:w-[165px] h-[41px] flex items-center gap-[8px] justify-center md:justify-start">
            <img
              src={data.currency === "NGN" ? nigerianFlag : usaFlag}
              alt="nigerianFlag"
              className="w-[24px] h-[14.4px] object-cover"
            />
            <span className="font-normal text-[14px] text-[#34373F]">
              ₦{data.exchange_rate}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="w-full mt-[30px] bg-[#F3F4F6] py-[10px] px-[14px] rounded-[4px] h-[40px] font-normal text-[14px] text-[#1F2937]"
      >
        Edit section currency
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{ borderRadius: "10px" }}
          className="w-[85%] sm:w-[50%] md:w-[40%] lg:w-[40%] xl:w-[30%] h-[90%] overflow-y-auto"
        >
          <EditCurrency handleClose={handleClose} data={data} />
        </Box>
      </Modal>
    </div>
  );
};

export default CurrencyCard;
