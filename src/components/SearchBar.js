import Select from 'react-select';
import { useEffect, useState } from 'react';
import {vegFilterSelectCustomStyles} from '../components-constants/React-VegNonVeg-Select';
import {foodTypeSelectCustomStyles} from '../components-constants/React-FoodType-Select';
import {regionSelectCustomStyles} from '../components-constants/React-Region-Select';

import '../components-css/SearchBar.css';
import { Row, Col, Container } from 'react-bootstrap';

function addDataToFilter(filter, filterDataSet) {

  console.log('Adding Data to Filter...');
  filterDataSet.map((filterData)=>{

      filter.push({value:filterData, label:filterData});
    });

    console.log('Dataset :: ', filter);
}

function loadFilterData(columnName, mainFilter) {

  const apiUrl = 'http://localhost:5000/dishes/distinct';

  let requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {}
  };

  //Load Foor Type
requestOptions.body = JSON.stringify({"filter":{"column":columnName}});

console.log('Request Options : ', requestOptions);

fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((filterOptions) => {

        console.log ('Type Data  : ' + JSON.stringify(filterOptions));
        addDataToFilter (mainFilter, filterOptions.column_vals);
      });
}

function SearchBar(props) {

const [filter, setFilter] = useState({});
const vegNonVegOptions = [
  { value: 'ignore', label: 'Any Type' },
  { value: true, label: 'Veg Only' },
  { value: false, label: 'Non-Veg Only' },
];

const foodTypeOptions = [
  { value: 'ignore', label: 'Any' },
];

const regionOptions = [
  { value: 'ignore', label: 'All' },
];

 //Call the use effect hook
 useEffect(() => {

  console.log('===>> Updating Distinct Values');

  loadFilterData("Type", foodTypeOptions);
  loadFilterData("Region", regionOptions);
  
  },[]);

 

  const rowStyle = {
                      marginTop: '-4px'
                    };
  
    try {
  return (
    <div className="flex-container" >
      <Container>
      <Row>
        <Col sm={12} md={4} lg={3} >
          <Select
            options={vegNonVegOptions}
            styles={vegFilterSelectCustomStyles}
            placeholder='Veg or Non-Veg?'
            onChange= {selectedOption => {
                                          let newFilter = {...filter};
                                          newFilter.Vegeterian=selectedOption.value;
                                          setFilter(newFilter);
                                          props.onFilterChanged(newFilter);
                                        }
                      }/>
     </Col>
     <Col sm={12} md={4} lg={3} >
        <Select
          options={regionOptions}
          styles={regionSelectCustomStyles}
          placeholder='Region of Interest'
          onChange= {selectedOption => {
                                        let newFilter = {...filter};
                                        newFilter.Region=selectedOption.value;
                                        setFilter(newFilter);
                                        props.onFilterChanged(newFilter);
                                      }
                    }/>
      </Col>
      <Col sm={12} md={4} lg={3} >
        <Select
          options={foodTypeOptions}
          styles={regionSelectCustomStyles}
          placeholder='Meals or Non-Meals?'
          onChange= {selectedOption => {
                                        let newFilter = {...filter};
                                        newFilter.Type=selectedOption.value;
                                        setFilter(newFilter);
                                        props.onFilterChanged(newFilter);
                                      }
                    }/>
      </Col>

        </Row>
        </Container>
  </div>

 

  );

} catch (error) {

  console.log(error);

  return (<h1>Error Occurred!!!</h1>)
}
}

export default SearchBar;

