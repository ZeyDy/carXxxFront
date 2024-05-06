import React, { useState, useEffect } from 'react';
import { getCarsByOwner, deleteCar } from '../services/CarService';
import { useNavigate, Link } from 'react-router-dom';

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      loadCars(token);
    } else {
      setError('Nėra prieigos rakto. Būtina prisijungti.');
    }
  }, []);

  const loadCars = (token) => {
    getCarsByOwner(token)
      .then(response => {
        console.log('Automobiliai gaunami iš serverio:', response.data);
        if (Array.isArray(response.data)) {
          setCars(response.data);
        } else {
          setError('Gauta netinkama duomenų struktūra iš serverio.');
        }
      })
      .catch(error => {
        const errorMessage = error.response ? `Klaida gaunant automobilius: ${error.response.data.message}` : error.message;
        console.error(errorMessage);
        setError('Nepavyko gauti automobilių informacijos.');
      });
  };

  const handleDeleteCar = (carId) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('Nėra prieigos rakto. Būtina prisijungti.');
      return;
    }

    deleteCar(carId, token)
      .then(() => {
        setCars(cars.filter(car => car.id !== carId)); // Atnaujinti sąrašą po ištrinimo
      })
      .catch(error => {
        const errorMessage = error.response ? `Klaida ištrinant automobilį: ${error.response.data.message}` : error.message;
        console.error(errorMessage);
        setError('Nepavyko ištrinti automobilio.');
      });
  };

  if (error) {
    return <div>Klaida: {error}</div>;
  }

  return (
    <div>
      <h1>Mano automobiliai</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.make} {car.model} {car.plateNumber}
            <button onClick={() => navigate(`/update/${car.id}`)}>Redaguoti</button>
            <button onClick={() => handleDeleteCar(car.id)}>Ištrinti</button>
          </li>
        ))}
      </ul>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default MyCars;
