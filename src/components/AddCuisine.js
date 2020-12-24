import React from 'react';
import Select from 'react-select';
import '../components-css/AddCuisine.css';
import { Jumbotron, Button, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { commonConstants } from '../components-constants/React-Common-Constants';
import FacebookLoginWithButton from 'react-facebook-login';


export default class AddCuisineForm extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      facebook: {
        loggedIn: false,
        eMail: '',
        picture: null,
        name: ''
      },
      userData: {
        formData: {}
      }
    };
  }





  responseFacebook = (response) => {
    console.log(response);

    this.setState(prevState => ({
      facebook: {
        loggedIn: response.email != undefined && response.email.length > 0,
        eMail: response.email,
        picture: response.picture != undefined && response.picture.data.url,
        name: response.name
      },
      userData: {
        formData: {

        }
      }
    }
    ))


    let apiUrl = commonConstants.apiUrl + 'users/user/';

    let jsonString = JSON.stringify({ 'user': { 'name': response.name, 'userMail': response.email } });

    console.log('Parameters to be Passed : ', jsonString);

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString
    };


    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {

        console.log('Data  : ' + data.receipes);
      });


  }



  handleChange = (e) => {

    this.setState(prevState => ({
      facebook: {
        ...prevState.facebook
      },           // copy all other key-value pairs of food object
      userData: {
        formData: {                // specific object of food object
          ...prevState.userData.formData,   // copy all pizza key-value pairs
          [e.target.name]: e.target.value.trim()
        }        // update value of specific key
      }
    }
    ))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.userData.formData);
    // ... submit to API or something
  };


  render() {

    let dataContent = (<div></div>);
    console.log('State=> ', this.state);
    if (!this.state.facebook.loggedIn) {

      dataContent = (
        <div style={{ paddingTop: '15px', paddingRight: '10px' }} >
          <FacebookLoginWithButton
            appId="712150759486492"
            autoLoad
            fields="name,email,picture"
            callback={(resonse) => { this.responseFacebook(resonse) }}
            icon="fa-facebook" />
        </div>)

    } else


      dataContent =
        (<Container >
          <div class="row align-items-center" >
            <h4 style={{ margin: 'auto' }}><span class="badge badge-pill badge-success">Share your Favourite Cuisine Receipe!!!</span></h4>

          </div>
          <Container >
            <Row style={{ paddingTop: '10px' }}>
              <div class='col-12'>
                <label htmlFor="name" class="font-weight-bold">Cuisine Name:</label>
              </div>
              <div class='col-12' >
                <input name='name' type='text' placeholder="Name of the Cuisine..." style={{ width: '100%' }} onChange={(event) => { this.handleChange(event) }} />
              </div>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
              <div class='col-12'>
                <label htmlFor="region" class="font-weight-bold">Place of Cuisine:</label>
              </div>
              <div class='col-12'>

                <input name='region' type='text' placeholder="Ex: Andhra Pradesh (State) or Bangalore (City), Vidharbha (Region)" style={{ width: '100%' }}
                  onChange={(event) => { this.handleChange(event) }} />
              </div>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
              <div class='col-12' >
                <label htmlFor="cuisineType" class="font-weight-bold">Type of Cuisine:</label>
              </div>
              <div class='col-12'>
                <Select
                  name='cuisineType'
                  options={commonConstants.foodTypesOptions}
                  isSearchable={true}
                  placeholder='Main Course or Dessert or ...'
                  onChange={(event) => { this.handleChange(event) }} />
              </div>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
              <div class='col-12' >
                <label htmlFor="vegeterian" class="font-weight-bold">Is it Vegeterian?</label>
              </div>
              <div class='col-12'>
                <Select
                  options={commonConstants.vegNonVegOptions}
                  isSearchable={false}
                  placeholder='Veg or Non-Veg?'
                  onChange={(event) => { this.handleChange(event) }} />
              </div>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
              <div class='col-12' >
                <label htmlFor="videoLink" class="font-weight-bold">You Tube Link :</label>
              </div>
              <div class='col-12'>
                <input name='videoLink' type='url' placeholder="Ex: https://www.youtube.com/watch?v=XXXXXXXX" style={{ width: '100%' }}
                  onChange={(event) => { this.handleChange(event) }} />
              </div>
            </Row>

            <Row style={{ padding: '50px' }}>
              <Button variant="outline-success" size="lg" block onClick={(event) => { this.handleSubmit(event) }} >
                Submit Your Cuisine  </Button>
            </Row>
          </Container>
        </Container >
        );


    let leftSideContent =
      <div className='headerDiv' >
        <div className='header'></div>
        <h1 style={{ color: 'green' }}>Your Regional Cuisine</h1>
        <h5 style={{ color: 'green' }}>Share with all of us your Region's delicious cuisie...</h5>
      </div>;

    let finalContent =
      <Container>
        <Row >
          <div class='col-lg-6 col-md-0'>
            {leftSideContent}
          </div>
          <div class='col-lg-6 col-md-12' >
            {dataContent}
          </div>
        </Row>
      </Container>;

    return finalContent;
  }
}