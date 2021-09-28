import { useState, useEffect } from "react";
import Current from "../features/current/Current";
import Forecast from "../features/forecast/Forecast";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: 16,
    margin: "5% 25%",
    borderRadius: 4,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px 2px rgba(0,0,0,0.5)",
  },
});

function App() {
  const classes = useStyles();
  const [coords, setCoords] = useState({
    lat: "",
    lon: "",
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <Current coords={coords} />
      <Forecast coords={coords} />
    </div>
  );
}

export default App;
