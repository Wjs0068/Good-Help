import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./AddBrand.css";

function AddBrand() {
  const type = [{ label: "Retail" }, { label: "Service" }];

  return (
    <form className="brand-form">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={type}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Type of Business" />
        )}
      />
      
      <Autocomplete
        multiple
        id="tags-outlined"
        options={type}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </form>
  );
}

export default AddBrand;
