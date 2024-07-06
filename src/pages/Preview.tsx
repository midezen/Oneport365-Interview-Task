import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Preview: React.FC = () => {
  return (
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
      <div id="icons" className="mr-[48px] flex items-center gap-[12px]">
        <span className="cursor-pointer rounded-[24px] text-[12px] px-[16px] py-[8px] flex items-center justify-center bg-[#296FD8] font-medium text-[#FFFFFF]">
          Save Quote
        </span>
        <div className="cursor-pointer w-[38px] h-[36px] border-[1.5px] rounded-[8px] border-[#296FD8] px-[9px] py-[8px] flex items-center justify-center">
          <FileDownloadOutlinedIcon
            style={{ height: "20px", width: "20px", color: "#296FD8" }}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-center w-[36px] h-[36px] p-[6px] border border-[#E5E7EB] rounded-[8px]">
          <CloseOutlinedIcon
            style={{ width: "24px", height: "24px", color: "#AD0013" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
