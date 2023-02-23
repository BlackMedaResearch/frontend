import { useState } from "react";

const Dropdown = (props) => {
  const changeDropdownHandler = (e) => {
    props.getCountry(e.target.value);
  };

  return (
    <div>
      <select onChange={changeDropdownHandler}>
        <option>Sweden</option>
        <option>Mexico</option>
        <option>New Zealand</option>
        <option>Thailand</option>
      </select>
    </div>
  );
};

export default Dropdown;
