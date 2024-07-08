import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useContext } from "react";
import { PreviewContextType } from "../models";
import { PreviewContext } from "../context/previewModalContext";
import logo from "../img/logo.png";
import DetailsTable from "./DetailsTable";
import TableModel from "./TableModel";
import {
  destinationChargesData,
  quoteBreakdownData,
  termsData,
} from "../dummydata";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import downloadPdf from "../downloadFuction";

const Preview = () => {
  const { handlePreviewClose } = useContext<PreviewContextType>(PreviewContext);
  const handleDownload = () => {
    downloadPdf("preview", "preview.pdf");
  };
  return (
    <div id="preview" className="flex flex-col">
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
          <span
            onClick={handleDownload}
            className="cursor-pointer rounded-[24px] text-[12px] px-[16px] py-[8px] flex items-center justify-center bg-[#296FD8] font-medium text-[#FFFFFF]"
          >
            Save Quote
          </span>
          <div
            onClick={handleDownload}
            className="cursor-pointer w-[38px] h-[36px] border-[1.5px] rounded-[8px] border-[#296FD8] px-[9px] py-[8px] flex items-center justify-center"
          >
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
      <div className="w-full mt-[20px] mb-[20px] ">
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

          {/* PREVIEW BOTTOM CUSTOMER DETAILS */}

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

          {/* PREVIEW BOTTOM QUOTE BREAKDOWN TABLE */}
          <div id="QuoteBreakdown" className="mt-[32px]">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[14px] text-[#9CA3AF]">
                Quote Breakdown
              </span>
              <span className="text-[20px] font-medium text-[#4B5563]">
                ORIGIN HANDLING CHARGES
              </span>
            </div>
            <TableModel data={quoteBreakdownData} />
          </div>

          {/* PREVIEW BOTTOM DESTINATION CHARGES TABLE */}
          <div id="destinationCharges" className="mt-[32px]">
            <span className="text-[20px] font-medium text-[#4B5563]">
              DESTINATION HANDLING CHARGES
            </span>
            <TableModel data={destinationChargesData} />
          </div>

          {/* PREVIEW BOTTOM NOTE */}
          <div
            id="note"
            className="flex gap-[10px] mt-[32px] bg-[#1b5c2b] px-[20px] py-[10px] rounded-[8px] w-full"
          >
            <InfoOutlinedIcon
              style={{ color: "#FFFFFF", width: "20px", height: "20px" }}
            />
            <p className="text-[#FFFFFF] text-[14px]">
              Please note this offer is firm for acceptance within 48hours,
              otherwise above offer will be considered as invalid. Rates advised
              is subject to prevailing parallel market rate at time of invoice.
              Freight advised is subject to chargeable weight as declared by
              airline. Above tariff is not applicable to non-complaint shipments
              without Form Ms. PAARs.
              <br />
              <br />
              NOTE: duty and tax not inclusive in the reates advised. They will
              be advised when you provide the CIF value and H.S code <br />
              We do trust that this offer meets your requirements. Please,
              contact us if any further explanation is required.
            </p>
          </div>

          {/* PREVIEW BOTTOM ONEPORT365 TERMS AND CONDITIONS */}
          <div id="termsAndConditions" className="mt-[32px]">
            <span className="text-[20px] font-medium text-[#4B5563]">
              ONEPORT365 TERMS AND CONDITIONS
            </span>
            <div
              id="list"
              className="flex flex-col border rounded-[10px] w-full mt-[20px]"
            >
              {termsData.map((data) => {
                return (
                  <div
                    id="listItem"
                    className="text-[14px] w-full flex py-[10px] items-center"
                  >
                    <span className="border-r w-[7%] flex justify-center">
                      {data.id}
                    </span>
                    <span className="flex-1 w-[93%] pl-[15px]">
                      {data.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
