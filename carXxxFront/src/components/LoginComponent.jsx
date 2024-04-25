import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Siunčiame POST užklausą į back end su vartotojo vardu ir slaptažodžiu
      const response = await axios.post('/api/auth/signin', {
        username,
        password,
      });

      // Čia turėtumėte išsaugoti gautą JWT į saugyklą, pvz., sessionStorage ar localStorage
      // sessionStorage.setItem('token', response.data.accessToken);

      navigate('/home'); // nukreipia vartotoją į pagrindinį puslapį po sėkmingo prisijungimo
    } catch (error) {
      // Čia tvarkome klaidas, pvz., rodomas pranešimas, jei prisijungimas nesėkmingas
      console.error('Prisijungimo klaida', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Vartotojo vardas"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Slaptažodis"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Prisijungti</button>
    </form>
  );
};

export default LoginComponent;
