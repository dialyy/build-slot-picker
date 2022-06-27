import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateTime } from "luxon";

const DayPickerComponent: React.FC<{
  selectedDayUpdated(day: string): void;
}> = ({ selectedDayUpdated }) => {
  const [value, setValue] = useState<DateTime | null>(DateTime.now());

  const handleDayChange = (day: DateTime | null) => {
    selectedDayUpdated(day!.toLocaleString());
    setValue(day);
  };

  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      openTo="day"
      showDaysOutsideCurrentMonth
      value={value}
      components={{
        SwitchViewIcon: KeyboardArrowDownIcon,
      }}
      onChange={(day) => handleDayChange(day)}
      renderInput={() => <></>}
    />
  );
};

export default DayPickerComponent;
