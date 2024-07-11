interface Prop {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calender = ({ setToggle, toggle }: Prop) => {
  const days: [number] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
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
        {days.map((day) => {
          return (
            <div
              className="py-[30px] border-r border-b cursor-pointer h-[120px]"
              onClick={() => setToggle(!toggle)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
