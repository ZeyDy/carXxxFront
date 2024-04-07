import React, { useEffect, useState } from 'react';

function OruStotelesKomponentas() {
    const [stoteles, setStoteles] = useState([]);
    const [pasirinktasIrenginys, setPasirinktasIrenginys] = useState('');

    useEffect(() => {
        fetch('https://eismoinfo.lt/weather-conditions-service')
            .then(response => response.json())
            .then(data => {
                setStoteles(data); // Čia manome, kad gauname masyvą su visomis stotelėmis
            })
            .catch(error => console.error('Klaida gaunant duomenis:', error));
    }, []);

    // Funkcija, kuri keičia pasirinktą įrenginį
    const handleIrenginioKeitimas = (e) => {
        setPasirinktasIrenginys(e.target.value);
    };

    // Ieškome pasirinktos stotelės duomenų pagal įrenginį
    const pasirinktosStotelesDuomenys = stoteles.find(stotele => stotele.irenginys === pasirinktasIrenginys);

    return (
        <div>
            <h1>Pasirinkite įrenginį:</h1>
            <select value={pasirinktasIrenginys} onChange={handleIrenginioKeitimas}>
                <option value="">Pasirinkite...</option>
                {stoteles.map(stotele => (
                    <option key={stotele.id} value={stotele.irenginys}>{stotele.irenginys}</option>
                ))}
            </select>

            {pasirinktosStotelesDuomenys && (
                <div>
                    <h2>Oras įrenginyje: {pasirinktosStotelesDuomenys.irenginys}</h2>
                    <p>Temperatūra: {pasirinktosStotelesDuomenys.oro_temperatura}°C</p>
                    <p>Dangos temperatūra: {pasirinktosStotelesDuomenys.dangos_temperatura} °C</p>
                    <p>Kelio danga: {pasirinktosStotelesDuomenys.kelio_danga}</p>
                    <p>Krituliai: {pasirinktosStotelesDuomenys.krituliu_tipas}</p>
                    <p>Vėjo greitis: {pasirinktosStotelesDuomenys.vejo_greitis_vidut} m/s</p>
                    {/* ... atvaizduokite kitus duomenis pagal poreikį */}
                </div>
            )}
        </div>
    );
}

export default OruStotelesKomponentas;
