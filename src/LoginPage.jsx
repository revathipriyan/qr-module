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
      
      <div className="absolute top-[-80px] left-[-80px] w-56 h-56 bg-yellow-300 rounded-full blur-[100px] opacity-40 z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-56 h-56 bg-yellow-300 rounded-full blur-[100px] opacity-40 z-0" />

      <div className="relative z-10 max-w-4xl w-full grid grid-cols-2 rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-zinc-950 p-12 flex items-center justify-center min-h-[400px]">
          <img src={loginImage} alt="Login illustration" className="w-full max-w-[500px]" />
        </div>

        <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-5xl tracking-widest font-semibold mb-6 text-zinc-800" style={{ fontFamily: "Barriecito" }}>LOGIN</h2>
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
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-cyan-500" />
                Remember me
              </label>
              <a href="#" className="text-pink-500 font-bold hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-950 text-white py-2 rounded-lg shadow hover:bg-pink-600"
            >
              Login
            </button>
            <div className="text-center text-sm text-gray-500">OR</div>
            <div className="flex justify-center gap-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6 cursor-pointer"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Google"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
