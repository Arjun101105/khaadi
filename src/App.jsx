import { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6 md:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">🔥 Big Reveal Coming Soon! 🔥</h1>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Khadi Clothing</h1>
      <p className="text-lg sm:text-xl mb-6 text-gray-400 text-center">Mark Your Calendars - 03/03/2025</p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xl sm:text-2xl md:text-3xl font-semibold">
        <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24">{days}d</div>
        <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24">{hours}h</div>
        <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24">{minutes}m</div>
        <div className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 rounded-lg w-16 sm:w-20 md:w-24">{seconds}s</div>
      </div>
    </div>
  );
};

export default function App() {
  return <CountdownTimer />;
}
