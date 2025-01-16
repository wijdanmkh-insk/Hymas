import React, { useState, FormEvent } from "react";
import Layout from "../others/Layout"; 
import White_layout from "../others/White_layout";
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); 

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <White_layout>
          <div className="flex flex-col items-center justify-between uppercase">
            <form
              onSubmit={handleSubmit}
              style={{ width: "300px" }}
            >
              <div className="flex justify-center mb-10">
                <img src="./src/assets/img/Logo hymas.png" className="w-32" alt="Logo Hymas" />
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 uppercase text-xs py-2 px-8 bg-hijau-tua text-white font-bold rounded-2xl hover:border-putih focus:outline-2 panehover:text-putih focus:ring-2"
                  onClick={() => navigate('/panel')}
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </White_layout>
        <div
          className="uppercase flex justify-center px-16 py-2 rounded-2xl text-hijau-muda bg-putih mt-10 cursor-pointer"
          onClick={() => navigate('/')}
        >
          kembali
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
