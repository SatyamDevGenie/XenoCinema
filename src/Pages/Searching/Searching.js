import TextField from "@mui/material/TextField";
import React from "react";

const Searching = () => {
  return (
    <div>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        variant="filled"
        // onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Searching;
