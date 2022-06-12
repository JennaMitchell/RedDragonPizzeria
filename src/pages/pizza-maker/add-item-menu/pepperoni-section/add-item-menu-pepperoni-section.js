import {
  TopContainer,
  SpaceBetweenContainer,
  StyledTypography,
  PepperoniTypeSelectorContainer,
  PepperoniTypeButton,
  PepperoniButtonImage,
} from "./add-item-menu-pepperoni-section-styled-components";

import trianglePepperoni from "../../../../img/pizza-maker/toppings/pepperoni-triangle-slice.png";
import squarePepperoni from "../../../../img/pizza-maker/toppings/pepperoni-square-slice.png";
import circlePepperoni from "../../../../img/pizza-maker/toppings/pepperoni-slice.png";
import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../../../../store/store";

const AddItemMenuPepperoniSection = ({ crust }) => {
  const crustObject = {
    Small: 10,
    Medium: 15,
    Large: 20,
    "X-large": 25,
    "XX-large": 30,
  };

  const dispatch = useDispatch();
  const pepperoniLayoutDatabase = useSelector(
    (state) => state.pepperoniLayoutDatabase
  );

  const addPepperoniToPanHandler = (shape) => {
    const tempArray = JSON.parse(JSON.stringify(pepperoniLayoutDatabase));
    tempArray.push({
      pepperoniId: `${tempArray.length}`,
      coordinates: {
        x: `${tempArray.length * 10 + 70}px `,
        y: `${tempArray.length * 10 + 70}px`,
      },
      shape: `${shape}`,
    });

    dispatch(storeActions.setPepperoniLayoutDatabase(tempArray));
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

  let maxNumberOfPepperoni = `${crustObject[`${crust}`]}`;

  /// Example Entry data
  // pepperoniId : {
  // coordinates: { x: "" y: ""}
  // shape : "circle"

  return (
    <TopContainer>
      <SpaceBetweenContainer>
        <StyledTypography variant="h6">
          Current Number Of Pepperoni :
        </StyledTypography>
        <StyledTypography variant="h6">{`0/${maxNumberOfPepperoni}`}</StyledTypography>
      </SpaceBetweenContainer>
      <StyledTypography variant="p" sx={{ fontSize: "12px", marginTop: "5px" }}>
        {`(Warning going over ${maxNumberOfPepperoni} will incure a $0.20 charge per pepperoni. Max of ${
          +maxNumberOfPepperoni + 10
        }   )`}
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
