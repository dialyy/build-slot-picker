import React, { useState } from "react";
import { Button } from "@mui/material";

import PartOfDayComponent from "./PartOfDayComponent";
import DayPickerComponent from "./DayPickerComponent";
import HoursComponent from "./HoursComponent";

import { TimeDataType } from "./types";

import "./styles.css";

const SlotPicker: React.FC<{
  selectedSlot(day: object): void;
}> = ({ selectedSlot }) => {
  const fetchedData: TimeDataType = {
    morning: ["10:00 am", "10:15 am", "10:30 am", "10:45 am", "11:00 am"],
    afternoon: ["12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm", "01:00 pm"],
    evening: ["08:00 pm", "08:15 pm", "08:30 pm", "08:45 pm", "09:00 pm"],
  };

  const defaultPartOfDay = "afternoon";

  const [day, setDay] = useState<null | string>(null);
  const [partOfDay, setPartOfDay] = useState<string>(defaultPartOfDay);
  const [hours, setHours] = useState<string[]>(fetchedData[defaultPartOfDay]);
  const [hour, setHour] = useState<null | string>(null);

  const updatePartOfDayHours = <K extends keyof TimeDataType>(key: K) => {
    console.log("data[key]", key, fetchedData[key]);
    setPartOfDay(key);
    setHours(fetchedData[key]);
  };

  const handleSelectedDay = (day: string): void => {
    console.log("handleSelectedDay", day);

    setDay(day);
  };

  const handleSelectedHour = (hour: string): void => {
    console.log("handleSelectedHour", hour);

    setHour(hour);
  };

  const handleSelectedSlot = (): void => {
    selectedSlot({
      day,
      partOfDay,
      hour,
    });
  };

  return (
    <div className="container">
      <DayPickerComponent selectedDayUpdated={handleSelectedDay} />
      <PartOfDayComponent selectedPartOfDay={updatePartOfDayHours} />
      <HoursComponent hours={hours} hourChanged={handleSelectedHour} />

      <Button
        disabled={day == null ? true : false}
        className="calendar-apply-button"
        onClick={handleSelectedSlot}
      >
        APPLY
      </Button>
    </div>
  );
};

export default SlotPicker;
