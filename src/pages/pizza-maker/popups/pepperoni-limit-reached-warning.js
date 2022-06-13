import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { PopupButton } from "./generic-popup-styled-components";
import { useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";

const PepperoniLimitReachedWarning = ({ togglePopup }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(storeActions.setPepperoniLimitReachedWarning(false));
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={togglePopup}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "10px",
          border: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "secondary.dark",
          color: "error.main",
          textAlign: "center",
          fontSize: "26px",
        }}
      >
        Warning !
      </DialogTitle>
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
          <Typography variant="h6">Pepperoni Limit Reached</Typography>
          <Typography variant="p" sx={{ marginTop: "5px" }}>
            Please delete a pepperoni to add another
          </Typography>
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          width: "max(100%,100%)",
          height: "max(max-content,max-content)",
          display: "grid",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "secondary.dark",
          padding: "0px 20px 20px 20px",
        }}
      >
        <PopupButton onClick={onCloseHandler} sx={{ borderRadius: "5px" }}>
          Close
        </PopupButton>
      </DialogActions>
    </Dialog>
  );
};
export default PepperoniLimitReachedWarning;
