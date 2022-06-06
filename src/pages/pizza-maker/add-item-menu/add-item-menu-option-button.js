import { styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { storeActions } from "../../../store/store";

import { useSelector, useDispatch } from "react-redux";

import useFiveToppingCheck from "./five-topping-check-function";

const SelectorIconContainer = styled("div", {
  name: "SelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(35px,35px)",
  height: "max(35px,35px)",
  backgroundColor: theme.palette.secondary.light,
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(2,max-content)",
  borderRadius: "50%",
  border: "2px solid black",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SelectorIcon = styled(CheckIcon, {
  name: "SelectorIcon",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(90%,90%)",
  display: "grid",
  placeItems: "center",
  color: theme.palette.secondary.dark,
}));

const AddItemMenuOptionButton = ({ type, active, objectSection }) => {
  const dispatch = useDispatch();

  const fiveToppingsReached = useFiveToppingCheck();
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const buildAPizzaObjectToggle = useSelector(
    (state) => state.buildAPizzaObjectToggle
  );
  type = type.type;

  const selectorIconContainerHandler = () => {
    let copyOfDataObject = JSON.parse(
      JSON.stringify(buildAPizzaUserSelectedObject)
    );

    // needed to create a new copy and not a reference of the object in storage
    if (
      objectSection !== "veggies" &&
      objectSection !== "meats" &&
      objectSection !== "other"
    ) {
      copyOfDataObject[objectSection][0] = type;
      dispatch(storeActions.setBuildAPizzaUserSelectedObject(copyOfDataObject));
      dispatch(
        storeActions.setBuildAPizzaObjectToggle(!buildAPizzaObjectToggle)
      );
      // the toggle is strictly used to cause a render since redux only preforms a shallow object check, nothing well have changed to trigger the render
    } else {
      if (active) {
        // if a user clicks on an already active button we need to clear it from the active selected list
        let tempArray = copyOfDataObject[objectSection].slice();
        tempArray.filter((item) => item !== type);
        copyOfDataObject[objectSection] = tempArray;
        dispatch(
          storeActions.setBuildAPizzaUserSelectedObject(copyOfDataObject)
        );
        dispatch(
          storeActions.setBuildAPizzaObjectToggle(!buildAPizzaObjectToggle)
        );
      } else {
        // if a user clicks on an inactive button we need to add it to the active selected list
        if (fiveToppingsReached) {
          // if the user has selected vive toopings already we send the warning popup
          dispatch(storeActions.setFiveToppingsWarning(true));
        } else {
          let tempArray = copyOfDataObject[objectSection].slice();
          tempArray.push(type);
          copyOfDataObject[objectSection] = tempArray;
          dispatch(
            storeActions.setBuildAPizzaUserSelectedObject(copyOfDataObject)
          );
          dispatch(
            storeActions.setBuildAPizzaObjectToggle(!buildAPizzaObjectToggle)
          );
        }
      }
    }
  };
  return (
    <SelectorIconContainer onClick={selectorIconContainerHandler}>
      {active && <SelectorIcon />}
    </SelectorIconContainer>
  );
};
export default AddItemMenuOptionButton;