import React, { useState } from "react";
import Button from "@mui/material/Button";

const HoursComponent: React.FC<{
  hours: string[];
  hourChanged(hour: string): void;
}> = ({ hours, hourChanged }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const updateSelectedHour = (index: number): void => {
    console.log("hourChanged", hours[index]);
    setActiveIndex(index);
    hourChanged(hours[index]);
  };

  return (
    <div className="slots-group-container">
      {hours?.length > 0 &&
        hours.map((hour: string, index: number) => {
          return (
            <Button
              className={`slots-group-time ${
                activeIndex === index ? "active" : "inactive"
              }-time`}
              key={hour}
              onClick={() => updateSelectedHour(index)}
            >
              {hour}
            </Button>
          );
        })}
    </div>
  );
};

export default HoursComponent;
