import Select from 'react-select';
import { useState } from 'react';
import {vegFilterSelectCustomStyles} from '../components-constants/React-VegNonVeg-Select';
import {foodTypeSelectCustomStyles} from '../components-constants/React-FoodType-Select';
import {regionSelectCustomStyles} from '../components-constants/React-Region-Select';

import '../components-css/SearchBar.css';
import { Row, Col, Container } from 'react-bootstrap';



function SearchBar(props) {

const [filter, setFilter] = useState({});

  const vegNonVegOptions = [
    { value: 'ignore', label: 'Any Type' },
    { value: true, label: 'Veg Only' },
    { value: false, label: 'Non-Veg Only' },
  ];

  const foodTypeOptions = [
    { value: 'ignore', label: 'Any' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Dessert', label: 'Dessert' },
  ];

  const regeionOptions = [
    { value: 'ignore', label: 'All' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'Kumaon', label: 'Kumaon' },
    { value: 'Punjab', label: 'Punjab' }
  ];

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
          options={regeionOptions}
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

