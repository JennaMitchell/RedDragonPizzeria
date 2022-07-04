import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Grid, Typography } from "@mui/material";

import { PopupButton } from "./generic-popup-styled-components";
import { useDispatch } from "react-redux";
import { storeActions } from "../../../store/store";

const NewPizzaPopup = ({ newPizzaPopup }) => {
  const defaultUserData = {
    size: ["Medium"],
    sauce: [],
    crust: [],
    cheese: [],
    veggies: [],
    meats: [],
    other: [],
    pepperoni: [],
  };

  const dispatch = useDispatch();

  const onClosePepperoniHandler = () => {
    dispatch(storeActions.setPizzaCreationType("Custom Pepperoni Layout"));
    dispatch(storeActions.setBuildAPizzaUserSelectedObject(defaultUserData));
    dispatch(storeActions.setPepperoniLayoutDatabase([]));
    dispatch(storeActions.setPopupActive(false));
    dispatch(storeActions.setNewPizzaPopup(!newPizzaPopup));
  };
  const onCloseBuildHandler = () => {
    dispatch(storeActions.setPizzaCreationType("Build a Pizza"));
    dispatch(storeActions.setBuildAPizzaUserSelectedObject(defaultUserData));
    dispatch(storeActions.setNewPizzaPopup(!newPizzaPopup));
    dispatch(storeActions.setPopupActive(false));
  };
  const onCloseHandler = () => {
    dispatch(storeActions.setPizzaCreationType("Build a Pizza"));
    dispatch(storeActions.setBuildAPizzaUserSelectedObject(defaultUserData));
    dispatch(storeActions.setPopupActive(false));

    dispatch(storeActions.setNewPizzaPopup(!newPizzaPopup));
  };

  return (
    <Dialog
      open={newPizzaPopup}
      onClose={onCloseHandler}
      aria-labelledby="responsive-dialog-title"
      sx={{ "& .MuiPaper-root": { backgroundColor: "secondary.dark" } }}
      PaperProps={{
        style: {
          borderRadius: "10px",
          border: "none",
          margin: "0",
          "@media(maxWidth:475px)": {
            width: "max(325px,325px)",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          backgroundColor: "secondary.dark",
          color: "secondary.light",
          overflowX: "hidden",
          "@media(maxWidth:475px)": {
            width: "max(325px,325px)",
          },
        }}
      >
        <Grid
          container
          columns={1}
          sx={{ flexDirection: "column", placeItems: "center" }}
        >
          <Typography
            variant="h4"
            sx={{
              "@media(max-width:580px)": { fontSize: "32px" },
              "@media(max-width:520px)": { fontSize: "28px" },
              "@media(max-width:475px)": {
                fontSize: "24px",
                textAlign: "center",
              },
            }}
          >
            Custom Pepperoni Layout
          </Typography>
          <Typography
            variant="h6"
            sx={{
              "@media(max-width:475px)": {
                fontSize: "12px",
                marginTop: "5px",
                marginBottom: "5px",
              },
            }}
          >
            or
          </Typography>
          <Typography
            variant="h4"
            sx={{
              "@media(max-width:580px)": { fontSize: "32px" },
              "@media(max-width:520px)": { fontSize: "28px" },
              "@media(max-width:475px)": { fontSize: "24px" },
            }}
          >
            Build a Pizza
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
          "@media(max-width:475px)": {},
        }}
      >
        <PopupButton
          onClick={onClosePepperoniHandler}
          sx={{
            borderRadius: "5px",
            "@media(max-width:520px)": { fontSize: "10px" },
            "@media(max-width:475px)": {
              width: "max(150px,150px)",
              padding: "10px",
            },
          }}
        >
          Custom Pepperoni Layout
        </PopupButton>
        <PopupButton
          onClick={onCloseBuildHandler}
          sx={{
            borderRadius: "5px",
            "@media(max-width:520px)": { fontSize: "10px" },
            "@media(max-width:475px)": {
              width: "max(100px,100px)",
              padding: "10px",
            },
          }}
        >
          Build a Pizza
        </PopupButton>
      </DialogActions>
    </Dialog>
  );
};
export default NewPizzaPopup;
