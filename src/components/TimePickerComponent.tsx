import React, { useState } from "react";
import { TimePicker } from "antd";
import type { Dayjs } from "dayjs";

const TimePickerComponent: React.FC = () => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const onChange = (time: Dayjs | null) => {
    setValue(time);
  };

  return (
    <TimePicker
      value={value}
      onChange={onChange}
      style={{ width: "100%", height: "3.125rem" }}
    />
  );
};

export default TimePickerComponent;
