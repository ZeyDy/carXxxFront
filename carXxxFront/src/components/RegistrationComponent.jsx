import React, { useState } from 'react';
import { signUp } from '../services/CarService'; // Importuojama teisinga signUp funkcija

function RegistrationComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        setMessage('');
        setLoading(true);

        signUp(username, email, password).then(  // Naudokite signUp iš CarService
            response => {
                setMessage("Sėkmingai užsiregistravote!");
                setLoading(false);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="username">Vartotojo vardas</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">El. paštas</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Slaptažodis</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Kraunasi...' : 'Registruotis'}
                    </button>
                </div>
            </form>
            {message && (
                <div className="alert alert-danger">{message}</div>
            )}
        </div>
    );
}

export default RegistrationComponent;
