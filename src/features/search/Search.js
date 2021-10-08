import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchInput: {
    padding: "4px 8px",
    height: "2rem",
    width: "12rem",
    "@media screen and (min-width: 768px)": {
      width: "24rem",
    },
    fontSize: 16,
    boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.5)",
    outline: "none",
    border: "1px solid transparent",
  },
});

const Search = ({ value, handleChange, results }) => {
  const classes = useStyles();
  return (
    <div>
      <input
        className={classes.searchInput}
        style={{ borderRadius: results ? "4px 4px 0px 0px" : 4 }}
        onChange={handleChange}
        vlaue={value}
        name="Search..."
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
