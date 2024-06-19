import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Searching = () => {
  const [type, setType] = useState(0);

  return (
    <div>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        // variant="filled"
        variant="outlined"
        // onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Searching;
