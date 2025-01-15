import React, { useState, FormEvent } from "react";
import axios from "axios";

const Login_test: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:80/HYMAS/backend/api/login.php', {
                username,
                password,
            });

            if (response.data.error) {
                setMessage(response.data.error);
            } else {
                setMessage(`Welcome! User ID: ${response.data.user_id}`);
            }
        } catch (err) {
            setMessage('Error: Unable to connect to the server.');
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login_test;
