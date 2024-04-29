import React from "react";
import Logo from '../carxLogo.png'
import DigitalClock from "./DigitalClock";
import OruStotelesKomponentas from "./OruStotelesKomponentas";
import { useNavigate, Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className="main-body">
            <header className="container">
                <img className="logo" src={Logo} alt="Logo"></img>
                <DigitalClock />
                <nav>
                    <a href="#">Home</a>
                    {/* <a href="#">My cars</a> */}
                    <Link to="/mycars">My Cars</Link>
                    <a href="#">She`s</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                    <Link to="/login">Log Out</Link>
                </nav>
            </header>
            <main className="main-container">
                <div className="stoteles"><OruStotelesKomponentas /></div>
                <div></div>
            </main>
            <footer></footer>
        </div>
    );
}

export default HomePage