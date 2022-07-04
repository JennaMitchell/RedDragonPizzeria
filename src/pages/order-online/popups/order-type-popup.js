import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material";

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

const OrderTypePopup = ({ toggleOpen, onCloseFunction }) => {
  const onCloseHandler = () => {};

  const deliveryHandler = () => {
    onCloseFunction("Delivery");
  };
  const pickupHandler = () => {
    onCloseFunction("Pick Up");
  };

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
      sx={{ "& .MuiPaper-root": { backgroundColor: "secondary.dark" } }}
    >
      <DialogContent
        sx={{
          backgroundColor: "secondary.dark",
          color: "secondary.light",
        }}
      >
        <Grid
          container
          columns={1}
          sx={{ flexDirection: "column", placeItems: "center" }}
        >
          <Typography
            variant="h3"
            sx={{
              padding: "0px 60px 0px 60px",
              fontFamily: "Fredericka the Great ,cursive",
            }}
          >
            Delivery
          </Typography>
          <Typography
            variant="h4"
            sx={{
              padding: "10px 20px 0px 20px",
              fontFamily: "Fredericka the Great ,cursive",
            }}
          >
            -or-
          </Typography>

          <Typography
            variant="h3"
            sx={{
              padding: "10px 40px 10px 40px",
              fontFamily: "Fredericka the Great ,cursive",
            }}
          >
            Pickup
          </Typography>
        </Grid>
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
        <StyledButton onClick={deliveryHandler}>Delivery</StyledButton>
        <StyledButton onClick={pickupHandler}>Pick Up</StyledButton>
      </DialogActions>
    </Dialog>
  );
};
export default OrderTypePopup;
