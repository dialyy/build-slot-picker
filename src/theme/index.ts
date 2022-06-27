import { createTheme } from "@mui/material/styles";

export const peepTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "blue",
        },
      },
    },
  },
});
