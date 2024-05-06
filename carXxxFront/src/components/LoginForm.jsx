import React, { useState } from 'react';
import { signIn } from '../services/CarService'; // arba '../services/CarService', jei ten laikote signIn funkciją
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
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
        localStorage.setItem('accessToken', response.data.accessToken);
        // Čia išsaugokite gautą JWT, pvz., į sessionStorage arba localStorage
        // ir nukreipkite vartotoją į kitą puslapį arba atnaujinkite būseną
        navigate('/home');
      })
      .catch(error => {
        console.error('Login error:', error);
        // Čia rodykite klaidos pranešimą vartotojui, jei prisijungimas nepavyko
        setLoginError('Neteisingas vartotojo vardas arba slaptažodis.');
        
      });
  };

  return (
    <form className='enter-page-main' onSubmit={handleSubmit}>
      <label htmlFor="Username">Username</label>
      <input
        type="text"
        name="username"
        value={loginData.username}
        onChange={handleInputChange}
        placeholder="Username"
        required
      />
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {loginError && <div className="login-error">{loginError}</div>} {/* Čia rodomas klaidos pranešimas */}
    </form>
  );
};

export default LoginForm;