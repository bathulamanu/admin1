import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { baseRoutes } from "./Admin/Routings/Routings";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiDatePicker: {
      styleOverrides: {
        root: {
          "& .MuiPickersStaticWrapper-root .MuiPaper-root": {
            padding: "8px", // Adjust the padding to decrease height
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      margin: 0,
    },
    h2: {
      fontSize: "1.5rem",
      margin: 0,
    },
    body1: {
      fontSize: "1rem",
      margin: 0,
    },
    subtitle2: {
      fontSize: "12px",
      margin: 0,
    },
    h6: {
      fontSize: "14px",
      margin: 0,
      fontWeight: "bold",
    },
    h5:{
      fontSize:'17px',
      margin:0,
      fontWeight:500
    }
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={baseRoutes} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
