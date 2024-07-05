import { useState } from "react";
import TimePicker from "react-time-picker";

const TimePickerComponent: React.FC = () => {
  const [value, setValue] = useState<string>("10:00");
  return (
    <div>
      <TimePicker
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default TimePickerComponent;
