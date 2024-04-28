// CHATO


import React, { useState } from 'react';
import axios from 'axios';
import { signUp } from '../services/CarService';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Tai neleidžia puslapiui perkrauti pateikus formą

  //   axios.post('/api/auth/signup', formData, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     // Čia galite apdoroti sėkmingą registraciją, pavyzdžiui, nukreipti vartotoją į prisijungimo puslapį
  //   })
  //   .catch(error => {
  //     console.error('Registration error:', error);
  //     // Čia galite apdoroti klaidas, rodyti pranešimus vartotojui ir pan.
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData) // Čia naudojate anksčiau importuotą signUp funkciją
      .then(response => {
        console.log(response.data);
        // Įvykdykite veiksmus po sėkmingos registracijos
      })
      .catch(error => {
        console.error('Registration error:', error);
        // Įvykdykite klaidų tvarkymą čia
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
