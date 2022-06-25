import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.js';
import axios from 'axios'
// This is going to be an index view for all the vehicles. We might want to add pagination later.
// Also maybe the three featured can be in a separate 'featured' component

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Filters from '../../components/Filters/Filters.js'

const Vehicles = () => {
    const[vehicles, setVehicles] = useState([])
    const[loaded, setLoaded]  = useState(false);
    useEffect(()=> {
        //get all of the vehicles from the API
        axios.get('/api/v1/vehicles.json')
        .then(
            function(response){
                setVehicles(response.data.data);
                setLoaded(true);
                
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
 
    const List = vehicles.map( item =>{
        return(
            <div className="card shadow-sm mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5>{item.attributes.make} {item.attributes.model}</h5>
                            <h6>${item.attributes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h6>
                        </div>
                    </div>

                    <div className="col-md-4 p-3">
                        <img src={item.attributes.image_url} className="img-fluid rounded-3"/>

                    </div>
                    <Link to={`/vehicles/${item.attributes.slug}`} className="stretched-link"></Link>

                </div>
            </div>
        )
    })

    return(
        <Fragment>
            <Navbar></Navbar>
            {loaded &&
                <div className="container pt-3">
                    <div className="row">
                    <Filters></Filters>
                        {/*start results*/}
                        <div className="col-md-8 mb-3">
                            <h2>Search Results</h2>
                            {List}
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    ) 

}

export default Vehicles;