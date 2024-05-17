import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { baseRoutes } from "./Admin/Routings/Routings";

const theme = createTheme();

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
