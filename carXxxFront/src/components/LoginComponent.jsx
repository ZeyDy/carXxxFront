import React, { useState } from 'react';
import { signIn } from '../services/CarService'; // Įsitikinkite, kad kelias teisingas

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await signIn.login(username, password);
            console.log('Prisijungimas sėkmingas:', response);
            // Čia galite nukreipti naudotoją į kitą puslapį arba atnaujinti būseną
        } catch (error) {
            console.error('Klaida prisijungiant:', error);
            // Čia galite rodyti klaidos pranešimą
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Vartotojo vardas:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Slaptažodis:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Prisijungti</button>
        </form>
    );
}

export default LoginComponent;
