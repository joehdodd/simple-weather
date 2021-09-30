const Search = ({ value, handleChange }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        vlaue={value}
        name="Search..."
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
