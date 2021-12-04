import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Advertise.css'
import advertise from '../../../images/banner1.jpg'
const Advertise = () => {
    return (
        <>
            <Container className="banner-add mb-5">
                <Row className="justify-content-md-center">

                    <Col md="auto">
                        <Card>
                            <Card.Img variant="top" src={advertise} />

                        </Card>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default Advertise;