import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchForecast } from "../../app/weatherSlice";
import { createUseStyles } from "react-jss";
import moment from "moment";

const useStyles = createUseStyles({
  forecastContainer: {
    display: "grid",
    gridAutoFlow: "column",
  },
  dayContainer: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gridGap: 4,
  },
});

const Forecast = ({ coords }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const forecast = useSelector((state) => state.weather.forecast);

  useEffect(() => {
    if (!!coords.lat && !!coords.lon) {
      dispatch(fetchForecast(coords));
    }
  }, [dispatch, coords]);
  console.log("forecast", forecast);
  return (
    <div>
      <div className={classes.forecastContainer}>
        {!!forecast.list &&
          forecast.list.map((listItem) => (
            <div className={classes.dayContainer}>
              <h3 style={{ marginBottom: 0 }}>
                {!!listItem.dt && moment(listItem.dt * 1000).format("ddd")}
              </h3>
              <img
                style={{ maxWidth: 50 }}
                src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`}
                alt={listItem.weather.main}
              />
              <div>
                <span>{Math.round(listItem.temp.max)}&deg;</span> <span>|</span>{" "}
                <span>{Math.round(listItem.temp.min)}&deg;</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
