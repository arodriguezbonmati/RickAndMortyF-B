import React from "react";

import "./Styles.css";

import FilterButton from "./FilterButton";
import InputName from "./InputName";

const FilterSection = props => {
  return (
    <div className="filter_section">
      <div className="section_header">
        <span className="header_text">Filters</span>
      </div>

      <div className="section_content">
        <div className="section_container">
          <div className="section_container_title">
            <h2 className="section_title">Name Filter</h2>
          </div>
          <div className="filter_content">
            <div className="filter_container"></div>
            <InputName
              onFilterClick={props.onFilterClick}
              filterButtonType="name"
            />
          </div>
          <div className="section_container_title">
            <h2 className="section_title">Status Filter</h2>
          </div>
          <div className="filter_content">
            <div className="filter_container"></div>
            <FilterButton 
              onFilterClick={props.onFilterClick}
              filterButtonType="status"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
