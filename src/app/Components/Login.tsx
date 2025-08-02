import React, { useState } from 'react';
import Image from 'next/image';

const Login = () => {
  const [loginType, setLoginType] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const selectLoginType = (type) => {
    setLoginType(type);
    setEmail('');
    setPassword('');
  };

  return (
    <div
      className="login-page bg-cover bg-center min-h-screen flex flex-col justify-center items-center px-4 relative"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >

      {/* Bottom-right text */}
      <p className="absolute bottom-4 right-4 text-xs text-black">
        Don't have an account? <span className="underline cursor-pointer hover:text-gray-700">Sign up!</span>
      </p>

      <h1 className="title text-3xl font-bold text-center mb-20 sm:text-4xl sm:mb-10">
        PiggyQuest
      </h1>

      <div className="relative flex justify-center mb-12 sm:mb-16">
        <Image
          src="/assets/piggy.png"
          alt="Piggy"
          width={250}
          height={150}
          className="piggy-image transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Container with fixed height to prevent layout shift */}
      <div className="button-form-container relative w-full max-w-xs min-h-[250px]">
        {/* Buttons container */}
        <div
          className={`flex flex-col items-center gap-6 sm:gap-8 transition-opacity duration-300 ${
            loginType ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={() => selectLoginType('parents')}
            className="login-button bg-green-300 hover:bg-green-400 text-base font-bold py-3 px-6 rounded-full shadow-md w-full sm:text-lg sm:py-4 sm:px-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Parents Login
          </button>
          <button
            onClick={() => selectLoginType('kids')}
            className="login-button bg-green-300 hover:bg-green-400 text-base font-bold py-3 px-6 rounded-full shadow-md w-full sm:text-lg sm:py-4 sm:px-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Kids Login
          </button>
        </div>

        {/* Login form container, absolute positioned on top */}
        {loginType && (
          <form
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl border border-green-200"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Logging in as ${loginType} with email: ${email}`);
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="login-button bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md w-full sm:text-lg sm:py-4 sm:px-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setLoginType(null)}
              className="mt-2 text-sm text-green-600 hover:underline"
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
