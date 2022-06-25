import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = (props) => {
    return(
        <div className="col-md-3">
            <div className="card shadow mb-3" id="featuredVehicle1" >
                <img src={props.props.attributes.image_url} className="card-img-top" alt="featured vehicle #1"/> 

                <div className="card-body">
                    <h5 className="card-title">{props.props.attributes.make} {props.props.attributes.model}</h5>
                    <h6>${props.props.attributes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h6>
                    <Link to={`/vehicles/${props.props.attributes.slug}`} className="btn btn-danger">More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard;