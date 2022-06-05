import React from "react";

function AddBrand() {
  return (
    <div>
      <label>Please select type of Business:</label>
      <select name="type" className="type">
        <option value="Retail">Retail</option>
        <option value="Service">Service</option>
        <option value="Both">Both </option>
      </select>
      <form>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> I have a bike</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> I have a car</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> I have a boat</label>
      </form>
    </div>
  );
}

export default AddBrand;
