import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck} from 'react-bootstrap';
import YouTube from 'react-youtube';

import '../components-css/FoodListing.css';



function FoodListing(props) {

  console.log('In FoodListing Method');

  const [dishes, setDishes] = useState({
    receipes: []});

    const [filter, setFilter] = useState({
      receipes: []});

console.log('Request Options : ', JSON.stringify(props));

//const filterCriteria = props.filter.Vegeterian==='ignore'?{}:props.filter;

let filterCriteria = {};
var allPropertyNames = Object.keys(props.filter);
for (var j=0; j<allPropertyNames.length; j++) {
    var name = allPropertyNames[j];
    var value = props.filter[name];

    if (value === 'ignore') {

      continue;
    }

    filterCriteria[name]=value;

}

console.log(' Filter Criteria : ', filterCriteria);

 
  //Call the use effect hook
  useEffect(() => {

    console.log('===>> In UseEffect Method');

    //const apiUrl = 'http://localhost:5000/dishes/';
    const apiUrl = '/dishes/';

    let jsonString = JSON.stringify({filter: {filterCriteria}});

    console.log('Parameters to be Passed : ', jsonString);


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString
    };

    
  fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {

        console.log ('Data  : ' + data.receipes);
        setDishes({receipes : data.receipes});
        });
    },[filter, props]);
  
    console.log ('Receipes Length : ' + dishes.receipes);
   
    if (dishes.receipes.length == 0) {

      return <h1>No Cuisines yet Matching your Criteria.</h1>;
    }

    try {

      return(<CardDeck className="row" style={{display: 'flex', flexDirection: 'row', padding:'10px'}}>
      {dishes.receipes.map((receipe) => {

                  //16:9 width:height ratio
                  const opts = {
                    height: 9*17+"",
                    width: 16*17+"",
                    playerVars: {
                      // https://developers.google.com/youtube/player_parameters
                      autoplay: 0,
                    },
                  };

        return (

       <div key={receipe._id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-centered" style={{paddingTop:'10px', paddingBottom:'10px'}}>

        <Card bg="success" text="white"  style={{ width: '18rem'}} class="mx-auto">
        <YouTube opts={opts} videoId={receipe.videoLink}
        controls/>
 
        <Card.Body>
          <Card.Title>{receipe.Name}</Card.Title>
          <Card.Text>
            {receipe.Region}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
        )
      }
      )
    }</CardDeck>);

 
            
      
  } catch (error) {

    console.log(error);

    return (<h1>Error Occurred!!!</h1>)
  }
    
};

export default FoodListing;
