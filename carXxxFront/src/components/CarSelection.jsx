import React, { useState, useEffect } from 'react';
import { getCarsByOwner } from '../services/CarService';
import { useNavigate } from 'react-router-dom';

const CarSelection = () => {
  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      getCarsByOwner(token)
        .then(response => {
          if (Array.isArray(response.data)) {
            setCars(response.data);
          } else {
            setError('Gauta netinkama duomenų struktūra iš serverio.');
          }
        })
        .catch(error => {
          const errorMessage = error.response ?
            `Klaida gaunant automobilius: ${error.response.data.message}` :
            error.message;
          setError('Nepavyko gauti automobilių informacijos.');
        });
    } else {
      setError('Nėra prieigos rakto. Būtina prisijungti.');
    }
  }, []);

  const handleCarChange = event => {
    setSelectedCarId(event.target.value);
  };

  const selectedCar = cars.find(car => car.id.toString() === selectedCarId);

  return (
    <div>
      <h1>Pasirinkite automobilį:</h1>
      <select value={selectedCarId} onChange={handleCarChange}>
        <option value="">Pasirinkite...</option>
        {cars.map(car => (
          <option key={car.id} value={car.id}>{car.make} {car.model}</option>
        ))}
      </select>

      {selectedCar && (
        <div>
          <h2>Pasirinktas automobilis:</h2>
          <p>Markė: {selectedCar.make}</p>
          <p>Modelis: {selectedCar.model}</p>
          <p>Valstybinis numeris: {selectedCar.plateNumber}</p>
          {/* Čia gali būti rodoma daugiau informacijos apie automobilį, jei reikia */}
        </div>
      )}
    </div>
  );
};

export default CarSelection;
