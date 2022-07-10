import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material";
import { useState } from "react";
import trianglePepperoniSlice from "../../../../img/pizza-maker/toppings/pepperoni-triangle-slice.png";
import squarePepperoniSlice from "../../../../img/pizza-maker/toppings/pepperoni-square-slice.png";
import circlePepperoniSlice from "../../../../img/pizza-maker/toppings/pepperoni-slice.png";
import { storeActions } from "../../../../store/store";
import customPepperoniBoundaryData from "./custom-pepperoni-boundary-data";
import customPepperoniMobileBoundaryData from "./custom-pepperoni-mobile-boundary-data";
import DeletePepperoniWarning from "../../popups/delete-pepperoni-warning";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  zIndex: 8,
  cursor: "grabbing",
}));

const CustomPepperoniLayout = () => {
  const smallKitchenTableActive = useMediaQuery("(max-width:460px)");
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
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );

  const selectedCrust = buildAPizzaUserSelectedObject.size[0];
  let panRadius = 0;
  if (smallKitchenTableActive) {
    panRadius = customPepperoniMobileBoundaryData[selectedCrust].radius;
  } else {
    panRadius = customPepperoniBoundaryData[selectedCrust].radius;
  }

  let renderReadyPepperoni;
  const dispatch = useDispatch();
  const deletePepperoniWarning = useSelector(
    (state) => state.deletePepperoniWarning
  );
  const deletePepperoniByDefault = useSelector(
    (state) => state.deletePepperoniByDefault
  );
  const deletePepperoniHandler = () => {
    let indexOfPepperoniToRemove = 0;

    for (let [index, entry] of copyOfPepperoniLayoutDataBase.entries()) {
      if (+entry.pepperoniId === +activeDragId) {
        indexOfPepperoniToRemove = index;
      }
    }

    let removedEntryLayout = copyOfPepperoniLayoutDataBase.filter(
      (entry) => +entry.pepperoniId !== +indexOfPepperoniToRemove
    );

    //The "splice()" function returns not the affected array, but the array of removed elements. If you remove nothing, the result array is empty.

    dispatch(storeActions.setPepperoniLayoutDatabase(removedEntryLayout));
    dispatch(storeActions.setPepperoniDragEventActive(false));
    setActiveDragId("");
    setCurrentPageX(0);
    setCurrentPageY(0);
  };

  const elementBoundaryCheck = (finalXValue, finalYValue) => {
    // to calculate if the end point being dropped is outside of the boundaries we use the distace formalua for a circle
    // distance  = squareRoot((x2-x1)^2 + (y2-y1)^2)
    // then if the distance is greater than the radius of the circle then the user dropped the element outside of pans radius
    //

    // Step 1. Grab the radius and circle midpoint from the database

    // Step 2. Dealing with negative values

    //the finalXValue and finalYValue is set to the origin of the top left
    // since we are dealing with the absolute positioning of top and left,
    //
    // To get around this we need to reset point origin to be set relative to orign of the pan photo

    // whenever the user drags an element outside of the pan that is above the top of the pan or to the left side of the pan.
    // the converted value will be set to a negative number to get around this we have to add the radius of the pan to it and run the calculation

    let xValToBeChecked = 0;
    let yValToBeChecked = 0;
    if (finalXValue < 0) {
      xValToBeChecked = panRadius - finalXValue;
      // its negative so it will be added to the radius
    } else {
      // since the origin of top and Left starts at the top left corner we need to convert inputed value to fit the midpoint of the pan
      if (finalXValue <= panRadius) {
        xValToBeChecked = panRadius - finalXValue;
      } else {
        xValToBeChecked = finalXValue - panRadius;
      }
    }

    if (finalYValue < 0) {
      yValToBeChecked = panRadius - finalYValue;
    } else {
      if (finalXValue <= panRadius) {
        yValToBeChecked = panRadius - finalYValue;
      } else {
        yValToBeChecked = finalYValue - panRadius;
      }
    }

    // Step 3. Calculate the Distance of the users drop point

    const newPointDistance = Math.sqrt(
      xValToBeChecked ** 2 + yValToBeChecked ** 2
    );
    if (newPointDistance > panRadius) {
      // delete warning popup
      return true;
    } else {
      return false;
    }
  };

  const dragStartHandler = (e) => {
    if (e.pageX == null) {
      setActiveDragId(e.target.id);
      setCurrentPageX(e.target.X);
      setCurrentPageY(e.target.Y);
    } else {
      setActiveDragId(e.target.id);
      setCurrentPageX(e.pageX);
      setCurrentPageY(e.pageY);
    }

    dispatch(storeActions.setPepperoniDragEventActive(true));
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
        // pixels
        currentYCoord = currentYCoord.slice(0, indexOfPInYCoord);

        // updating the new element
        let changeInX = 0;
        let changeInY = 0;
        let convertedXToPixels = 0;
        let convertedYToPixels = 0;
        if (e.pageX == null) {
          changeInX = e.target.X - currentPageX;
          changeInY = e.target.Y - currentPageY;
          convertedXToPixels = +currentXCoord + changeInX;
          convertedYToPixels = +currentYCoord + changeInY;
        } else {
          changeInX = e.pageX - currentPageX;
          changeInY = e.pageY - currentPageY;
          convertedXToPixels = +currentXCoord + changeInX;
          convertedYToPixels = +currentYCoord + changeInY;
        }

        // Running validation Check to see if the dropped point is within the pizza pan's radius.

        const elementIsOutOfBounds = elementBoundaryCheck(
          convertedXToPixels,
          convertedYToPixels
        );

        // if the element is dragged and dropped outside of the container
        if (elementIsOutOfBounds) {
          if (!deletePepperoniByDefault) {
            dispatch(storeActions.setDeletePepperoniWarning(true));
            dispatch(storeActions.setPopupActive(true));
            dispatch(storeActions.setPepperoniDragEventActive(false));

            setCurrentPageX(0);
            setCurrentPageY(0);
          } else {
            deletePepperoniHandler();
          }
        } else {
          copyOfPepperoniLayoutDataBase[
            entry.pepperoniId
          ].coordinates.x = `${convertedXToPixels}px`;

          copyOfPepperoniLayoutDataBase[
            entry.pepperoniId
          ].coordinates.y = `${convertedYToPixels}px`;

          // we flip the x and y since the top and left is invereted from what is being calcualted

          dispatch(
            storeActions.setPepperoniLayoutDatabase(
              copyOfPepperoniLayoutDataBase
            )
          );
          setActiveDragId("");
          setCurrentPageX(0);
          setCurrentPageY(0);
          dispatch(storeActions.setPepperoniDragEventActive(false));
        }
      }
    }
  };

  /// Handeling result from the warning popup

  const warningPopupHandler = (decision) => {
    if (decision === "Delete") {
      deletePepperoniHandler();
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
            cursor: `${activeDragId === data.pepperoniId && `grab`}`,
          }}
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          onTouchStart={dragStartHandler}
          onTouchEnd={dragEndHandler}
        />
        // images are draggable by default; so we don't add it here
      );
    });
  }

  return (
    <>
      {!deletePepperoniByDefault && (
        <DeletePepperoniWarning
          deletePepperoniWarning={deletePepperoniWarning}
          userInputRetriever={warningPopupHandler}
        />
      )}
      {renderReadyPepperoni}
    </>
  );
};
export default CustomPepperoniLayout;
