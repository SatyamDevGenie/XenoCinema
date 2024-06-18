import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const customTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffffff", // Set primary color to white
    },
    secondary: {
      main: "#000000", // Set secondary color to black
    },
  },
  typography: {
    fontWeightBold: 900, // Bolder font weight
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Default color
          fontWeight: 900, // Bolder font
          fontSize: "17px",
        },
        outlined: {
          borderColor: "#000", // Border color
        },
        textPrimary: {
          "&.Mui-selected": {
            color: "#000000", // Selected color
            backgroundColor: "#ffffff", // Background color for selected
          },
        },
      },
    },
  },
});

export default function CustomPagination({ setPage, numOfPages = 100 }) {
  // Scroll to top when page changes
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={customTheme}>
        <Pagination
          onChange={handlePageChange}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
