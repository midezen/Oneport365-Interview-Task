import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useContext } from "react";
import { PreviewContextType } from "../models";
import { PreviewContext } from "../context/previewModalContext";
import logo from "../img/logo.png";
import DetailsTable from "./DetailsTable";

const Preview = () => {
  const { handlePreviewClose } = useContext<PreviewContextType>(PreviewContext);
  return (
    <div id="container" className="flex flex-col">
      <div
        id="previewTop"
        className="h-[76px] bg-[#E9E9E933] w-full flex justify-between items-center"
      >
        <div
          id="title"
          className="mt-[18px] ml-[24px] p-[8px] flex items-center gap-[8px]"
        >
          <span className="text-[20px] font-medium text-[#1F2937]">
            Quote Detail
          </span>
          <span className="text-[20px] font-normal text-[#6B7280]">
            #34920_fe2
          </span>
        </div>
        <div
          id="icons"
          className="mr-[48px] flex items-center gap-[12px] mt-[18px]"
        >
          <span className="cursor-pointer rounded-[24px] text-[12px] px-[16px] py-[8px] flex items-center justify-center bg-[#296FD8] font-medium text-[#FFFFFF]">
            Save Quote
          </span>
          <div className="cursor-pointer w-[38px] h-[36px] border-[1.5px] rounded-[8px] border-[#296FD8] px-[9px] py-[8px] flex items-center justify-center">
            <FileDownloadOutlinedIcon
              style={{ height: "20px", width: "20px", color: "#296FD8" }}
            />
          </div>
          <div
            onClick={handlePreviewClose}
            className="cursor-pointer flex items-center justify-center w-[36px] h-[36px] p-[6px] border border-[#E5E7EB] rounded-[8px]"
          >
            <CloseOutlinedIcon
              style={{ width: "24px", height: "24px", color: "#AD0013" }}
            />
          </div>
        </div>
      </div>

      {/* PREVIEW BOTTOM */}
      <div className="w-full mt-[20px] ">
        <div
          id="previewBottom"
          className="flex flex-col py-[20px] px-[32px] rounded-[12px] border border-[#E5E7EB] w-[90%] m-auto"
        >
          <div id="logoAddress" className="flex justify-between h-[72px]">
            <img
              src={logo}
              alt="logo"
              className="w-[200.31px] h-[72px] object-contain ml-[-20px]"
            />
            <div className="flex flex-col font-normal text-[16px] text-[#6B7280] text-right">
              <span>UAC Building Marina</span>
              <span>Lagos, Nigeria</span>
              <span>100223</span>
            </div>
          </div>

          <div
            id="details"
            className="rounded-[16px] bg-[#F9FAFB] mt-[30px] px-[20px]"
          >
            <DetailsTable />

            <hr className="mt-[20px]" />

            <div
              id="detailsBottom"
              className="flex justify-between items-center mt-[20px] mb-[30px]"
            >
              <div
                id="left"
                className="w-[487px] gap-[8px] flex flex-col pr-[8px]"
              >
                <span className="text-[12px] text-[#9CA3AF]">
                  Collection Address
                </span>
                <p className="text-[16px] text-[#1F2937]">
                  INNIO Waukesha gas Engines 8123 116th Street, Suite 300, SW
                  Side of Building, Dock 46-50, Pleasant Plairie, WI 53158
                </p>
              </div>
              <div id="right">
                <span className="text-[12px] text-[#9CA3AF]">
                  Delivery Destination
                </span>
                <p className="text-[16px] text-[#1F2937] text-right">TPG PH</p>
              </div>
            </div>
          </div>

          <div id="QuoteBreakdown" className="h-[571px] mt-[32px]">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[14px] text-[#9CA3AF]">
                Quote Breakdown
              </span>
              <span className="text-[20px] font-medium text-[#4B5563]">
                ORIGIN HANDLING CHARGES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
