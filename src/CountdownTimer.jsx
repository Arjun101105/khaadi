import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const targetDate = new Date("2025-03-03T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(targetDate - new Date().getTime());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (ms) => {
      const days = Math.floor(ms / (1000 * 60 * 60 * 24));
      const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((ms / (1000 * 60)) % 60);
      const seconds = Math.floor((ms / 1000) % 60);
      return { days, hours, minutes, seconds };
    };
  
    const { days, hours, minutes, seconds } = formatTime(timeLeft);
  
    return (
      <div className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:px-8 w-full bg-black">
        {/* Countdown Timer */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
            Launching in . . .
          </h1>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-2xl font-semibold">
            <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 text-white rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
              {days}d
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 text-white rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
              {hours}h
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 text-white rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
              {minutes}m
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 text-white rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
              {seconds}s
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CountdownTimer;