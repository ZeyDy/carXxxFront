import React from "react";
import Logo from '../carxLogo.png'
import DigitalClock from "./DigitalClock";
import OruStotelesKomponentas from "./OruStotelesKomponentas";
import { useNavigate, Link } from "react-router-dom";
import CarSelection from "./CarSelection";


const HomePage = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    // Išvalyti vartotojo prisijungimo duomenis
    localStorage.removeItem('accessToken'); // Šalinamas prisijungimo raktas
    // Galima pašalinti ir kitus duomenis pagal poreikį
    navigate('/enterpage'); // Nukreipimas į prisijungimo puslapį
  };

    return (
        <div className="main-body">
            <header className="container">
                <img className="logo" src={Logo} alt="Logo"></img>
                <DigitalClock />
                <nav>
                    <a href="#">Home</a>
                    <Link to="/mycars">My Cars</Link>
                    <Link to="/createcar">Add Car</Link>
                    <a href="#">She`s</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                    <button onClick={handleLogout}>Atsijungti</button>
                </nav>
            </header>
            <main className="main-container">
                <div className="stoteles"><OruStotelesKomponentas /></div>
                <div><CarSelection/></div>
            </main>
            <footer></footer>
        </div>
    );
}

export default HomePage