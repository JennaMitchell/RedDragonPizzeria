import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/nav/nav-bar";
import Footer from "./components/footer/footer";
import HomePageMain from "./pages/homepage/homepage-main";
import FullMenuHomepage from "./pages/full-menu/full-menu-homepage";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
      light: "#e57373",
      dark: "#b71c1c",
    },
    secondary: {
      main: "#616161",
      light: "#f5f5f5",
      dark: "#212121",
    },
  },
  typography: {
    fontFamily: "Libre Baskerville ,sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <div className="root">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <>
                <NavBar />
                <HomePageMain />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/menu"
            element={
              <>
                <NavBar />
                <FullMenuHomepage />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
