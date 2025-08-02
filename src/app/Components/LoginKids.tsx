import React, { useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const Login = () => {
  const [loginType, setLoginType] = useState<string | null>(null);
  const [loginType, setLoginType] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [piggySrc, setPiggySrc] = useState("/assets/piggy.png");
  const [piggyAnimClass, setPiggyAnimClass] = useState("");
  const [showSmallPiggy, setShowSmallPiggy] = useState(false);
  const [smallPiggyAnimClass, setSmallPiggyAnimClass] = useState("");

  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  const selectLoginType = (type: string) => {
    setPiggyAnimClass('animate-roll-left');
    setSmallPiggyAnimClass('');
    setShowSmallPiggy(false);

    setTimeout(() => {
      setPiggyAnimClass("animate-roll-right-back");
      setLoginType(type);

      if (type === "kids") {
        setTimeout(() => {
          setShowSmallPiggy(true);
          setSmallPiggyAnimClass("animate-roll-right-back");
        }, 100);
      }
    }, 1000);
  };

  return (
    <div
      className="login-page bg-cover bg-center min-h-screen flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {/* 🎉 Confetti Explosion */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          gravity={0.3} // makes it fall faster
          numberOfPieces={600} // more confetti!
          recycle={false} // one-time burst
        />
      )}

      {/* Bottom-right text */}
      <p className="absolute bottom-4 right-4 text-xs text-black">
        {"Don't have an account? "}
        <span className="underline cursor-pointer hover:text-gray-700">
          Sign up!
        </span>
      </p>

      <h1 className="title text-3xl font-bold text-center mb-20 sm:text-4xl sm:mb-10">
        PiggyQuest{" "}
        {loginType === "kids" && (
          <span className="text-sm font-normal align-top">kids</span>
        )}
      </h1>

      {/* Piggy display */}
      <div className="relative flex justify-center mb-12 sm:mb-16">
        <div className="relative flex items-end gap-2">
          {/* Big Piggy */}
          <Image
            src={piggySrc}
            alt="Piggy"
            width={250}
            height={150}
            className={`piggy-image transition-transform duration-300 ease-in-out hover:scale-110 ${piggyAnimClass}`}
          />

          {/* Small Piggy (same image, resized) */}
          {showSmallPiggy && (
            <Image
              src={piggySrc}
              alt="Small Piggy"
              width={100}
              height={60}
              className={`transition-transform duration-300 ease-in-out ${smallPiggyAnimClass}`}
            />
          )}
        </div>
      </div>

      {/* Button/Form Container */}
      <div className="button-form-container relative w-full max-w-xs min-h-[250px]">
        {/* Buttons */}
        <div
          className={`flex flex-col items-center gap-6 sm:gap-8 transition-opacity duration-300 ${
            loginType ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button
            onClick={() => selectLoginType("parents")}
            className="login-button bg-green-300 hover:bg-green-400 text-base font-bold py-3 px-6 rounded-full shadow-md w-full sm:text-lg sm:py-4 sm:px-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Parents Login
          </button>
          <button
            onClick={() => selectLoginType("kids")}
            className="login-button bg-green-300 hover:bg-green-400 text-base font-bold py-3 px-6 rounded-full shadow-md w-full sm:text-lg sm:py-4 sm:px-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Kids Login
          </button>
        </div>

        {/* Login Form */}
        {loginType && (
          <form
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl border border-green-200"
            onSubmit={(e) => {
              e.preventDefault();
              setPiggySrc("/assets/piggywink.png");
              setShowConfetti(true);

              setTimeout(() => {
                setShowConfetti(false);
                if (loginType === "parents") {
                  window.location.href = "/Parents/HomePage";
                } else if (loginType === "kids") {
                  window.location.href = "/Kids/HomePage";
                }
              }, 3000);
            }}
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="login-input w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
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
              onClick={() => {
                setLoginType(null);
                setPiggySrc("/assets/piggy.png");
                setShowSmallPiggy(false);
              }}
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
