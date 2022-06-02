import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
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
  const onCloseHandler = () => {
    onCloseFunction();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={newPizzaPopup}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" sx={{ textAlign: "center" }}>
        {"Pick a Pizza Type"}
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "secondary.light" }}>
        <Grid
          container
          columns={1}
          sx={{ flexDirection: "column", placeItems: "center" }}
        >
          <Typography variant="h4">Pepperoni Layout Maker </Typography>
          <Typography variant="h6">or</Typography>
          <Typography variant="h4">Custom Pizza</Typography>
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
        }}
      >
        <PopupButton onClick={onCloseHandler}>
          Pepperoni Layout Maker
        </PopupButton>
        <PopupButton onClick={onCloseHandler}>Custom Pizza</PopupButton>
      </DialogActions>
    </Dialog>
  );
};
export default NewPizzaPopup;
