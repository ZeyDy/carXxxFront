import React from "react";
import Logo from '../carxLogo.png'
import DigitalClock from "./DigitalClock";
import OruStotelesKomponentas from "./OruStotelesKomponentas";

const HomePage = () => {
    return (
        <div className="main-body">
            <header className="container">
                <img className="logo" src={Logo} alt="Logo"></img>
                <DigitalClock />
                <nav>
                    <a class="active" href="#">Home</a>
                    <a href="#">Your cars</a>
                    <a href="#">She`s</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                </nav>
                <div class="user-actions">
                    <i class="fa fa-magnifying-glass"></i>
                    <i class="fa solid fa-cart-shopping"></i>
                    <i class="fa solid fa-user"></i>
                </div>
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