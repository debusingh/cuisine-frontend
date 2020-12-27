import React, { useState } from 'react';

import { CardDeck, Container } from 'react-bootstrap';
import '../components-css/Dashboard.css';
import FoodListing from './FoodListing';
//import Switch from './components/Switch'
import { commonConstants } from '../components-constants/React-Common-Constants';

import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import AddCuisine from './AddCuisine';
import { useParams } from 'react-router-dom';




function Dashboard() {

  const [filterCriteria, setFilterCriteria] = React.useState({});

  var filterChangedCallback = (filterData) => {

    commonConstants.consoleLog('In Callback Method with data : ', filterData);
    setFilterCriteria(filterData);
  };

  // retrieve params into a variable
  const params = useParams();

  console.log("filterCriteria : " + (filterCriteria === undefined));

  if ((filterCriteria === undefined || Object.keys(filterCriteria).length == 0)
    && (params.Region != undefined && params.Region.length > 0)) {

    setFilterCriteria(params);

  }

  // display params on a web page
  console.log(JSON.stringify(params));

  return (
    <Container fluid>
      <SearchBar onFilterChanged={filterChangedCallback} />
      <FoodListing filter={filterCriteria} />
    </Container>
  );
}

export default Dashboard;
