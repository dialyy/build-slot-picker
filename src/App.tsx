import { useState } from "react";

import { Box, Button, Drawer, Typography, Stack, Alert } from "@mui/material";

import SlotPicker from "./components/slotPicker";
import { Slot } from "./components/slotPicker/types";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slot, setSlot] = useState<Slot>({
    day: null,
    partOfDay: "",
    hour: null,
  });

  const handleSelectedSlot = (s: Slot): void => {
    setSlot(s);
    setIsModalOpen(false);
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      bgcolor="#222222"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={4}
    >
      <Typography style={{ fontSize: 30, color: "white" }}>
        Build A slot Picker
      </Typography>

      <Button onClick={() => setIsModalOpen(!isModalOpen)} variant="contained">
        Open Modal
      </Button>

      {!isModalOpen && slot.day !== null && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            <Typography style={{ fontSize: 20, color: "black" }}>
              Chosen Time
            </Typography>
            <hr></hr>
            <p>Time : {slot.hour} </p>
            <p>Part of Day : {slot.partOfDay} </p>
            <p>Day : {slot.day} </p>
          </Alert>
        </Stack>
      )}

      <Drawer
        anchor="bottom"
        open={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        PaperProps={{
          sx: { padding: 4 },
        }}
      >
        <SlotPicker selectedSlot={handleSelectedSlot} />
      </Drawer>
    </Box>
  );
}

export default App;
