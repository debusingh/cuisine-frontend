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

      filter.push({"value":filterData, "label":filterData});
    });

    return filter;
}

function loadFilterData(columnName, mainFilter) {

  //const apiUrl = 'http://localhost:5000/dishes/distinct';
  const apiUrl = '/dishes/distinct';

  let requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"filter":{"column":columnName}})
  };

  //Load Foor Type
//requestOptions.body = JSON.stringify({"filter":{"column":columnName}});

return(
 fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((filterOptions) => {

        return (addDataToFilter (mainFilter, filterOptions.column_vals));
      })
);
}

function SearchBar(props) {

  
  const foodTypeOptions = [
    { value: 'ignore', label: 'Any' },
  ];
  
  const regionOptions = [
    { value: 'ignore', label: 'All' },
  ];

  const [foodTypeState, setFoodTypeState] = useState(foodTypeOptions);
  const [regionState, setRegionState] = useState(regionOptions);

const [filter, setFilter] = useState({});
const vegNonVegOptions = [
  { value: 'ignore', label: 'Any Type' },
  { value: true, label: 'Veg Only' },
  { value: false, label: 'Non-Veg Only' },
];


 //Call the use effect hook
 useEffect(() => {

  loadFilterData("Type", foodTypeOptions).then((foodType)=>setFoodTypeState(foodType));
  loadFilterData("Region", regionOptions).then((regions)=>setRegionState(regions));

  //setFoodTypeState(loadFilterData("Type", foodTypeOptions));
  //setRegionState(loadFilterData("Region", regionOptions));

  console.log('===>> Updating Distinct Values', foodTypeOptions);

  
  },[]);

 

  const rowStyle = {
                      marginTop: '-4px'
                    };
  
    try {

      console.log('Data For Type :: ', JSON.stringify(foodTypeState));

  return (
    <div className="flex-container" >
      <Container>
      <Row>
        <Col sm={12} md={4} lg={3} >
          <Select
            options={vegNonVegOptions}
            styles={vegFilterSelectCustomStyles}
            isSearchable={false}
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
          options={regionState}
          styles={regionSelectCustomStyles}
          placeholder='Region of Interest'
          isDisabled={regionState.length===0}
          isSearchable={false}
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
          options={foodTypeState}
          styles={foodTypeSelectCustomStyles}
          isDisabled={foodTypeState.length===0}
          placeholder='Meals or Non-Meals?'
          isSearchable={false}
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

