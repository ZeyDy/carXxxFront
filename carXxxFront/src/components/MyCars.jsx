import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  console.log(localStorage.getItem('accessToken'));


  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.get('/api/mycars', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (Array.isArray(response.data)) {
          setCars(response.data);
        } else {
          setError('Gauta netinkama duomenų struktūra iš serverio.');
        }
      })
      .catch(error => {
        // Čia yra modifikuotas catch blokas
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
  

  // Jei yra klaida, mes ją atvaizduojame
  if (error) {
    return <div>Klaida: {error}</div>;
  }

  return (
    <div>
      <h1>Mano automobiliai</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.make} {car.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyCars;

