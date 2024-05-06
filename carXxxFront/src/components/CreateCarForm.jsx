import React, { useState } from 'react';
import { createCar } from '../services/CarService';
import { useNavigate } from 'react-router-dom';

const CreateCarForm = () => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    plateNumber: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('accessToken'); // Įsitikinkite, kad token yra

    if (!token) {
      setError('Trūksta autentifikacijos rakto.');
      return;
    }

    createCar(car, token)
      .then(response => {
        alert('Automobilis sėkmingai sukurtas.');
        navigate('/mycars');
      })
      .catch(error => {
        const errorMessage = error.response ? error.response.data.message : error.message;
        setError(`Nepavyko sukurti automobilio. Klaida: ${errorMessage}`);
        setSuccess('');
      });
  };

  return (
    <div>
      <h2>Sukurti naują automobilį</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Markė:</label>
          <input
            name="make"
            value={car.make}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Modelis:</label>
          <input
            name="model"
            value={car.model}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Valstybiniai numeriai:</label>
          <input
            name="plateNumber"
            value={car.plateNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Sukurti</button>
      </form>
    </div>
  );
};

export default CreateCarForm;
