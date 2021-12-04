import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CarForm from '../CarForm/CarForm';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <CarForm></CarForm>
            <Service></Service>
        </div>
    );
};

export default Home;