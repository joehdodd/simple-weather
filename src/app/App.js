import { useState, useLayoutEffect, useEffect, useMemo } from "react";
import Current from "../features/current/Current";
import Forecast from "../features/forecast/Forecast";
import { createUseStyles } from "react-jss";
import Search from "../features/search/Search";
import { debounce } from "lodash";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const useStyles = createUseStyles({
  wrapper: {
    padding: 16,
    borderRadius: 4,
    margin: "2.5%",
    backgroundColor: "#fff",
    boxShadow: "0px 8px 12px 0px rgba(0,0,0,0.5)",
    "@media screen and (min-width: 768px)": {
      margin: "5% 12.5%",
    },
    "@media screen and (min-width: 1024px)": {
      margin: "5% 25%",
    },
  },
  searchResultsContainer: {
    position: "relative",
    marginBottom: 16,
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchResults: {
    padding: 8,
    width: "24rem",
    maxHeight: "12rem",
    overflowY: "scroll",
    position: "absolute",
    background: "#fff",
    display: "grid",
    gridAutoFlow: "row",
    gridGap: 8,
    top: 38,
    border: "1px solid transparent",
    borderRadius: "0px 0px 4px 4px",
    boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.5)",
  },
  searchResultItem: {
    borderRadius: 4,
    padding: "8px 2px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
  getLocationcontainer: {
    padding: 8,
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "center",
    justifySelf: "center",
    cursor: "pointer",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "#eee",
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
  const [searchResults, setSearchResults] = useState([]);

  const getUserLoaction = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };

  useLayoutEffect(() => {
    getUserLoaction();
  }, []);

  const getSearchLocation = (value) => {
    const geocoder = new window.google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({ address: value }, (results, status) => {
        if (status === "OK") {
          setSearchResults([...results]);
        } else {
          setSearchResults({ formatted_address: "Not found." });
        }
      });
    }
  };

  const debouncedSearch = useMemo(() => debounce(getSearchLocation, 500), []);
  useEffect(() => {
    if (searchValue) {
      debouncedSearch(searchValue);
    }
  }, [debouncedSearch, searchValue]);

  const handleUpdateCoords = (coords) => {
    setCoords({
      lat: coords.lat(),
      lon: coords.lng(),
    });
    setSearchValue("");
    setSearchResults([]);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchResultsContainer}>
        <div>
          <Search
            results={!!searchResults.length && !!searchValue.length}
            handleChange={({ target: { value } }) => setSearchValue(value)}
            value={searchValue}
          />
          {!!searchResults.length && !!searchValue.length && (
            <div className={classes.searchResults}>
              {searchResults.map((result) => (
                <div
                  key={result.formatted_address}
                  onClick={() => handleUpdateCoords(result.geometry.location)}
                  className={classes.searchResultItem}
                >
                  <span style={{ fontSize: 16 }}>
                    {result.formatted_address}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={classes.getLocationcontainer}
          onClick={() => getUserLoaction()}
        >
          {<LocationOnIcon />}
          <span style={{ fontSize: 12 }}>Get your location...</span>
        </div>
      </div>
      <Current coords={coords} />
      <Forecast coords={coords} />
    </div>
  );
}

export default App;
