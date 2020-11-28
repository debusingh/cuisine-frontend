import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Card, CardMedia, CardDeck} from 'react-bootstrap';

import '../components-css/FoodListing.css';



function FoodListing() {

  console.log('In FoodListing Method');

  const [dishes, setDishes] = useState({
    receipes: []
});
 
  //Call the use effect hook
  useEffect(() => {

    console.log('In UseEffect Method');

    const apiUrl = 'http://localhost:5000/dishes/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {

        console.log ('Data  : ' + data.receipes);
        setDishes({receipes : data.receipes});
        });
    },[]);
  
    console.log ('Receipes Length : ' + dishes.receipes);
   
    if (dishes.receipes.length == 0) {

      return <h1>Empty String!</h1>;
    }

    try {

      return(<CardDeck className="row" style={{display: 'flex', flexDirection: 'row'}}>
      {dishes.receipes.map((receipe) => {
                  console.log('URL : ' + receipe.videoLink);

        return (

       <div key={receipe._id} className="col-sm-12 col-md-4 col-lg-3">

        <Card style={{ width: '18rem'}}>
        <CardMedia 
  component="video"
  height="140"
  image={receipe.videoLink}
  title="Contemplative Reptile" 
/>

      
        
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
