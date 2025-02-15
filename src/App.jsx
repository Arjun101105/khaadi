import { useState, useEffect } from "react";
import backgroundImage from "/backgroundImage.jpeg"; // Import if using a local image

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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6 md:px-8">
      {/* Background Image with Portrait and Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Apply the background image
          backgroundSize: 'contain', // Ensure the whole image is visible
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', // Prevent image repetition
        }}
      ></div>

      {/* Dark Semi-transparent Transparent Card with Correct Opacity */}
      <div
        className="absolute bottom-0 w-full p-6 sm:p-8 rounded-lg shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark semi-transparent black card
        }}
      >
        {/* Big Reveal Text with Flexbox */}
        <h1 className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          <span className="mr-2"></span> Big Reveal Coming Soon! <span className="ml-2"></span>
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Khadi Clothing</h1>
        <p className="text-lg sm:text-xl mb-6 text-center text-gray-400">
          Mark Your Calendars - 03/03/2025
        </p>
        {/* Adjusted Timer Sizes for Smaller Screens */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-2xl font-semibold">
          <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
            {days}d
          </div>
          <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
            {hours}h
          </div>
          <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
            {minutes}m
          </div>
          <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24 shadow-lg">
            {seconds}s
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <CountdownTimer />;
}
