import React from "react";

import "./Styles.css";

const InputName = props => {
  return (
    <div>
        <input type="text" placeholder="e.g. rick"
        onChange={event => {
            props.onFilterClick(event.target.value, props.filterButtonType)
        }}/>
    </div>
  );
};

export default InputName;
