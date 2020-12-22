import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import YouTube from 'react-youtube';
import ReactPaginate from "react-paginate";

import '../components-css/FoodListing.css';
import { commonConstants } from '../components-constants/React-Common-Constants';


function FoodListing(props) {

  console.log('In FoodListing Method');

  const [dishes, setDishes] = useState({
    receipes: []
  });

  const [pageNumber, setPageNumber] = useState(1);

  const [filter, setFilter] = useState({
    receipes: []
  });

  console.log('Request Options : ', JSON.stringify(props));

  let filterCriteria = {};
  var allPropertyNames = Object.keys(props.filter);
  for (var j = 0; j < allPropertyNames.length; j++) {
    var name = allPropertyNames[j];
    var value = props.filter[name];

    if (value === 'ignore') {

      continue;
    }

    filterCriteria[name] = value;

  }


  //Call the use effect hook
  useEffect(() => {

    setPageNumber(1);

    const apiUrl = commonConstants.apiUrl + 'dishes/';

    let jsonString = JSON.stringify({ filter: { filterCriteria } });

    console.log('Parameters to be Passed : ', jsonString);


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString
    };


    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {

        console.log('Data  : ' + data.receipes);
        setDishes({ receipes: data.receipes });
      });
  }, [filter, props]);

  const PER_PAGE = 12;

  const startDishNumber = (pageNumber - 1) * PER_PAGE;
  const lastDishNumber = (pageNumber) * PER_PAGE;

  const dishesToDisplay = dishes.receipes.slice(startDishNumber, lastDishNumber);
  const totalItemsCount = dishes.receipes.length;

  const offset = pageNumber * PER_PAGE;

  const pageCount = Math.ceil(totalItemsCount / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {

    console.log("==> Current Page: ", selectedPage);
    setPageNumber(selectedPage + 1);
  };

  console.log('Receipes Length : ' + dishes.receipes);

  if (dishesToDisplay.length == 0) {

    return <h1>No Cuisine found Matching your Criteria.</h1>;
  }

  try {

    return (<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CardDeck className="row" style={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
        {dishesToDisplay.map((receipe) => {

          //16:9 width:height ratio
          const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };

          return (

            <div key={receipe._id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mx-auto" style={{ paddingTop: '10px', paddingBottom: '10px' }}>

              <Card bg="success" text="white" style={{ width: '100%' }} class="mx-auto">
                <YouTube opts={opts} videoId={receipe.videoLink}
                  controls />

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
        }



      </CardDeck>

      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mx-auto"
        style={{ display: pageCount > 1 ? '' : 'none' }}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          marginPagesDisplayed={3}
          selectedPage={pageNumber}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"} />

      </div>
    </div>
    );




  } catch (error) {

    console.log(error);

    return (<h1>Error Occurred!!!</h1>)
  }

};

export default FoodListing;
