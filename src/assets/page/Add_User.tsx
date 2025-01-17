import React, { useState, FormEvent } from "react";
import axios from "axios";

const Add_User: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleAddUser = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://hymas.tatsuyaryu.my.id/backend/api/login.php', {
                username,
                password,
            });

            if (response.data.error) {
                setMessage(response.data.error);
            } else {
                setMessage(response.data.message);
                setUsername('');
                setPassword('');
            }
        } catch (err) {
            setMessage('Error: Unable to connect to the server.');
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleAddUser}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Add_User;
