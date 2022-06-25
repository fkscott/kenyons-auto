import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../../components/Navbar/Navbar';
import SearchLanding from '../../components/SearchLanding/SearchLanding';
import FeaturedCars from '../../components/FeaturedCars/FeaturedCars';

function Home(){
    return(
        <>
        <Navbar></Navbar>
        <SearchLanding></SearchLanding>
        <FeaturedCars></FeaturedCars>
        </>
    )
}

export default Home;