import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CarForm from '../CarForm/CarForm';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <CarForm></CarForm>

        </div>
    );
};

export default Home;