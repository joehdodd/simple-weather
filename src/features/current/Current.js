import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrent } from "../../app/weatherSlice";
import { createUseStyles } from "react-jss";
import moment from "moment";

const useStyles = createUseStyles({
  currentHeader: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-between",
  },
  currentDetailsContainer: {
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "start",
    gridGap: 8,
  },
  currentDetailsSub: {
    display: "grid",
    gridAutoFlow: "row",
  },
  currentHeaderTextContainer: {
    display: "grid",
    flexDirection: "column",
  },
  currentHeaderText: {
    fontSize: 32,
    fontWeight: 700,
  },
  currentHeaderSubtext: {
    fontSize: 12,
    justifySelf: "flex-end",
  },
  currentDegrees: {
    fontSize: 16,
    fontWeight: 700,
    verticalAlign: "top",
    lineHeight: "24px",
    marginLeft: 4,
  },
  currentConditions: {
    display: "grid",
    gridTemplateColumns: ".5fr 1.5fr",
    alignItems: "center",
  },
});

const Current = ({ coords }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const current = useSelector((state) => state.weather.current);

  useEffect(() => {
    if (!!coords.lat && !!coords.lon) {
      dispatch(fetchCurrent(coords));
    }
  }, [dispatch, coords]);

  return (
    <div>
      <div className={classes.currentHeader}>
        <div className={classes.currentConditions}>
          {!!current.weather && (
            <img
              style={{ maxWidth: 50 }}
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt={current.weather[0].main}
            />
          )}
          {current.main && (
            <div className={classes.currentDetailsContainer}>
              <div>
                <span className={classes.currentHeaderText}>
                  {Math.round(current.main.temp)}
                </span>
                <span className={classes.currentDegrees}>&deg; F</span>
              </div>
              <div className={classes.currentDetailsSub}>
                <span style={{ fontSize: 12 }}>
                  Humidity: {current.main.humidity}&#37;
                </span>
                <span style={{ fontSize: 12 }}>
                  Wind: {current.wind.speed} mph
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={classes.currentHeaderTextContainer}>
          <span className={classes.currentHeaderText}>{current.name}</span>
          {!!current.weather && (
            <span className={classes.currentHeaderSubtext}>
              {current.weather[0].main}
            </span>
          )}
          <span className={classes.currentHeaderSubtext}>
            {moment(current.dt * 1000).format("dddd, hh:mm A")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;