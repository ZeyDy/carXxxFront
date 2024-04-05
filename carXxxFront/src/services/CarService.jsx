import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/allcars';
const REST_API_ADD_URL = 'http://localhost:8080/api/createcar';

export const carsList = () => axios.get(REST_API_BASE_URL);
export const createCar = (car) => axios.post(REST_API_ADD_URL, car);
