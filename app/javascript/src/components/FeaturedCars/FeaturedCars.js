//hard coded image components for demonstration purposes
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import FeaturedCard from './FeaturedCard.js';
//here we need to move away from hard coded input and programatically load the cars
const FeaturedCars = () =>{
  const[featuredVehicles, setFeaturedVehicles] = useState([])
  const[loaded, setLoaded]  = useState(false);
  useEffect(()=> {
      //get all of the vehicles from the API
      axios.get('/api/v1/vehicles/featured')
      .then(
          function(response){
              console.log(response);
              setFeaturedVehicles(response.data.data);
              setLoaded(true);
              console.log(featuredVehicles);
              
          }
      )
      .catch(
          function(error) {
              console.log('oops we errored out')
              console.log(error);
          }
      )
      //update vehicles in our state 
  }, []); //we pass in the array parameter telling the useEffect only to fire once vehicles.length changes

  const VehicleCards = featuredVehicles.map(item =>{
      return(
        <FeaturedCard key={item.attributes.slug} props={item}></FeaturedCard>
      )
  })
  
  return (
    <>
    
      <div className="container pt-3">
        {loaded &&

          <div className="row" id="vehicleContainer">
            {VehicleCards}
          </div> 
        }
      </div>
    </>
    )

}
export default FeaturedCars;