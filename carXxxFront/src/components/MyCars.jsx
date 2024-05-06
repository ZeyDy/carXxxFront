import React, { useState, useEffect } from 'react';
import { getCarsByOwner } from '../services/CarService'; // Pakeiskite kelią į jūsų serviso failą
import { useNavigate } from 'react-router-dom';
import { updateCar } from '../services/CarService';


const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const goToUpdateForm = (carId) => {
    navigate(`/update/${carId}`);
  };
  
  

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
          console.error(errorMessage);
          setError('Nepavyko gauti automobilių informacijos.');
        });
    } else {
      setError('Nėra prieigos rakto. Būtina prisijungti.');
    }
  }, []);

  if (error) {
    return <div>Klaida: {error}</div>;
  }

  return (
    <div>
      <h1>Mano automobiliai</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.make} {car.model}
            {/* Pridėkite car.id kaip argumentą goToUpdateForm funkcijai */}
            <button onClick={() => goToUpdateForm(car.id)}>Redaguoti</button>
          </li>
         ))}
      </ul>

    </div>
  );
};

export default MyCars;
