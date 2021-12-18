import { useEffect, useState } from 'react';

const useCarModel = () => {
    //set data in services
    const [carlist, setCarList] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('https://car-make-project.herokuapp.com/carlist')
            .then(response => response.json())
            .then(data => setCarList(data))
    }, [])

    return [carlist, setCarList]
}

export default useCarModel;