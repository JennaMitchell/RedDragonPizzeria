import React from "react";

import classes from "./credits.module.css";
import { creditsData } from "./credits-data";

import logo from "../../img/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../../store/store";

const Credits = () => {
  const dispatch = useDispatch();
  const activeNavButton = useSelector((state) => state.activeNavButton);

  /// check to see if user closed  on a different tab  but re-entered on this page. causing the active button to be misaligned
  if (activeNavButton !== "Credits") {
    dispatch(storeActions.setActiveNavButton("Credits"));
  }

  const renderReadyCreditsData = creditsData.map((data) => {
    return (
      <div className={classes.imageContainer} key={data.desciption}>
        <img
          className={classes.styledImage}
          src={data.photo}
          alt={data.desciption}
        />
        <p className={classes.photoDescription}>
          Photo by <b>{data.author}</b> on{" "}
          <a href={data.link} className={classes.unsplashLink}>
            Unsplash
          </a>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.gridContianer}>
          {renderReadyCreditsData}
          <div className={classes.imageContainer} key={"dragon logo"}>
            <img
              className={classes.styledImage}
              src={logo}
              alt={"dragon logo"}
            />
            <p className={classes.photoDescription}>
              Created by Freepik from
              <a
                href={
                  "https://www.flaticon.com/free-icon/dragon_5169290?term=dragon&page=1&position=17&page=1&position=17&related_id=5169290&origin=search"
                }
                className={classes.unsplashLink}
              >
                Flaticon
              </a>
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Credits;
