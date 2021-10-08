const Search = ({ value, handleChange, results }) => {
  return (
    <div>
      <input
        style={{
          padding: "4px 8px",
          height: "2rem",
          width: "24rem",
          fontSize: 16,
          boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.5)",
          outline: "none",
          border: "1px solid transparent",
          borderRadius: results ? "4px 4px 0px 0px" : 4,
        }}
        onChange={handleChange}
        vlaue={value}
        name="Search..."
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
