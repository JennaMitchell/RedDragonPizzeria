import pizzaPan from "../../../../img/pizza-builder/pizza-pan.png";
import { styled } from "@mui/material";
const PizzaPanContainer = styled("img", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(400px,400px)",
  height: "max(400px,400px)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  transition: "all 2s",
  zIndex: 2,
}));
const PizzaSizeImageManager = ({ size }) => {
  let renderReadyPizzaPan = "";
  switch (size) {
    case "Small":
      renderReadyPizzaPan = (
        <PizzaPanContainer
          sx={{
            width: "max(350px,350px)",
            height: "max(350px,350px)",
          }}
          src={pizzaPan}
          alt="pizza pan"
        />
      );
      break;
    case "Medium":
      renderReadyPizzaPan = (
        <PizzaPanContainer
          src={pizzaPan}
          alt="pizza pan"
          sx={{
            width: "max(400px,400px)",
            height: "max(400px,400px)",
          }}
        />
      );
      break;
    case "Large":
      renderReadyPizzaPan = (
        <PizzaPanContainer
          src={pizzaPan}
          sx={{
            width: "max(450px,450px)",
            height: "max(450px,450px)",
          }}
          alt="pizza pan"
        />
      );
      break;
    case "X-large":
      renderReadyPizzaPan = (
        <PizzaPanContainer
          src={pizzaPan}
          sx={{
            width: "max(500px,500px)",
            height: "max(500px,500px)",
          }}
          alt="pizza pan"
        />
      );
      break;
    case "XX-large":
      renderReadyPizzaPan = (
        <PizzaPanContainer
          src={pizzaPan}
          sx={{
            width: "max(550px,550px)",
            height: "max(550px,550px)",
          }}
          alt="pizza pan"
        />
      );
      break;
    default:
      <PizzaPanContainer
        src={pizzaPan}
        sx={{
          width: "max(550px,550px)",
          height: "max(550px,550px)",
        }}
        alt="pizza pan"
      />;
  }

  return <>{renderReadyPizzaPan}</>;
};
export default PizzaSizeImageManager;
