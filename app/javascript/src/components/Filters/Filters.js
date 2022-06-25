import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Filters = () => {
    return(
        <div className="col-md-4 mb-3">
            <h2>Filters</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Year
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>From</option>
                                        <option value="1">1996</option>
                                        <option value="2">1997</option>
                                        <option value="3">1998</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>To</option>
                                        <option value="1">2019</option>
                                        <option value="2">2020</option>
                                        <option value="3">2021</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Make
                        </button>
                    </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked/>
                            <label className="form-check-label">
                                Honda
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""/>
                            <label className="form-check-label">
                                Kia
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""/>
                            <label className="form-check-label">
                                Volkswagen
                            </label>
                        </div>
                    </div>
                </div>
                </div>




                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Model
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" checked/>
                                <label className="form-check-label">
                                    Accord
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" checked/>
                                <label className="form-check-label">
                                    Civic
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Insight
                                </label>
                            </div> 

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Ridgeline
                                </label>
                            </div> 
                        </div>
                    </div>


                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Color
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" checked/>
                                <label className="form-check-label">
                                    Blue
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" checked/>
                                <label className="form-check-label">
                                    Red
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Yellow
                                </label>
                            </div> 

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Black
                                </label>
                            </div> 
                        </div>
                    </div>
                </div>

            </div>

            <div className="d-grid gap-2 mt-3">
                <button className="btn btn-danger" type="button">Search</button>
            </div>



        </div>
    )
}

export default Filters;