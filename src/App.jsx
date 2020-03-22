import React, { Component } from "react";
import axios from "axios";
import cloneDeep from "clone-deep";
import "./App.css";

import Character from "./Components/Character";
import FilterSection from "./Components/FilterSection";
import "./Components/Styles.css";

class App extends Component {
  state = {
    info: {
      clickedCharacter: null
    },
    filters: {
      filterName: "",
      filterStatus: null
    },
    characters: []
  };

  componentDidMount = () => {
    axios.get("https://rickandmortyapi.com/api/character/", {params: {
      name: this.state.filters.filterName
    }}).then(response => {
      this.setState({ characters: response.data.results });
      console.log(response.data.results);
    });
    
  }

  characterClickHandler = clickedCharacter => {
    let viewInfo = cloneDeep(this.state.viewInfo);
    viewInfo.clickedCharacter = clickedCharacter;
    this.setState({ viewInfo });
  };

  filterHandler = (filter, filterType) => {
    let stateFilters = cloneDeep(this.state.filters);

    if (filterType === "name") {
      stateFilters.filterName = filter;
    }

    if (filterType === "status") {
      stateFilters.filterStatus = filter;
      if (filter === "All") {
        stateFilters.filterStatus = null;
      }
    }

    this.setState({ filters: stateFilters });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="title"> THE RICK AND MORTY API </div>
          <div className="info">
            <div className="main_content">
              {this.state.characters.map(item => {
                return <Character key={item.id} characterInfo={item} />;
              })}
            </div>
            <div className="filter_content">
              <FilterSection
                onFilterClick={this.filterHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
