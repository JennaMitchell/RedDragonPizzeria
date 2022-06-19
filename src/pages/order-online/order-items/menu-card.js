import {
  FrontFacingCard,
  OrderButton,
} from "./order-items-generic-styled-components";
import { StyledTypography } from "../order-online-homepage-styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";

const MenuCard = ({ data, section }) => {
  const dispatch = useDispatch();
  // FRONT SIDE

  // Title
  const title = data.title.trim();

  const description = data.description;
  let priceRange = "";

  // PriceRange

  if (section === "pizza") {
    // Step One: Find index of the sm.
    const trimmedPizzaPrice = data.price.trim();
    let indexOfSmall = trimmedPizzaPrice.indexOf("sm.");
    // this index starts at the s
    // to get around this by adding three to the indexOf Small
    indexOfSmall = indexOfSmall + 3;
    const indexOfFirstComma = trimmedPizzaPrice.indexOf(",");
    const lowEndPrice = trimmedPizzaPrice.slice(
      indexOfSmall,
      indexOfFirstComma
    );

    let indexOfXxLarge = trimmedPizzaPrice.indexOf("xxl.");
    // this index starts at the first x
    // to get around this by adding 4 to the index
    indexOfXxLarge = indexOfXxLarge + 4;
    const highEndPrice = trimmedPizzaPrice.slice(indexOfXxLarge);

    // Lastly we combined the array into a useable string range
    priceRange = `${lowEndPrice} - ${highEndPrice}`;
  }

  if (section === "drinks" || section === "sides") {
    priceRange = data.price.trim();
  }
  if (section === "salads") {
    // Step One: Find index of the sm.
    const trimmedPizzaPrice = data.price.trim();
    let indexOfSmall = trimmedPizzaPrice.indexOf("sm.");
    // this index starts at the s
    // to get around this by adding three to the indexOf Small
    indexOfSmall = indexOfSmall + 3;
    const indexOfFirstD = trimmedPizzaPrice.indexOf("d");
    const lowEndPrice = trimmedPizzaPrice.slice(
      indexOfSmall,
      indexOfFirstD - 1
    );
    let indexOfXxLarge = trimmedPizzaPrice.indexOf("lg.");
    // this index starts at the first x
    // to get around this by adding 4 to the index
    indexOfXxLarge = indexOfXxLarge + 4;
    const highEndPrice = trimmedPizzaPrice.slice(indexOfXxLarge);

    // Lastly we combined the array into a useable string range
    priceRange = `${lowEndPrice} - ${highEndPrice}`;
  }

  // Hover Prompt to Show Description
  const [onHoverActive, setOnHoverActive] = useState(false);

  const mouseEnterHandler = () => {
    setOnHoverActive(true);
  };
  const mouseLeaveHandler = () => {
    setOnHoverActive(false);
  };

  // BackSide
  const [backSideActive, setBackSideActive] = useState(false);
  const backSideHandler = () => {
    setBackSideActive(!backSideActive);
  };

  // Onclick Button To Order
  const orderButtonHandler = () => {
    if (title === "Pizza Cookie") {
      dispatch(storeActions.setOnlineOrderPopupType("cookie"));
      dispatch(storeActions.setOnlinePopupActiveData(data));
    } else {
      console.log(section);
      dispatch(storeActions.setOnlineOrderPopupType(section));
      dispatch(storeActions.setOnlinePopupActiveData(data));
    }
  };

  return (
    <FrontFacingCard
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      sx={{ boxShadow: `${onHoverActive && `0 0 20px white`}` }}
    >
      {!backSideActive && (
        <>
          <StyledTypography
            onClick={backSideHandler}
            sx={{
              textAlign: "center",
              marginTop: "10px",
              width: "max(86.5%,86.5%)",
              fontSize: "26px",
              lineHeight: "34px",
            }}
          >
            {title}
          </StyledTypography>
          <StyledTypography
            varaint="p"
            onClick={backSideHandler}
            sx={{
              textAlign: "center",
              width: "max(90%,90%)",
            }}
          >
            {priceRange}
          </StyledTypography>
          <OrderButton onClick={orderButtonHandler}>Order</OrderButton>
        </>
      )}
      {backSideActive && (
        <>
          <StyledTypography
            onClick={backSideHandler}
            sx={{
              textAlign: "center",
              marginTop: "10px",

              fontSize: "28px",
            }}
          >
            {title}
          </StyledTypography>
          <StyledTypography
            onClick={backSideHandler}
            variant="p"
            sx={{
              textAlign: "center",
              fontSize: "16px",
              paddingLeft: "10px",
              paddingRight: "10px",

              width: "max(90%,90%)",
            }}
          >
            {description}
          </StyledTypography>
          <OrderButton
            sx={{
              marginTop: "10px",
            }}
            onClick={orderButtonHandler}
          >
            Order
          </OrderButton>
        </>
      )}
    </FrontFacingCard>
  );
};
export default MenuCard;
