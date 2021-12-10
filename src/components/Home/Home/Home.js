import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CarForm from '../CarForm/CarForm';
import Service from '../Services/Service';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div>
            <Helmet>‍
                <title>wiper story</title>
                <meta name="description" content="wiper story" />
                <meta property="og:title" content="wiper story" />
                <meta property="og:description" content="wiper story" />
            </Helmet>
            <Banner></Banner>
            <Advertise></Advertise>
            <CarForm></CarForm>
            <Service></Service>
        </div>
    );
};

export default Home;