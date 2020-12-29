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
//import querySearch from "stringquery";


var params = {};
export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    //this.validator = new SimpleReactValidator();

    this.state = {
      filterCriteria: {}
    };

  }
  //const [filterCriteria, setFilterCriteria] = React.useState({});

  filterChangedCallback = (filterData) => {

    console.log('In Callback Method with data : ', filterData);

    if (filterData != undefined || Object.keys(filterData).length > 0) {

      this.setState({ filterCriteria: filterData });
    }

    //Remove the Params (i.e. any Query Parameter - whenever User clicks on any Filter// Otherwise Query Parameters will take Precedence)
    params={};

  }



  // retrieve params into a variable
  //const params = useParams();


  componentDidMount() {


    params = commonConstants.parseQueryString(this.props.location.search);


    // if ((this.state.filterCriteria === undefined || Object.keys(this.state.filterCriteria).length == 0)
    //  && (params.Region != undefined && params.Region.length > 0)) {

    this.setState({ filterCriteria: {} });


    //  }
  }



  render() {

    return (
      <Container fluid>
        <SearchBar parentFilter={params} onFilterChanged={this.filterChangedCallback} />
        <FoodListing parentFilter={params} filter={this.state.filterCriteria}/>
      </Container>
    );
  }
}

//export default Dashboard;
