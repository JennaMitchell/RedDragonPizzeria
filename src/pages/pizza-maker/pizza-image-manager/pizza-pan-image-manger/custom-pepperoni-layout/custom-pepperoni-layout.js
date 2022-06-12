import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material";
import { useState } from "react";
import trianglePepperoniSlice from "../../../../../img/pizza-maker/toppings/pepperoni-triangle-slice.png";
import squarePepperoniSlice from "../../../../../img/pizza-maker/toppings/pepperoni-square-slice.png";
import circlePepperoniSlice from "../../../../../img/pizza-maker/toppings/pepperoni-slice.png";
import { storeActions } from "../../../../../store/store";
const PepperoniImageContainer = styled("img", {
  name: "PepperoniImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(8%,8%)",
  height: "max(8%,8%)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  zIndex: 10,
}));

const CustomPepperoniLayout = () => {
  const pepperoniLayoutDatabase = useSelector(
    (state) => state.pepperoniLayoutDatabase
  );
  const [activeDragId, setActiveDragId] = useState("");
  const [currentPageX, setCurrentPageX] = useState(0);
  const [currentPageY, setCurrentPageY] = useState(0);
  const copyOfPepperoniLayoutDataBase = JSON.parse(
    JSON.stringify(pepperoniLayoutDatabase)
  );
  // we have to make copy sicne the orignal stor version cannoy be manipulated directly
  let renderReadyPepperoni;
  const dispatch = useDispatch();

  const dragStartHandler = (e) => {
    setActiveDragId(e.target.id);
    setCurrentPageX(e.pageX);
    setCurrentPageY(e.pageY);
  };

  const dragEndHandler = (e) => {
    /// Example Data Entry
    // pepperoniId : {
    // coordinates: { x: "" y: ""}
    // shape : "circle"

    for (let entry of copyOfPepperoniLayoutDataBase) {
      if (entry.pepperoniId === activeDragId) {
        let currentXCoord =
          copyOfPepperoniLayoutDataBase[entry.pepperoniId].coordinates.x;
        let indexOfPInXCoord = currentXCoord.indexOf("p");
        currentXCoord = currentXCoord.slice(0, indexOfPInXCoord);

        let currentYCoord =
          copyOfPepperoniLayoutDataBase[entry.pepperoniId].coordinates.y;
        let indexOfPInYCoord = currentYCoord.indexOf("p");
        currentYCoord = currentYCoord.slice(0, indexOfPInYCoord);

        // updating the new element
        let changeInX = e.pageX - currentPageX;
        let changeInY = e.pageY - currentPageY;

        copyOfPepperoniLayoutDataBase[entry.pepperoniId].coordinates.x = `${
          +currentXCoord + changeInX
        }px`;

        copyOfPepperoniLayoutDataBase[entry.pepperoniId].coordinates.y = `${
          +currentYCoord + changeInY
        }px`;

        // we flip the x and y since the top and left is invereted from what is being calcualted

        dispatch(
          storeActions.setPepperoniLayoutDatabase(copyOfPepperoniLayoutDataBase)
        );
        // need to setoff a dispatch toggle to cause the elements inside to be rendered
      }
    }
  };

  if (copyOfPepperoniLayoutDataBase.length !== 0) {
    renderReadyPepperoni = copyOfPepperoniLayoutDataBase.map((data, index) => {
      let pepperoniImage = "";
      let altText = "";

      switch (data.shape) {
        case "triangle":
          pepperoniImage = trianglePepperoniSlice;
          altText = "Triangle Pepperoni";
          break;
        case "square":
          pepperoniImage = squarePepperoniSlice;
          altText = "Square Pepperoni";
          break;
        case "circle":
          pepperoniImage = circlePepperoniSlice;
          altText = "Circle Pepperoni";
          break;
        default:
          break;
      }

      return (
        <PepperoniImageContainer
          key={index}
          src={pepperoniImage}
          alt={altText}
          id={data.pepperoniId}
          sx={{
            top: `${data.coordinates.y}`,
            left: `${data.coordinates.x}`,
            backgroundColor: `${activeDragId === data.pepperoniId && `green`}`,
          }}
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
        />
        // images are draggable by default; so we don't add it here
      );
    });
  }

  return <>{renderReadyPepperoni}</>;
};
export default CustomPepperoniLayout;
