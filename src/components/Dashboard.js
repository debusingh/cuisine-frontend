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

    commonConstants.consoleLog('In Callback Method with data : ', filterData);
    this.setState({ filterCriteria: filterData });
    //setFilterCriteria(filterData);
  }

  // retrieve params into a variable
  //const params = useParams();


  componentDidMount() {
    console.log("===+> Query Params: ", this.props.location.search); // "?filter=top&origin=im"


    var params = commonConstants.parseQueryString(this.props.location.search);

    console.log("filterCriteria : " + (this.state.filterCriteria === undefined));

   // if ((this.state.filterCriteria === undefined || Object.keys(this.state.filterCriteria).length == 0)
    //  && (params.Region != undefined && params.Region.length > 0)) {

      this.setState({ filterCriteria: params });


    //  }
  }



  render() {

    return (
      <Container fluid>
        <SearchBar onFilterChanged={this.filterChangedCallback} />
        <FoodListing filter={this.state.filterCriteria} />
      </Container>
    );
  }
}

//export default Dashboard;
