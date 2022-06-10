import {
  TopContainer,
  SpaceBetweenContainer,
  StyledTypography,
  PepperoniTypeSelectorContainer,
  PepperoniTypeButton,
  PepperoniButtonImage,
} from "./add-item-menu-pepperoni-section-styled-components";

import { useState } from "react";
import trianglePepperoni from "../../../../img/pizza-maker/toppings/pepperoni-triangle-slice.png";
import squarePepperoni from "../../../../img/pizza-maker/toppings/pepperoni-square-slice.png";
import circlePepperoni from "../../../../img/pizza-maker/toppings/pepperoni-slice.png";
const AddItemMenuPepperoniSection = ({ crust }) => {
  const crustObject = {
    Small: 10,
    Medium: 15,
    Large: 20,
    "X-large": 25,
    "XX-large": 30,
  };

  const [typeOfPepperoni, setTypeOfPepperoni] = useState(false);

  const trianglePepperoniHandler = () => {
    if (typeOfPepperoni === "Triangle") {
      setTypeOfPepperoni("");
    } else {
      setTypeOfPepperoni("Triangle");
    }
  };

  const squarePepperoniHandler = () => {
    if (typeOfPepperoni === "Square") {
      setTypeOfPepperoni("");
    } else {
      setTypeOfPepperoni("Square");
    }
  };

  const circlePepperoniHandler = () => {
    if (typeOfPepperoni === "Circle") {
      setTypeOfPepperoni("");
    } else {
      setTypeOfPepperoni("Circle");
    }
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
  //}

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
        <PepperoniTypeButton
          onClick={trianglePepperoniHandler}
          sx={{
            backgroundColor: `${
              typeOfPepperoni === "Triangle" && "secondary.light"
            }`,
            boxShadow: `${typeOfPepperoni === "Triangle" && "0 0 5px black"}`,
          }}
        >
          <PepperoniButtonImage
            src={trianglePepperoni}
            alt="triangle pepperoni"
          />
        </PepperoniTypeButton>
        <PepperoniTypeButton
          onClick={squarePepperoniHandler}
          sx={{
            backgroundColor: `${
              typeOfPepperoni === "Square" && "secondary.light"
            }`,
            boxShadow: `${typeOfPepperoni === "Square" && "0 0 5px black"}`,
          }}
        >
          <PepperoniButtonImage src={squarePepperoni} alt="square pepperoni" />
        </PepperoniTypeButton>
        <PepperoniTypeButton
          onClick={circlePepperoniHandler}
          sx={{
            backgroundColor: `${
              typeOfPepperoni === "Circle" && "secondary.light"
            }`,
            boxShadow: `${typeOfPepperoni === "circle" && "0 0 5px black"}`,
          }}
        >
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
