import { styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { storeActions } from "../../../store/store";

import { useSelector, useDispatch } from "react-redux";
const SelectorIconContainer = styled("div", {
  name: "SelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(40px,40px)",
  height: "max(40px,40px)",
  backgroundColor: theme.palette.secondary.light,
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(2,max-content)",
  borderRadius: "50%",
  border: "2px solid black",
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
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );

  const selectorIconContainerHandler = () => {
    let copyOfDataObject = buildAPizzaUserSelectedObject.slice();
    // needed to create a new cop and not a reference of the object in storage
    if (
      objectSection !== "veggies" &&
      objectSection !== "meats" &&
      objectSection !== "other"
    ) {
      copyOfDataObject[objectSection] = type;
      dispatch(storeActions.setBuildAPizzaUserSelectedObject(copyOfDataObject));
    } else {
      if (active) {
        // if a user clicks on an alread active button we need to clear it from the active selected list
        let tempArray = copyOfDataObject[objectSection].slice();
        tempArray.filter((item) => item !== type);
        copyOfDataObject[objectSection] = tempArray;
        dispatch(
          storeActions.setBuildAPizzaUserSelectedObject(copyOfDataObject)
        );
      } else {
        // if a user clicks on an inactive button we need to add it to the active selected list
        let tempArray = copyOfDataObject[objectSection].slice();
        tempArray.push(type);
        copyOfDataObject[objectSection] = tempArray;
        dispatch(
          storeActions.setBuildAPizzaUserSelectedObject(copyOfDataObject)
        );
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
