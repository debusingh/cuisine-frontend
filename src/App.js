import React, { useState } from 'react';

import { CardDeck } from 'react-bootstrap';
import './App.css';
import FoodListing from './components/FoodListing';
//import Switch from './components/Switch'

import Title from './components/Title';
import SearchBar from './components/SearchBar';



function App() {

  const [filterCriteria, setFilterCriteria] = React.useState({});

  var filterChangedCallback = (filterData) => {
          
    console.log('In Callback Method with data : ', filterData);
    setFilterCriteria(filterData);
 };


  return (
    <div className="App">
      <Title/>

      <SearchBar onFilterChanged={filterChangedCallback} />
      <FoodListing filter={filterCriteria}/>
    
    </div>
  );
}

export default App;
