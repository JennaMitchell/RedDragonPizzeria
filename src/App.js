import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/nav/nav-bar";
import Footer from "./components/footer/footer";
import HomePageMain from "./pages/homepage/homepage-main";
import FullMenuHomepage from "./pages/full-menu/full-menu-homepage";
import PizzaMakerHomepage from "./pages/pizza-maker/pizza-maker-homepage";
import OrderOnlineHomepage from "./pages/order-online/order-online-homepage";
import CartHomepage from "./pages/cart/cart-homepage";
import { useSelector } from "react-redux";
import Credits from "./pages/credits/credits";
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
  const pepperoniDragEventActive = useSelector(
    (state) => state.pepperoniDragEventActive
  );

  if (pepperoniDragEventActive) {
    document.body.classList.add("overflowHidden");
  } else {
    if (document.body.classList.contains("overflowHidden")) {
      document.body.classList.remove("overflowHidden");
    }
  }
  return (
    <div>
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
          />
          <Route
            path="/menu"
            element={
              <>
                <NavBar />
                <FullMenuHomepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/pizza-maker"
            element={
              <>
                <NavBar />
                <PizzaMakerHomepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/order-online"
            element={
              <>
                <NavBar />
                <OrderOnlineHomepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <NavBar />
                <CartHomepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/credits"
            element={
              <>
                <NavBar />
                <Credits />
                <Footer />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
