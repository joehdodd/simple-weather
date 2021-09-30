import { useState, useEffect, useCallback, useMemo } from "react";
import Current from "../features/current/Current";
import Forecast from "../features/forecast/Forecast";
import { createUseStyles } from "react-jss";
import Search from "../features/search/Search";
import { debounce } from "lodash";

const useStyles = createUseStyles({
  wrapper: {
    padding: 16,
    borderRadius: 4,
    margin: "2.5%",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px 2px rgba(0,0,0,0.5)",
    "@media screen and (min-width: 768px)": {
      margin: "5% 12.5%",
    },
    "@media screen and (min-width: 1024px)": {
      margin: "5% 25%",
    },
  },
});

function App() {
  const classes = useStyles();
  const [coords, setCoords] = useState({
    lat: "",
    lon: "",
  });
  const [searchValue, setSearchValue] = useState("");

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

  const getLocation = (value) => {
    console.log("value", value);
  };
  const debouncedSearch = useMemo(() => debounce(getLocation, 1000), []);
  useEffect(() => {
    if (searchValue) {
      debouncedSearch(searchValue);
    }
  }, [searchValue]);

  return (
    <div className={classes.wrapper}>
      <Search
        handleChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
      <Current coords={coords} />
      <Forecast coords={coords} />
    </div>
  );
}

export default App;
