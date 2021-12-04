import React from 'react';
import { Col, Container, Form, FormSelect, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {

    return (
        <div>
            <section class="home  d-flex align-items-center" id="header">
                <div class="container text-light" data-aos="fade-right">
                    <h1 class="headline">Best <span class="home_text">CAR MODEL</span><br />Choice Plans For You</h1>
                    <p class="para para-light py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempore accusamus quis magnam doloremque itaque ad modi, pariatur iste labore similique officiis impedit aspernatur aperiam facere architecto. Eligendi, repellendus inventore!</p>

                    <div class="my-3 button-banner">
                        <a class="btn-banner" href="#plans">View Plans</a>
                    </div>

                </div>


            </section>

        </div>
    );
};

export default Banner;