import React, { useState } from 'react';
import { updateCar } from '../services/CarService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCarForm = ({ currentCarData }) => {
  const [car, setCar] = useState(currentCarData || {});
  const [error, setError] = useState('');
  const { carId } = useParams();
  const navigate = useNavigate(); // Naudojamas nukreipimui

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('accessToken'); // Įsitikinkite, kad čia naudojate teisingą raktą

    if (!carId) {
      setError('Trūksta automobilio ID.');
      return;
    }

    if (!token) {
      setError('Trūksta autentifikacijos rakto.');
      return;
    }

    updateCar(carId, car, token)
      .then((response) => {
        alert('Automobilis sėkmingai atnaujintas.'); // Pridedame pranešimą apie sėkmę
        navigate('/home'); // Nukreipia į pagrindinį puslapį po sėkmingo atnaujinimo
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.message : error.message;
        setError(`Nepavyko atnaujinti automobilio informacijos. Klaida: ${errorMessage}`);
        console.error('Klaida:', error);
      });
  };

  return (
    <div>
      {error && <div>Klaida: {error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Markė:</label>
          <input
            name="make"
            value={car.make || ''}
            onChange={handleInputChange}
          />
          <label>Modelis:</label>
          <input
            name="model"
            value={car.model || ''}
            onChange={handleInputChange}
          />
          <label>Numeriai:</label>
          <input
            name="plateNumber"
            value={car.plateNumber || ''}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Atnaujinti</button>
      </form>
    </div>
  );
};

export default UpdateCarForm;
