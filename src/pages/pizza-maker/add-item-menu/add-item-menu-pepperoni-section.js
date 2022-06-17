import {
  TopContainer,
  SpaceBetweenContainer,
  StyledTypography,
  PepperoniTypeSelectorContainer,
  PepperoniTypeButton,
  PepperoniButtonImage,
} from "./add-item-menu-pepperoni-section-styled-components";

import trianglePepperoni from "../../../img/pizza-maker/toppings/pepperoni-triangle-slice.png";
import squarePepperoni from "../../../img/pizza-maker/toppings/pepperoni-square-slice.png";
import circlePepperoni from "../../../img/pizza-maker/toppings/pepperoni-slice.png";
import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../../../store/store";

const AddItemMenuPepperoniSection = ({ crust }) => {
  const pepperoniPerCrustObject = useSelector(
    (state) => state.pepperoniPerCrustObject
  );

  const dispatch = useDispatch();
  const pepperoniLayoutDatabase = useSelector(
    (state) => state.pepperoniLayoutDatabase
  );
  const pepperoniPizzaSizePixelsDatabase = useSelector(
    (state) => state.pepperoniPizzaSizePixelsDatabase
  );
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const copyOfPepperoniLayoutDatabase = JSON.parse(
    JSON.stringify(pepperoniLayoutDatabase)
  );
  let additionalCostPepperoniLimit = `${pepperoniPerCrustObject[`${crust}`]}`;
  let maxNumOfPepperoni = +additionalCostPepperoniLimit + 10;

  const addPepperoniToPanHandler = (shape) => {
    // created a copy so we can edited the database.

    // Step 1. Need to check the copy to see if any entries were deleted.
    let arrayOfIdsInUse = [];
    //grabbing the id's in use
    for (let entry of copyOfPepperoniLayoutDatabase) {
      arrayOfIdsInUse.push(+entry.pepperoniId);
    }

    // Step 2. Checking For Max Number of Pepperoni Reached
    if (copyOfPepperoniLayoutDatabase.length === maxNumOfPepperoni) {
      dispatch(storeActions.setPepperoniLimitReachedWarning(true));
      return;
    }

    // Step 3. Checking for deletion

    if (arrayOfIdsInUse.length !== 0) {
      if (
        +arrayOfIdsInUse[arrayOfIdsInUse.length - 1] !==
        arrayOfIdsInUse.length - 1
      ) {
        // deletion occured
        // find the first deleted index
        for (let [index, entry] of copyOfPepperoniLayoutDatabase.entries()) {
          index = index - 1;
          // index starts at 1 and not zero so we have to subtract one
          if (+entry.pepperoniId > +index) {
            //create a copy of the data with the higher value
            copyOfPepperoniLayoutDatabase[+entry.pepperoniId] = entry;

            copyOfPepperoniLayoutDatabase[+index + 1] = {
              pepperoniId: `${+index + 1}`,
              coordinates: {
                x: `${copyOfPepperoniLayoutDatabase.length * 10 + 50}px`,
                y: `${
                  pepperoniPizzaSizePixelsDatabase[
                    buildAPizzaUserSelectedObject.size
                  ] / 2
                }px`,
              },
              shape: `${shape}`,
            };
            break;
          }
        }
      } else {
        copyOfPepperoniLayoutDatabase.push({
          pepperoniId: `${copyOfPepperoniLayoutDatabase.length}`,
          coordinates: {
            x: `${copyOfPepperoniLayoutDatabase.length * 10 + 50}px`,
            y: `${
              pepperoniPizzaSizePixelsDatabase[
                buildAPizzaUserSelectedObject.size
              ] / 2
            }px`,
          },
          shape: `${shape}`,
        });
      }
    } else {
      copyOfPepperoniLayoutDatabase.push({
        pepperoniId: `${copyOfPepperoniLayoutDatabase.length}`,
        coordinates: {
          x: `${copyOfPepperoniLayoutDatabase.length * 10 + 50}px`,
          y: `${
            pepperoniPizzaSizePixelsDatabase[
              buildAPizzaUserSelectedObject.size
            ] / 2
          }px`,
        },
        shape: `${shape}`,
      });
    }

    dispatch(
      storeActions.setPepperoniLayoutDatabase(copyOfPepperoniLayoutDatabase)
    );
  };

  const trianglePepperoniHandler = () => {
    addPepperoniToPanHandler("triangle");
  };

  const squarePepperoniHandler = () => {
    addPepperoniToPanHandler("square");
  };

  const circlePepperoniHandler = () => {
    addPepperoniToPanHandler("circle");
  };

  const dropDownValues = [];
  for (let i = 0; i < 30; i++) {
    dropDownValues.push(i + 1);
  }

  /// Example Entry data
  // pepperoniId : {
  // coordinates: { x: "" y: ""}
  // shape : "circle"

  /// Handling the issue where the user starts at a larger pizza size then goes back down to a lower size, causing them to go over the peperoni limit
  // on the lower size

  return (
    <TopContainer>
      <SpaceBetweenContainer>
        <StyledTypography variant="h6">
          Current Number Of Pepperoni :
        </StyledTypography>
        <StyledTypography variant="h6">{`${copyOfPepperoniLayoutDatabase.length}/${additionalCostPepperoniLimit}`}</StyledTypography>
      </SpaceBetweenContainer>
      <StyledTypography variant="p" sx={{ fontSize: "12px", marginTop: "5px" }}>
        {`(Warning going over ${additionalCostPepperoniLimit} will incure a $0.20 charge per pepperoni. Max of ${maxNumOfPepperoni}   )`}
      </StyledTypography>

      <PepperoniTypeSelectorContainer>
        <PepperoniTypeButton onClick={trianglePepperoniHandler} sx={{}}>
          <PepperoniButtonImage
            src={trianglePepperoni}
            alt="triangle pepperoni"
          />
        </PepperoniTypeButton>
        <PepperoniTypeButton onClick={squarePepperoniHandler} sx={{}}>
          <PepperoniButtonImage src={squarePepperoni} alt="square pepperoni" />
        </PepperoniTypeButton>
        <PepperoniTypeButton onClick={circlePepperoniHandler} sx={{}}>
          <PepperoniButtonImage src={circlePepperoni} alt="circle pepperoni" />
        </PepperoniTypeButton>
      </PepperoniTypeSelectorContainer>

      <StyledTypography variant="p" sx={{ fontSize: "12px", marginTop: "5px" }}>
        {`(Once added, drag them around to fit your own design)`}
      </StyledTypography>
    </TopContainer>
  );
};
export default AddItemMenuPepperoniSection;
