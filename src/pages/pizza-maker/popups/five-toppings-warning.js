import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Grid, Typography } from "@mui/material";

import { PopupButton } from "./generic-popup-styled-components";
import { useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";

const FiveToppingsWarning = ({ fiveToppingsWarningPopup }) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(storeActions.setFiveToppingsWarning(false));
    dispatch(storeActions.setPopupActive(false));
  };

  return (
    <Dialog
      open={fiveToppingsWarningPopup}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "10px",
          border: "none",
          margin: "0",
          overflowX: "hidden",
          "@media(max-width:475px)": {
            width: "max(325px,325px)",
          },
        },
      }}
      sx={{ "& .MuiPaper-root": { backgroundColor: "secondary.dark" } }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "secondary.dark",
          color: "error.main",
          textAlign: "center",
          fontSize: "26px",
          overflowX: "hidden",
          "@media(max-width:475px)": { width: "max(325px,325px)" },
        }}
      >
        Warning !
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "secondary.dark",
          color: "secondary.light",
          margin: "0",
          overflowX: "hidden",
          "@media(max-width:475px)": { width: "max(325px,325px)" },
        }}
      >
        <Grid
          container
          columns={1}
          sx={{
            flexDirection: "column",
            placeItems: "center",
            margin: "0",
            overflowX: "hidden",
            "@media(max-width:475px)": { width: "max(325px,325px)" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              "@media(max-width:580px)": { fontSize: "18px" },
              "@media(max-width:475px)": { width: "max(325px,325px)" },
            }}
          >
            Five toppings limited reached!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "10px",
              "@media(max-width:580px)": { fontSize: "14px" },
              "@media(max-width:475px)": {
                fontSize: "12px",
                width: "max(325px,325px)",
              },
            }}
          >
            Please deselect a topping option to add another
          </Typography>
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          width: "max(325px,100%)",
          height: "max(max-content,max-content)",
          display: "grid",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "secondary.dark",
          padding: "0px 20px 20px 20px",
          "@media(max-width:475px)": { width: "max(325px,325px)" },
        }}
      >
        <PopupButton onClick={onCloseHandler} sx={{ borderRadius: "5px" }}>
          Close
        </PopupButton>
      </DialogActions>
    </Dialog>
  );
};
export default FiveToppingsWarning;
