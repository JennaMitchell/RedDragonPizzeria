import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Grid, Typography } from "@mui/material";

import { PopupButton, StyledCheckBox } from "./generic-popup-styled-components";
import { useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";

import { useState } from "react";

const DeletePepperoniWarning = ({
  deletePepperoniWarning,
  userInputRetriever,
}) => {
  const dispatch = useDispatch();
  const [deleteByDefault, setDeleteByDefault] = useState(false);

  const onCloseHandler = () => {
    userInputRetriever("Undo");
    dispatch(storeActions.setDeletePepperoniWarning(false));
    dispatch(storeActions.setPopupActive(false));
  };
  const returnButtonHandler = () => {
    userInputRetriever("Undo");
    dispatch(storeActions.setDeletePepperoniWarning(false));
    dispatch(storeActions.setPopupActive(false));
    if (deleteByDefault) {
      dispatch(storeActions.setDeletePepperoniByDefualt(true));
    }
  };
  const deleteButtonHandler = () => {
    userInputRetriever("Delete");
    dispatch(storeActions.setDeletePepperoniWarning(false));
    dispatch(storeActions.setPopupActive(false));
    if (deleteByDefault) {
      dispatch(storeActions.setDeletePepperoniByDefualt(true));
    }
  };
  const deleteByDefaultCheckboxHandler = () => {
    setDeleteByDefault(!deleteByDefault);
  };

  return (
    <Dialog
      open={deletePepperoniWarning}
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
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid
          container
          columns={1}
          sx={{
            flexDirection: "column",
            placeItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "10px",
              "@media(max-width:475px)": {
                fontSize: "20px",
              },
            }}
          >
            Pepperoni Off Pizza
          </Typography>
          <Typography
            variant="p"
            sx={{
              marginBottom: "10px",
              "@media(max-width:475px)": {
                fontSize: "14px",
              },
            }}
          >
            Either delete it or undo the move
          </Typography>
        </Grid>
        <Grid
          columns={2}
          sx={{
            width: "max(80%,80%)",
            height: "max(max-content,max-content)",
            display: "grid",
            gridTemplateColumns: "max-content max-content",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "14px",
              "@media(max-width:475px)": {
                fontSize: "10px",
              },
            }}
          >
            Delete by default and don't ask me again:
          </Typography>
          <StyledCheckBox
            label=""
            size="small"
            onClick={deleteByDefaultCheckboxHandler}
            sx={{ marginLeft: "10px" }}
          />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          width: "max(100%,100%)",
          height: "max(max-content,max-content)",
          display: "grid",
          gridTemplateColumns: "max-content max-content",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "secondary.dark",
          padding: "0px 20px 20px 20px",
        }}
      >
        <PopupButton onClick={deleteButtonHandler} sx={{ borderRadius: "5px" }}>
          Delete
        </PopupButton>
        <PopupButton onClick={returnButtonHandler} sx={{ borderRadius: "5px" }}>
          Undo
        </PopupButton>
      </DialogActions>
    </Dialog>
  );
};
export default DeletePepperoniWarning;
