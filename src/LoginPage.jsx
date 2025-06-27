import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from './assets/game.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    localStorage.setItem('username', username);
    navigate('/qr');
  };


  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex items-center justify-center">
      
      <div className="absolute top-[-80px] left-[-80px] w-56 h-56 bg-yellow-500 rounded-full blur-[40px] opacity-40 z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-56 h-56 bg-yellow-500 rounded-full blur-[40px] opacity-40 z-0" />

      <div className="relative z-10 max-w-4xl w-full grid grid-cols-2 rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-zinc-950 p-12 flex items-center justify-center min-h-[400px]">
          <img src={loginImage} alt="Login illustration" className="w-full max-w-[500px]" />
        </div>

        <div className="bg-white p-8 md:p-12 flex flex-col justify-center relative">
          <h2 className="text-5xl tracking-widest font-semibold mb-6 text-zinc-800 text-center" style={{ fontFamily: "Barriecito" }}>
            {'LOGIN'.split('').map((char, index) => (
                    <span
                    key={index}
                    className="inline-block transition-colors duration-100 hover:text-pink-500"
                    style={{ transitionDelay: `${index * 5}ms` }}
                    >
                    {char}
                    </span>
                ))}</h2>
          <form className="space-y-5" onSubmit={handleLogin}>
            <input
              name="username"
              type="text"
              placeholder="User name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            
            <button
              type="submit"
              className="w-full bg-zinc-950 text-white py-2 rounded-lg shadow hover:bg-pink-600"
            >
              Login
            </button>
            <div className="text-center mt-3">
              <a href="/register" className="text-sm text-pink-500 hover:underline">
                Don't have an account? Register
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
