import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Calender from "../components/Calender";
import sun from "../img/sun.png";
import AddNewSlideIn from "../components/AddNewSlideIn";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import AddNewModal from "../components/AddNewModal";
import Preview from "../components/Preview";
import { PreviewContext } from "../context/previewModalContext";
import { PreviewContextType } from "../models";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { getSingleQuoteStart } from "../redux/quoteSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const Home: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const { handlePreviewOpen, previewOpen, handlePreviewClose } =
    useContext<PreviewContextType>(PreviewContext);

  const dispatch = useAppDispatch();

  // const quoteState: QuoteState = useAppSelector(
  //   (state: RootState) => state.quote
  // );

  const displaySingle = () => {
    dispatch(getSingleQuoteStart());
  };

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

      <div onClick={() => setToggle(!toggle)}>
        <Calender />
      </div>

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
          <div onClick={handlePreviewOpen}>
            <AddNewSlideIn time="4.00PM" />
          </div>
          <div onClick={handlePreviewOpen}>
            <AddNewSlideIn time="4.00PM" />
          </div>
          <div onClick={handlePreviewOpen}>
            <AddNewSlideIn time="4.00PM" />
          </div>
          <div onClick={handlePreviewOpen}>
            <AddNewSlideIn time="6.30PM" />
          </div>
          <Link to="/addNew" onClick={displaySingle}>
            <div>
              <AddNewSlideIn time="8:00PM" draft />
            </div>
          </Link>
        </div>

        <button
          onClick={handleOpen}
          className="flex items-center bg-[#FFFFFF] justify-center text-[11px] font-medium h-[36px] rounded-[10px]"
        >
          <AddOutlinedIcon
            style={{ width: "10px", height: "10px", color: "#1F2937" }}
          />
          Add new quote
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: "30%", borderRadius: "10px" }}>
          <AddNewModal handleClose={handleClose} />
        </Box>
      </Modal>
      <Modal
        open={previewOpen}
        onClose={handlePreviewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            width: "80%",
            height: "90%",
            borderRadius: "10px",
            overflowY: "scroll",
          }}
        >
          <Preview />
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
