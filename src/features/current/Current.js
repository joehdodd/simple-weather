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
  currentHeaderText: {
    fontSize: 32,
    fontWeight: 700,
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
          <div>
            <span className={classes.currentHeaderText}>
              {current.main && Math.round(current.main.temp)}
            </span>
            <span className={classes.currentDegrees}>&deg; F</span>
          </div>
        </div>
        <span className={classes.currentHeaderText}>
          {current.name} {current.name && "Weather"}{" "}
        </span>
      </div>
    </div>
  );
};

export default Current;
