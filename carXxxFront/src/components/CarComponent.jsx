import React, { useEffect, useState } from 'react'
// import { changeCar, createCar, getCar } from '../services/CarService'
import { useNavigate, useParams } from 'react-router-dom'

const CarComponent = () => {

    const [plateNumber, setPlateNumber] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    const { id } = useParams();

    const [errors, setErrors] = useState({
        plateNumber: '',
        make: '',
        model: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getCar(id).then((response) => {
                setPlateNumber(response.data.plateNumber);
                setMake(response.data.make);
                setModel(response.data.model);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrChangeCar(e) {
        e.preventDefault();
        if (validateForm()) {

            const car = { plateNumber, make, model };
            console.log(car);

            if (id) {
                changeCar(id, car).then((response) => {
                    console.log(response.data);
                    navigator('/allcars');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createCar(car).then((response) => {
                    console.log(response.data);
                    navigator('/allcars');
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };
        if (plateNumber.trim()) {
            errorsCopy.plateNumber = '';
        } else {
            errorsCopy.plateNumber = 'Number plate is required';
            valid = false;
        }

        if (make.trim()) {
            errorsCopy.make = '';
        } else {
            errorsCopy.make = 'Make is required';
            valid = false;
        }

        if (model.trim()) {
            errorsCopy.model = '';
        } else {
            errorsCopy.model = 'Model is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;

    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Car</h2>
        } else {
            return <h2 className='text-center'>Add Car</h2>
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-labe'>Plate number: </label>
                                <input type='text'
                                    placeholder='Enter plate number'
                                    name='plateNumber'
                                    value={plateNumber}
                                    className={`form-control ${errors.plateNumber ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPlateNumber(e.target.value)}
                                ></input>
                                {errors.plateNumber && <div className='invalid-feedback'> {errors.plateNumber}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-labe'>Make: </label>
                                <input type='text'
                                    placeholder='Enter car make'
                                    name='make'
                                    value={make}
                                    className={`form-control ${errors.make ? 'is-invalid' : ''}`}
                                    onChange={(e) => setMake(e.target.value)}
                                ></input>
                                {errors.make && <div className='invalid-feedback'> {errors.make}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-labe'>Model: </label>
                                <input type='text'
                                    placeholder='Enter model'
                                    name='model'
                                    value={model}
                                    className={`form-control ${errors.model ? 'is-invalid' : ''}`}
                                    onChange={(e) => setModel(e.target.value)}
                                ></input>
                                {errors.model && <div className='invalid-feedback'> {errors.model}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrChangeCar}>Submit</button>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CarComponent