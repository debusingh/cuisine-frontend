import React, { useState } from 'react';

import { CardDeck, Container } from 'react-bootstrap';
import '../components-css/Dashboard.css';
import FoodListing from './FoodListing';
//import Switch from './components/Switch'
import { commonConstants } from '../components-constants/React-Common-Constants';

import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import AddCuisine from './AddCuisine';




function Dashboard() {

  const [filterCriteria, setFilterCriteria] = React.useState({});

  var filterChangedCallback = (filterData) => {

    commonConstants.consoleLog('In Callback Method with data : ', filterData);
    setFilterCriteria(filterData);
  };


  return (
    <Container fluid>
      <SearchBar onFilterChanged={filterChangedCallback} />
      <FoodListing filter={filterCriteria} />
    </Container>
    );
}

export default Dashboard;
