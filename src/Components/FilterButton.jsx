import React from "react";

import "./Styles.css";

const filterButton = props => {
  return (
    <div>
      <select className="filter_select" onChange={elem => props.onFilterClick(elem.target.value, props.filterType)}>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default filterButton;
