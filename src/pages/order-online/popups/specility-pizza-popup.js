import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material";
import pizzaIcon from "../../../img/online-order-menu/pizza-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";
import { useState } from "react";

const SizeSelectionContainer = styled("div", {
  name: "SizeSelctionContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "20px",
  marginTop: "20px",
  marginBottom: "20px",
}));

const SizeButtonContainer = styled("div", {
  name: "SizeButton",
  slot: "Wrapper",
})(() => ({
  backgroundColor: "inherit",
  width: "max(70px,70px)",
  height: "max(80px,80px)",
  display: "grid",
  gridTemplateRows: "60px max-content",
  alignContent: "center",
  justifyContent: "center",
}));

const SizeButton = styled("div", {
  name: "SizeButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: "max(60px,60px)",
  height: "max(60px,60px)",
  display: "grid",
  alignContent: "center",
  justifyContent: "center",
  borderRadius: "15px",
  border: "2px solid black",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const SizeImage = styled("img", {
  name: "SizeImage",
  slot: "Wrapper",
})(() => ({
  padding: "5px",
}));

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.main,
  width: "max(125px,125px)",
  height: "max(max-content,max-content)",
  padding: "10px 20px 10px 20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  fontSize: "16px",
}));
const DisabledStyledButton = styled(Button, {
  name: "DisabledStyledButton",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.dark,
  backgroundColor: theme.palette.secondary.main,
  width: "max(125px,125px)",
  height: "max(max-content,max-content)",
  padding: "10px 20px 10px 20px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  fontSize: "16px",
}));

const SpecilityPizzaPopup = ({ toggleOpen }) => {
  const dispatch = useDispatch();

  const clickedData = useSelector((state) => state.onlinePopupActiveData);
  const cartObject = useSelector((state) => state.cartObject);
  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));
  const [selectedSize, setSelectedSize] = useState("");

  /// Handling Order Button Clicked

  const onCloseHandler = () => {
    dispatch(storeActions.setOnlineOrderPopupType(""));
    dispatch(storeActions.setOnlinePopupActiveData([]));
  };
  const orderHandler = () => {
    // Step One. Extracting the price of the clicked data based on the selected size
    // coverting the full size name to its abrievation to extracted
    let abbreviatedSize = "";
    switch (selectedSize) {
      case "Small":
        abbreviatedSize = "sm.";
        break;
      case "Medium":
        abbreviatedSize = "md.";
        break;
      case "Large":
        abbreviatedSize = "lg.";
        break;
      case "XLarge":
        abbreviatedSize = "xl.";
        break;
      case "XXlarge":
        abbreviatedSize = "xxl.";
        break;
      default:
        break;
    }
    // extracting the price

    const indexOfAbbreviatedSize = clickedData.price.indexOf(abbreviatedSize);
    let slicedPrice = clickedData.price.slice(indexOfAbbreviatedSize);
    const indexOfSeperatingComma = slicedPrice.indexOf(",");
    let extractedPrice = "";

    if (abbreviatedSize !== "xxl.") {
      extractedPrice = slicedPrice.slice(3, indexOfSeperatingComma);
      extractedPrice = extractedPrice.trim();
      // removing the $
      extractedPrice = extractedPrice.slice(1);
    } else {
      extractedPrice = slicedPrice.slice(4, indexOfSeperatingComma);
      // 4 since there is xxl. abbreviation
      extractedPrice = extractedPrice.trim();
      // removing the $
      extractedPrice = extractedPrice.slice(1);
    }

    deepCopyOfCartObject.push({
      title: `${selectedSize} ${clickedData.title}`,
      totalPrice: extractedPrice,
      userSelectedData: clickedData,
    });

    dispatch(storeActions.setCartObject(deepCopyOfCartObject));
    dispatch(storeActions.setAddToCartButtonClicked(false));
    onCloseHandler();
  };
  const cancelHandler = () => {
    onCloseHandler();
  };

  // pulling out the size prices from the array
  let prices = clickedData.price;

  //example.  sm. $14.99, md. $15.99, lg. $16.99, xl. $18.99, xxl. $20.99

  const priceExtractor = (array) => {
    array = array.trim();
    const indexOfFirstComma = array.indexOf(",");

    const indexOfFirstDollarSign = array.indexOf("$");
    let extractedPrice = "";
    if (indexOfFirstComma === -1) {
      extractedPrice = array.slice(indexOfFirstDollarSign + 1);
    } else {
      extractedPrice = array.slice(
        indexOfFirstDollarSign + 1,
        indexOfFirstComma
      );
      array = array.slice(indexOfFirstComma + 1);
    }
    return [extractedPrice, array];
  };

  // Extracting the small Price
  let priceObject = {};
  let [price, priceArray] = priceExtractor(prices);
  priceObject["Small"] = price;
  [price, priceArray] = priceExtractor(priceArray);
  priceObject["Medium"] = price;
  [price, priceArray] = priceExtractor(priceArray);
  priceObject["Large"] = price;
  [price, priceArray] = priceExtractor(priceArray);
  priceObject["XLarge"] = price;
  [price, priceArray] = priceExtractor(priceArray);
  priceObject["XXLarge"] = price;

  const smallSizeButtonHandler = () => {
    if (selectedSize === "Small") {
      setSelectedSize("");
    } else {
      setSelectedSize("Small");
    }
  };
  const mediumSizeButtonHandler = () => {
    if (selectedSize === "Medium") {
      setSelectedSize("");
    } else {
      setSelectedSize("Medium");
    }
  };
  const largeSizeButtonHandler = () => {
    if (selectedSize === "Large") {
      setSelectedSize("");
    } else {
      setSelectedSize("Large");
    }
  };
  const xLargeSizeButtonHandler = () => {
    if (selectedSize === "XLarge") {
      setSelectedSize("");
    } else {
      setSelectedSize("XLarge");
    }
  };
  const xxLargeSizeButtonHandler = () => {
    if (selectedSize === "XXLarge") {
      setSelectedSize("");
    } else {
      setSelectedSize("XXLarge");
    }
  };

  let displayPrice = "0.00";
  switch (selectedSize) {
    case "Small":
      displayPrice = priceObject["Small"];
      break;
    case "Medium":
      displayPrice = priceObject["Medium"];
      break;
    case "Large":
      displayPrice = priceObject["Large"];
      break;
    case "XLarge":
      displayPrice = priceObject["XLarge"];
      break;
    case "XXLarge":
      displayPrice = priceObject["XXLarge"];
      break;
    default:
      break;
  }

  return (
    <Dialog
      open={toggleOpen}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "20px",
          border: "none",
          width: "max(500px,500px)",
        },
      }}
    >
      <DialogContent
        sx={{
          backgroundColor: "secondary.dark",
          color: "secondary.light",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {clickedData.title}
        </Typography>
        <Typography variant="p" sx={{ marginTop: "5px", textAlign: "center" }}>
          {clickedData.description}
        </Typography>
        <SizeSelectionContainer>
          <SizeButtonContainer onClick={smallSizeButtonHandler}>
            <SizeButton
              sx={{
                backgroundColor: `${
                  selectedSize === "Small" && `primary.light`
                }`,
              }}
            >
              <SizeImage
                src={pizzaIcon}
                sx={{ width: "max(40px,40px)", height: "max(40px,40px)" }}
              />
            </SizeButton>
            <Typography
              variant="p"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              Small
            </Typography>
          </SizeButtonContainer>
          <SizeButtonContainer>
            <SizeButton
              onClick={mediumSizeButtonHandler}
              sx={{
                backgroundColor: `${
                  selectedSize === "Medium" && `primary.light`
                }`,
              }}
            >
              <SizeImage
                src={pizzaIcon}
                sx={{
                  width: "max(42.5px,42.5px)",
                  height: "max(42.5px,42.5px)",
                }}
              />
            </SizeButton>
            <Typography
              variant="p"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              Medium
            </Typography>
          </SizeButtonContainer>
          <SizeButtonContainer>
            <SizeButton
              onClick={largeSizeButtonHandler}
              sx={{
                backgroundColor: `${
                  selectedSize === "Large" && `primary.light`
                }`,
              }}
            >
              <SizeImage
                src={pizzaIcon}
                sx={{ width: "max(45px,45px)", height: "max(45px,45px)" }}
              />
            </SizeButton>
            <Typography
              variant="p"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              Large
            </Typography>
          </SizeButtonContainer>
          <SizeButtonContainer>
            <SizeButton
              onClick={xLargeSizeButtonHandler}
              sx={{
                backgroundColor: `${
                  selectedSize === "XLarge" && `primary.light`
                }`,
              }}
            >
              <SizeImage
                src={pizzaIcon}
                sx={{
                  width: "max(47.5px,47.5px)",
                  height: "max(47.5px,47.5px)",
                  marginLeft: "2.5px",
                }}
              />
            </SizeButton>
            <Typography
              variant="p"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              X-Large
            </Typography>
          </SizeButtonContainer>
          <SizeButtonContainer>
            <SizeButton
              onClick={xxLargeSizeButtonHandler}
              sx={{
                backgroundColor: `${
                  selectedSize === "XXLarge" && `primary.light`
                }`,
              }}
            >
              <SizeImage
                src={pizzaIcon}
                sx={{
                  width: "max(50px,50px)",
                  height: "max(50px,50px)",
                  marginLeft: "5px",
                }}
              />
            </SizeButton>
            <Typography
              variant="p"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              XX-Large
            </Typography>
          </SizeButtonContainer>
        </SizeSelectionContainer>
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}
        >{`Price :   $${displayPrice}`}</Typography>
      </DialogContent>

      <DialogActions
        sx={{
          width: "max(100%,100%)",
          height: "max(max-content,max-content)",
          display: "grid",
          gridTemplateColumns: "repeat(2,max-content)",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "secondary.dark",
          padding: "0px 20px 20px 20px",
        }}
      >
        {selectedSize !== "" && (
          <StyledButton onClick={orderHandler}>Order</StyledButton>
        )}
        {selectedSize === "" && (
          <DisabledStyledButton>Order</DisabledStyledButton>
        )}
        <StyledButton onClick={cancelHandler}>Cancel</StyledButton>
      </DialogActions>
    </Dialog>
  );
};
export default SpecilityPizzaPopup;
