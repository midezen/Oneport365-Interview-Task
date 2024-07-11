import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import sun from "../img/sun.png";
import AddNewSlideIn from "../components/AddNewSlideIn";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AddNewModal from "../components/AddNewModal";
import Preview from "../components/Preview";
import { PreviewContext } from "../context/previewModalContext";
import { PreviewContextType } from "../models";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { getAllQuoteStart, getSingleQuoteStart } from "../redux/quoteSlice";
import {
  add,
  format,
  parse,
  startOfToday,
  isToday,
  eachDayOfInterval,
  endOfMonth,
} from "date-fns";

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

  // CALENDER DECLARATIONS
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const [selectedDay, setSelectedDay] = useState<string>(" ");
  // END OF CALENDER DECLARATIONS

  //CALENDER FUNCTIONS

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  console.log(days);
  console.log(selectedDay);

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const handleClick = (dayKey: any) => {
    dayKey === "3" ? setToggle(true) : setToggle(false);
  };
  //END OF CALENDER FUNCTIONS

  const { handlePreviewOpen, previewOpen, handlePreviewClose } =
    useContext<PreviewContextType>(PreviewContext);

  const dispatch = useAppDispatch();

  const displaySingle = () => {
    dispatch(getSingleQuoteStart());
  };

  useEffect(() => {
    dispatch(getAllQuoteStart());
  }, [dispatch]);

  return (
    <div id="home" className="relative overflow-hidden">
      <div id="top" className="h-[79px] flex justify-between p-[40px]">
        <div id="existing" className="flex flex-col gap-[2px]">
          <span className="sm:text-[20px] text-[24px] text-[#1F2937] font-semibold">
            All <span className="max-[470px]:hidden">Existing</span> Quotes
          </span>
          <span className="text-[12px] text-[#6B7280]">
            View all <span className="max-[470px]:hidden">created</span> quotes
          </span>
        </div>
        <div
          id="may"
          className="sm:text-[20px] text-[24px] flex gap-[8px] font-medium"
        >
          <span className=" text-[#1F2937]">
            {format(firstDayCurrentMonth, "MMMM")}
          </span>
          <span className="text-[#00861E]">
            {format(firstDayCurrentMonth, "yyyy")}
          </span>
          <div id="icons">
            <KeyboardArrowLeftOutlinedIcon
              style={{ width: "24px", height: "24px", color: "#1F2937" }}
              onClick={previousMonth}
            />
            <KeyboardArrowRightOutlinedIcon
              style={{ width: "24px", height: "24px", color: "#1F2937" }}
              onClick={nextMonth}
            />
          </div>
        </div>
      </div>

      {/* CALENDER */}

      <div id="calender">
        <div className="h-[643px] border-t border-l  rounded-[8px] relative mx-[40px] mt-[32px]">
          <div className="grid grid-cols-7 max-[370px]:text-[14px] text-[16px] leading-6 text-center text-gray-500 border-b">
            <div className="border-r py-[10px]">SUN</div>
            <div className="border-r py-[10px]">MON</div>
            <div className="border-r py-[10px]">TUE</div>
            <div className="border-r py-[10px]">WED</div>
            <div className="border-r py-[10px]">THUR</div>
            <div className="border-r py-[10px]">FRI</div>
            <div className="py-[10px] border-r">SAT</div>
          </div>
          <div className="grid grid-cols-7 text-[14px] text-center text-gray-500">
            {days.map((day: any) => {
              const dayKey = format(day, "d");
              return (
                <div
                  key={dayKey}
                  className={`border-b border-r h-[120px]  flex flex-col justify-between cursor-pointer ${
                    dayKey === "3" ? "bg-[#1F2937]" : "bg-[#FFFFFF]"
                  }`}
                  onClick={() => handleClick(dayKey)}
                >
                  <span
                    className={`${isToday(day) && "bg-[#005BC2]"} ${
                      isToday(day) || dayKey === "3"
                        ? "text-[#FFFFFF]"
                        : "text-[#969696]"
                    }  flex justify-center items-center ml-[4px] mt-[4px] font-medium  text-[16px] w-[27px] h-[27px] rounded-[8px]`}
                  >
                    {format(day, "d")}
                  </span>
                  <div id="items" className="flex flex-col ml-[12px] gap-[8px]">
                    <span
                      className={`${
                        dayKey === "3" ? "text-[#F9FAFB]" : "text-[#374151]"
                      } flex text-start text-[12px] font-medium`}
                    >
                      5 Quotes
                    </span>

                    <span
                      className={`${
                        dayKey === "3" ? "bg-[#FFFFFF]" : "bg-[#98FF9B40]"
                      } rounded-[4px] w-[fit-content] mb-[4px] flex text-start font-medium text-[12px] text-[#1F2937] py-[2px] px-[4px]`}
                    >
                      Total: {dayKey === "3" ? "$12,250.00" : "$23,045.00"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id="addContainer"
        className={`p-[20px] flex flex-col gap-[16px] absolute w-[300px] h-[643px] shadow-[-4px_4px_27px_-3px_rgba(21,36,26,0.46)] bg-[#1F2937] ${
          toggle ? "right-0" : "right-[-300px]"
        } transition-all ease-in duration-[0.4s] top-[111px]`}
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
          <Link to="/addNew" onClick={displaySingle} state={true}>
            <div>
              <AddNewSlideIn time="8:00PM" draft />
            </div>
          </Link>
        </div>

        <button
          onClick={handleOpen}
          className="mb-[20px] flex items-center bg-[#FFFFFF]  justify-center text-[11px] font-medium h-[36px] rounded-[10px] gap-[2px]"
        >
          <AddOutlinedIcon
            style={{ width: "20px", height: "20px", color: "#1F2937" }}
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
            overflowY: "scroll",
          }}
          className="w-[100%] h-[100%] border-none rounded-none sm:w-[80%] sm:h-[90%] sm:rounded-[10px]"
        >
          <Preview />
        </Box>
      </Modal>
    </div>
  );
};

export default Home;

// https://stackblitz.com/edit/github-8odxmp?file=pages%2Findex.jsx
