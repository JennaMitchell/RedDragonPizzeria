import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material";
import breadIcon from "../../../img/online-order-menu/bread-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";
import { useState } from "react";

const SizeSelectionContainer = styled("div", {
  name: "SizeSelctionContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(60%,60%)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  placeItems: "center",
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

const SaladsPopup = ({ toggleOpen }) => {
  const dispatch = useDispatch();

  const clickedData = useSelector((state) => state.onlinePopupActiveData);
  const [selectedSize, setSelectedSize] = useState("");

  // Handeling Order Button Clicks
  const cartObject = useSelector((state) => state.cartObject);
  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));

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
      case "Large":
        abbreviatedSize = "lg.";
        break;
      default:
        break;
    }
    // extracting the price

    const indexOfAbbreviatedSize = clickedData.price.indexOf(abbreviatedSize);
    let slicedPrice = clickedData.price.slice(indexOfAbbreviatedSize);

    /// Salad doesn't have commas so we have to get the next abbreviatedSize
    let nextSize = "";
    switch (abbreviatedSize) {
      case "sm.":
        nextSize = "lg.";
        break;
      case "Large":
        nextSize = "";
        break;
      default:
        break;
    }

    let indexOfNextSize = "";
    if (nextSize !== "") {
      indexOfNextSize = slicedPrice.indexOf(nextSize);
    } else {
      indexOfNextSize = slicedPrice.length;
    }
    let extractedPrice = slicedPrice.slice(3, indexOfNextSize);
    extractedPrice = extractedPrice.trim();
    // removing the $
    extractedPrice = extractedPrice.slice(1);

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

  const priceExtractor = (array, size, nextSize) => {
    array = array.trim();
    let indexOfTargetSize = array.indexOf(`${size}`);
    let extractedPrice = "";
    // adding three to get the end of it
    indexOfTargetSize = indexOfTargetSize + 3;

    if (nextSize === "") {
      extractedPrice = array.slice(indexOfTargetSize);
      array = array.slice(indexOfTargetSize);
    } else {
      const indexOfNextSize = array.indexOf(`${nextSize}`);

      extractedPrice = array.slice(indexOfTargetSize, indexOfNextSize);
      array = array.slice(indexOfTargetSize);
    }

    return [extractedPrice, array];
  };

  // Extracting the small Price
  let priceObject = {};
  let [price, priceArray] = priceExtractor(prices, "sm.", "lg.");
  priceObject["Small"] = price;
  [price, priceArray] = priceExtractor(priceArray, "lg.", "");
  priceObject["Large"] = price;

  const smallSizeButtonHandler = () => {
    if (selectedSize === "Small") {
      setSelectedSize("");
    } else {
      setSelectedSize("Small");
    }
  };

  const largeSizeButtonHandler = () => {
    if (selectedSize === "Large") {
      setSelectedSize("");
    } else {
      setSelectedSize("Large");
    }
  };

  let displayPrice = "0.00";
  switch (selectedSize) {
    case "Small":
      displayPrice = priceObject["Small"];
      break;
    case "Large":
      displayPrice = priceObject["Large"];
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
        },
      }}
    >
      <DialogContent
        sx={{
          backgroundColor: "secondary.dark",
          color: "secondary.light",
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {clickedData.title}
        </Typography>
        <Typography
          variant="p"
          sx={{ marginTop: "5px", textAlign: "center", width: "max(80%,80%)" }}
        >
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
                src={breadIcon}
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
              onClick={largeSizeButtonHandler}
              sx={{
                backgroundColor: `${
                  selectedSize === "Large" && `primary.light`
                }`,
              }}
            >
              <SizeImage
                src={breadIcon}
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
        </SizeSelectionContainer>
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}
        >{`Price :   ${displayPrice}`}</Typography>
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
export default SaladsPopup;
