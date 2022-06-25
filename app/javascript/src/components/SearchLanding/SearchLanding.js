import React from "react";
import '../../assets/css/landing.css';
import { useNavigate } from 'react-router-dom';
const SearchLanding = () => {

    const navigate = useNavigate();
    
    return(

        <div className="py-5 text-center container-fluid bg-image" id="searchContainer">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-dark text-white">Search For a Vehicle</h1>
                    <div className="control-group">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <select className="form-select" aria-label="Default select example" id="makeSelect">
                                    <option defaultValue>Make</option>
                                    <option value="1">Honda</option>
                                    <option value="2">Kia</option>
                                    <option value="3">Volkswagen</option>
                                  </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <select className="form-select" aria-label="Default select example" id="modelSelect">
                                    <option defaultValue>Model</option>
                                    <option value="1">Accord</option>
                                    <option value="2">Optima</option>
                                    <option value="3">Jetta</option>
                                  </select>
                            </div>
                        </div>

                        <div className="row justify-content-center pt-3">
                          <div className="col-md-12 mb-3">
                                <button type="button" className="w-100 btn btn-danger" id="searchButton" onClick={ ()=>{
                                    navigate('/vehicles');
                                }}>Search</button>
                          </div>

                        </div>
                        </div>
                    </div>
              </div>
            </div>
            
    )
}

export default SearchLanding;