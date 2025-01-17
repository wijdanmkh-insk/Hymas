import React, { useState, FormEvent } from "react";
import Layout from "../others/Layout"; 
import White_layout from "../others/White_layout";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Kembali_btn from "../button/Kembali_btn";
import logo from "../img/Logo_hymas.png";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
        const response = await axios.post('/backend/api/login.php', {
            username,
            password,
        });

        if (response.data.error) {
            setMessage(response.data.error);
        } else {
            navigate('/panel'); // Navigate to Panel_page.tsx
        }
    } catch (err) {
        setMessage('Error: Unable to connect to the server.');
        console.error(err);
    }
};

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen mx-6'>
        <White_layout>
          <div className="flex flex-col items-center justify-between uppercase">
            <form
              onSubmit={handleLogin}
              style={{ width: "300px" }}
            >
              <div className="flex justify-center mb-10">
                <img src={logo} className="w-32" alt="Logo Hymas" />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-hijau-tua text-xs">masukkan nama pengguna</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-hijau-tua focus:border-hijau-tua sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-hijau-tua text-xs">masukkan kata sandi</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-hijau-tua focus:border-hijau-tua sm:text-sm"
                />
              </div>

              {message && <p className="text-red-500 my-2 text-xs">{message}</p>}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 uppercase text-xs py-2 px-8 bg-hijau-tua text-white font-bold rounded-2xl hover:border-putih focus:outline-2 panehover:text-putih focus:ring-2"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </White_layout>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          <Kembali_btn></Kembali_btn>
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
