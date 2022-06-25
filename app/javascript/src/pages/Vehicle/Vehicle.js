import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faGaugeHigh, faFillDrip, faHeart, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../components/Navbar/Navbar';

// This is a component that gives us a specific vehicle based on a slug
const Vehicle = () => {
    let urlParams = useParams();
    const slug = urlParams.slug;

    const [vehicleInfo, setVehicleInfo] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        //api/v1/vehicles/slug
        const url = `/api/v1/vehicles/${slug}`
        axios.get(url)
        .then(
            function(response){
                setVehicleInfo(response.data.data);
                setLoaded(true)
            }
        )
        .catch(
            function(error) {
                console.log('oops we errored out')
                console.log(error);
            }
        )
    },[])


    return(
        <Fragment>
            <Navbar></Navbar>
            {loaded &&
                <div className="container pt-3">


                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-3">
                        <img src={vehicleInfo.attributes.image_url} className="rounded-3" width="100%" height="auto"/>
                    </div>


                    <div className="col-md-6 col-sm-9 mb-3">
                        <h2>{vehicleInfo.attributes.make} {vehicleInfo.attributes.model}</h2>
                        <h3>${vehicleInfo.attributes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h3>
                        <hr/>
                        <p className="fs-4 mb-3"><FontAwesomeIcon icon={faTruck} /> 2-Day Delivery </p>
                        <p className="fs-4 mb-3"><FontAwesomeIcon icon={faGaugeHigh} /> {vehicleInfo.attributes.mileage}  Miles </p>
                        <p className="fs-4 mb-3"><FontAwesomeIcon icon={faFillDrip} /> {vehicleInfo.attributes.color}</p>
                    </div>



                    <div className="row">
                        <div className="col-md-3 col-6 text-center align-items-center justify-content-center">
                        <button className="btn btn-success w-100"><FontAwesomeIcon icon={faHeart} /> 
                        <span className="fs-6"> Like This Listing</span>
                        </button>
                        </div>


                        <div className="col-md-3 col-6 text-center align-items-center justify-content-center">
                            <button className="btn btn-danger w-100"> 
                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                <span className="fs-6"> Message Us</span></button>
                        </div>
                    </div>
                </div>

            </div>

    }

        </Fragment>
    ) 
}

export default Vehicle;