import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./AddBrand.css";
import Stack from "@mui/material/Stack";

function AddBrand() {
  const type = [{ label: "Retail" }, { label: "Service" }];
  const [value, setValue] = useState({});

  const serviceOptions = [
    { title: "Home", option: "Movers" },
    { title: "Home", option: "Electrician" },
    { title: "Home", option: "HVAC" },
    { title: "Home", option: "Lawn Maintenance" },
    { title: "Home", option: "Plumbing" },
    { title: "Home", option: "Home Improvements" },
    { title: "Home", option: "Paint" },
    { title: "Auto", option: "Maintenance" },
    { title: "Auto", option: "Body Repair" },
    { title: "Auto", option: "Detailing" },
    { title: "Financial", option: "Financial Planning" },
    { title: "Financial", option: "Insurance" },
    { title: "Financial", option: "Tax and Accounting" },
  ];
  const retailOptions = [
    { title: "Toys", option: "Lego" },
    { title: "Toys", option: "fffff" },
    { title: "Toys", option: "Lego" },
    { title: "Toys", option: "Lego" },
    { title: "Toys", option: "Lego" },
  ];

  return (
    <form className="brand-form">
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          onChange={(event, value) => {
            console.log(value);
          }}
          options={type}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Type of Business" />
          )}
        />

        <Autocomplete
          multiple
          id="tags-outlined"
          options={serviceOptions}
          getOptionLabel={(option) => option.option}
          groupBy={(serviceOptions) => serviceOptions.title}
          sx={{ width: 500 }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="filterSelectedOptions"
              placeholder="Favorites"
            />
          )}
        />
      </Stack>
    </form>
  );
}

export default AddBrand;
