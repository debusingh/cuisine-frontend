import React from 'react';
import Select from 'react-select';

import { Badge, Button, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const AddCuisineForm = () => {
  const [formData, updateFormData] = React.useState({});



  const vegNonVegOptions = [
    { value: true, label: 'Yes (Its Veg)' },
    { value: false, label: 'No (Its Not Veg)' },
  ];

  const foodTypesOptions = [
    { label: 'Breakfast', value: 'Breakfast' },
    { label: 'Dessert', value: 'Dessert' },
    { label: 'Drink', value: 'Drink' },
    { label: 'Noodle Soup', value: 'Noodle Soup' },
    { label: 'Main Course', value: 'Main Course' },
    { label: 'Pastry', value: 'Pastry' },
    { label: 'Salad', value: 'Salad' },
    { label: 'Side Dish', value: 'Side Dish' },
    { label: 'Snack', value: 'Snack' },
    { label: 'Stew', value: 'Stew' },
    { label: 'Sweet', value: 'Sweet' },
    { label: 'Tea', value: 'Tea' }];

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
  };

  return (

    <Container >
      <div style={{ display: 'flex', justifyContent: 'center'}}>      
      <h2>Share Your Favourite Cuisine with us...</h2>

      </div>
      <Container style={{ borderTop: '1px solid green' }}>
        <Row style={{ paddingTop: '10px' }}>
          <div class='col-12'>
            <label htmlFor="name" class="font-weight-bold">Cuisine Name:</label>
          </div>
          <div class='col-12' >
            <input name='name' type='text' placeholder="Name of the Cuisine..." style={{ width: '100%' }} onChange={handleChange} />
          </div>
        </Row>
        <Row style={{ paddingTop: '10px' }}>
          <div class='col-12'>
            <label htmlFor="region" class="font-weight-bold">Place of Cuisine:</label>
          </div>
          <div class='col-12'>

            <input name='region' type='text' placeholder="Ex: Andhra Pradesh (State) or Bangalore (City), Vidharbha (Region)" style={{ width: '100%' }} onChange={handleChange} />
          </div>
        </Row>
        <Row style={{ paddingTop: '10px' }}>
          <div class='col-12' >
            <label htmlFor="cuisineType" class="font-weight-bold">Type of Cuisine:</label>
          </div>
          <div class='col-12'>
            <Select
              name='cuisineType'
              options={foodTypesOptions}
              isSearchable={true}
              placeholder='Main Course or Dessert or ...'
              onChange={handleChange} />
          </div>
        </Row>
        <Row style={{ paddingTop: '10px' }}>
          <div class='col-12' >
            <label htmlFor="vegeterian" class="font-weight-bold">Is it Vegeterian?</label>
          </div>
          <div class='col-12'>
            <Select
              options={vegNonVegOptions}
              isSearchable={false}
              placeholder='Veg or Non-Veg?'
              onChange={handleChange} />
          </div>
        </Row>
        <Row style={{ paddingTop: '10px' }}>
          <div class='col-12' >
            <label htmlFor="videoLink" class="font-weight-bold">You Tube Link :</label>
          </div>
          <div class='col-12'>
            <input name='videoLink' type='url' placeholder="Ex: https://www.youtube.com/watch?v=XXXXXXXX" style={{ width: '100%' }} onChange={handleChange} />
          </div>
        </Row>

        <Row style={{ padding: '50px' }}>
          <Button variant="outline-success" size="lg" block onClick={handleSubmit} >
            Submit Your Cuisine  </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default AddCuisineForm;