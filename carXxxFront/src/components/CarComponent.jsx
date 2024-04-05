import React, { useState } from 'react'
import { createCar } from '../services/CarService'
import { useNavigate } from 'react-router-dom'

const CarComponent = () => {

    const [plateNumber, setPlateNumber] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    const navigator = useNavigate();

    function saveCar(e) {
        e.preventDefault();

        const car = { plateNumber, make, model };
        console.log(car);

        createCar(car).then((response) => {
            console.log(response.data);
            navigator('/allcars');
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add car</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-labe'>Plate number: </label>
                                <input type='text'
                                    placeholder='Enter plate number'
                                    name='plateNumber'
                                    value={plateNumber}
                                    className='form-control'
                                    onChange={(e) => setPlateNumber(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-labe'>Make: </label>
                                <input type='text'
                                    placeholder='Enter car make'
                                    name='make'
                                    value={make}
                                    className='form-control'
                                    onChange={(e) => setMake(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-labe'>Model: </label>
                                <input type='text'
                                    placeholder='Enter model'
                                    name='model'
                                    value={model}
                                    className='form-control'
                                    onChange={(e) => setModel(e.target.value)}
                                ></input>
                            </div>
                            <button className='btn btn-success' onClick={saveCar}>Submit</button>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CarComponent