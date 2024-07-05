const AddNewSlideIn = ({ time, draft }: any) => {
  return (
    <div
      id="item"
      className="h-[54px] flex gap-[5px] items-center hover:bg-[#D0F5FF] cursor-pointer"
    >
      <div
        id="left"
        className="h-[46px] w-[5px] rounded-[2px] bg-[#374151]"
      ></div>
      <div id="right" className="flex flex-col gap-[6px] w-full">
        <div id="itemTop" className="flex justify-between">
          <span className="text-[12px] text-[#D0F5FF] hover:text-[#005BC2]">
            $2,450.00{" "}
            {draft && (
              <span className="bg-[#505050] px-[4px] rouded-[2px] text-[12px] text-[#D0F5FF]">
                Draft
              </span>
            )}
          </span>
          <span className="text-[12px] text-[#D0F5FF] bg-[#374151] px-[2px] hover:text-[#D0F5FF]">
            {time}
          </span>
        </div>
        <span
          id="bottom"
          className="text-[12px] text-[#3B82F6] hover:text-[#005BC2]"
        >
          Air Freight/ Ocean Freight/ CBT/ Haulage
        </span>
      </div>
    </div>
  );
};

export default AddNewSlideIn;
