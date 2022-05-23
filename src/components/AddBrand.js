import React from "react";

function AddBrand() {
  return (
    <div>
      <label>Please select type of Business:</label>
      <select name="type" className="type">
        <option value="Retail">Retail</option>
        <option value="Service">Service</option>
      </select>
    </div>
  );
}

export default AddBrand;
