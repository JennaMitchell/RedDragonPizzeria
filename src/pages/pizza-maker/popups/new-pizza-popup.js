import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { PopupButton } from "./generic-popup-styled-components";

const NewPizzaPopup = ({
  newPizzaPopup,
  onCloseFunction,
  retrievePizzaType,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const onClosePepperoniHandler = () => {
    retrievePizzaType("Pepperoni Marker");
    onCloseFunction();
  };
  const onCloseBuildHandler = () => {
    retrievePizzaType("Build a Pizza");
    onCloseFunction();
  };
  const onCloseHandler = () => {
    onCloseFunction();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={newPizzaPopup}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "10px",
          border: "none",
        },
      }}
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
          <Typography variant="h4">Pepperoni Layout Maker </Typography>
          <Typography variant="h6">or</Typography>
          <Typography variant="h4">Build a Pizza</Typography>
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
        <PopupButton
          onClick={onClosePepperoniHandler}
          sx={{ borderRadius: "5px" }}
        >
          Pepperoni Layout Maker
        </PopupButton>
        <PopupButton onClick={onCloseBuildHandler} sx={{ borderRadius: "5px" }}>
          Build a Pizza
        </PopupButton>
      </DialogActions>
    </Dialog>
  );
};
export default NewPizzaPopup;
