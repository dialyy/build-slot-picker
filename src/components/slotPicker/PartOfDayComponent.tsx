import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

const PartOfDayComponent: React.FC<{
  selectedPartOfDay(day: string): void;
}> = ({ selectedPartOfDay }) => {
  const rawData: {
    key: string;
    name: string;
    icon: JSX.Element;
    active: boolean;
  }[] = [
    {
      key: "morning",
      name: "Morning",
      icon: <SolarPowerIcon />,
      active: false,
    },
    {
      key: "afternoon",
      name: "Afternoon",
      icon: <WbSunnyOutlinedIcon />,
      active: true,
    },
    {
      key: "evening",
      name: "Evening",
      icon: <NightsStayOutlinedIcon />,
      active: false,
    },
  ];

  const [data, setData] = React.useState(rawData);

  const updateSelectedPartOfDay = (index: number) => {
    selectedPartOfDay(data[index].key);
    const updatedData = data.map((btn, i) => {
      btn.active = i === index ? true : false;
      return btn;
    });

    setData(updatedData);
  };

  return (
    <ButtonGroup
      className="buttons-group-container"
      variant="outlined"
      aria-label="outlined button group"
    >
      {data.map((button, index) => {
        return (
          <Button
            startIcon={button.icon}
            className={`buttons-group-day-time ${
              button.active ? "active" : "inactive"
            }-day-time`}
            key={button.key}
            onClick={() => updateSelectedPartOfDay(index)}
          >
            {button.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default PartOfDayComponent;
