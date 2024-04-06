import React, { useState, useEffect } from "react"
import { carsList, deleteCar } from "../services/CarService"
import { useNavigate } from "react-router-dom"

const List = () => {

    const [cars, setCars] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllCars();
    }, [])

    function getAllCars() {
        carsList().then((response) => {
            setCars(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewCar() {
        navigator('/addcar');

    }

    function updateCar(id) {
        navigator(`/editcar/${id}`);
    }

    function removeCar(id) {
        console.log(id);

        deleteCar(id).then((response) => {
            getAllCars();
        }).catch(error => {
            console.error(error);
        })
    }



    return (
        <div className="container">
            <h2>List of cars</h2>
            <button className="btn btn-primary mb-2" onClick={addNewCar}>Add Car</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Car Id</th>
                        <th>Car Plate Number</th>
                        <th>Car Make</th>
                        <th>Car Model</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car =>
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.plateNumber}</td>
                                <td>{car.make}</td>
                                <td>{car.model}</td>
                                <td>
                                    <button className="bt btn-info" onClick={() => updateCar(car.id)}>Update</button>
                                    <button className="bt btn-danger" color="red" onClick={() => removeCar(car.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List