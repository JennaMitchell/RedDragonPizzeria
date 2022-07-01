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
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const pepperoniPizzaMobileSizePixelsDatabase = useSelector(
    (state) => state.pepperoniPizzaMobileSizePixelsDatabase
  );
  const smallKitchenTableActive = useMediaQuery("(max-width:460px)");
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
      dispatch(storeActions.setPopupActive(true));
      return;
    }

    // Step 3. Checking for deletion
    let yOffset = 0;
    let xOffset = 0;
    if (smallKitchenTableActive) {
      xOffset = copyOfPepperoniLayoutDatabase.length * 5 + 20;
      yOffset =
        pepperoniPizzaMobileSizePixelsDatabase[
          buildAPizzaUserSelectedObject.size
        ] / 2;
    } else {
      xOffset = copyOfPepperoniLayoutDatabase.length * 10 + 50;
      yOffset =
        pepperoniPizzaSizePixelsDatabase[buildAPizzaUserSelectedObject.size] /
        2;
    }
    if (arrayOfIdsInUse.length !== 0) {
      if (
        +arrayOfIdsInUse[arrayOfIdsInUse.length - 1] !==
        arrayOfIdsInUse.length - 1
      ) {
        // deletion occured
        // find the first deleted index
        for (let [index, entry] of copyOfPepperoniLayoutDatabase.entries()) {
          if (+entry.pepperoniId > +index) {
            //create a copy of the data with the higher value

            copyOfPepperoniLayoutDatabase.splice(index, 0, {
              pepperoniId: `${+index}`,
              coordinates: {
                x: `${xOffset}px`,
                y: `${yOffset}px`,
              },
              shape: `${shape}`,
            });

            break;
          }
        }
      } else {
        copyOfPepperoniLayoutDatabase.push({
          pepperoniId: `${copyOfPepperoniLayoutDatabase.length}`,
          coordinates: {
            x: `${xOffset}px`,
            y: `${yOffset}px`,
          },
          shape: `${shape}`,
        });
      }
    } else {
      copyOfPepperoniLayoutDatabase.push({
        pepperoniId: `${copyOfPepperoniLayoutDatabase.length}`,
        coordinates: {
          x: `${xOffset}px`,
          y: `${yOffset}px`,
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
        <StyledTypography
          variant="h6"
          sx={{
            "@media(max-width:590px)": {
              fontSize: "16px",
            },
            "@media(max-width:380px)": {
              fontSize: "12px",
            },
          }}
        >
          Current Number Of Pepperoni: &nbsp;
        </StyledTypography>
        <StyledTypography
          variant="h6"
          sx={{
            "@media(max-width:545px)": {
              fontSize: "16px",
            },
            "@media(max-width:380px)": {
              fontSize: "12px",
            },
          }}
        >{`${copyOfPepperoniLayoutDatabase.length}/${additionalCostPepperoniLimit}`}</StyledTypography>
      </SpaceBetweenContainer>
      <StyledTypography
        variant="p"
        sx={{
          fontSize: "12px",
          marginTop: "5px",
          "@media(max-width:545px)": {
            fontSize: "10px",
          },
          "@media(max-width:380px)": {
            fontSize: "8px",
          },
        }}
      >
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
