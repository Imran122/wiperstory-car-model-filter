import React from 'react';

import './MakeChild.css'
import { Icon } from '@iconify/react';

import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const MakeChild = (props) => {

    const { Make, Slugmake } = props.company;
    const history = useHistory()

    const nextPage = () => {

        history.push(`make/${Slugmake}`)

    }
    return (
        <>
            <div class="item">

                <Button className="btn-make-name text-dark" onClick={nextPage} variant="outline-secondary"><Icon icon="ph:arrow-fat-lines-right-fill" /> {Make}</Button>



            </div>
        </>
    );
};

export default MakeChild;