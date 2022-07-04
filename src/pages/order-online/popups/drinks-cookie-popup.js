import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";

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
  "@media(max-width:360px)": {
    width: "max(100px,100px)",
  },
  fontSize: "16px",
}));

const DrinksNCookiePopup = ({ toggleOpen }) => {
  const dispatch = useDispatch();

  const clickedData = useSelector((state) => state.onlinePopupActiveData);

  /// Handling Order Button Clicked
  const cartObject = useSelector((state) => state.cartObject);
  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));
  const onCloseHandler = () => {
    dispatch(storeActions.setOnlineOrderPopupType(""));
    dispatch(storeActions.setOnlinePopupActiveData([]));
  };
  const orderHandler = () => {
    const finalPrice = clickedData.price.slice(1);

    deepCopyOfCartObject.push({
      title: `${clickedData.title}`,
      totalPrice: `${finalPrice}`,
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

  return (
    <Dialog
      open={toggleOpen}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "20px",
          border: "none",
          width: "max(400px,400px)",
        },
      }}
      sx={{ "& .MuiPaper-root": { backgroundColor: "secondary.dark" } }}
    >
      <DialogContent
        sx={{
          backgroundColor: "secondary.dark",
          color: "secondary.light",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            "@media(max-width:380px)": {
              fontSize: "32px",
            },
          }}
        >
          {clickedData.title}
        </Typography>
        <Typography variant="p" sx={{ marginTop: "10px", textAlign: "center" }}>
          {clickedData.description}
        </Typography>

        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginTop: "10px" }}
        >{`Price :  ${prices}`}</Typography>
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
        <StyledButton onClick={orderHandler}>Order</StyledButton>
        <StyledButton onClick={cancelHandler}>Cancel</StyledButton>
      </DialogActions>
    </Dialog>
  );
};
export default DrinksNCookiePopup;
