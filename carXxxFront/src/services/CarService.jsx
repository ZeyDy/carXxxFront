import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/allcars';
const REST_API_ADD_URL = 'http://localhost:8080/api/createcar';
const REST_API_URL = 'http://localhost:8080/api';

export const carsList = () => axios.get(REST_API_BASE_URL);
export const createCar = (car) => axios.post(REST_API_ADD_URL, car);
export const getCar = (carId) => axios.get(REST_API_URL + '/' + carId);
export const changeCar = (carId, car) => axios.put(REST_API_URL + '/update/' + carId, car);
export const deleteCar = (carId) => axios.delete(REST_API_URL + '/delete/' + carId); 