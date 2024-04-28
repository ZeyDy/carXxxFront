import React, { useState } from 'react';
import { signIn } from '../services/CarService'; // arba '../services/CarService', jei ten laikote signIn funkciją

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(loginData)
      .then(response => {
        console.log(response.data);
        // Čia išsaugokite gautą JWT, pvz., į sessionStorage arba localStorage
        // ir nukreipkite vartotoją į kitą puslapį arba atnaujinkite būseną
      })
      .catch(error => {
        console.error('Login error:', error);
        // Čia rodykite klaidos pranešimą vartotojui, jei prisijungimas nepavyko
      });
  };

  return (
    <form className='enter-page-main' onSubmit={handleSubmit}>
      <label for="Username">Username</label>
      <input
        type="text"
        name="username"
        value={loginData.username}
        onChange={handleInputChange}
        placeholder="Username"
        required
      />
      <label for="Password">Password</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;