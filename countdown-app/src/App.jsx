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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-4">🔥 Big Reveal Coming Soon! 🔥</h1>
      <h1 className="text-4xl font-bold mb-4">Khadi Clothing</h1>
      <p className="text-lg mb-6 text-gray-400">Mark Your Calendars - 03/03/2025</p>
      <div className="flex space-x-6 text-3xl font-semibold">
        <div className="p-4 bg-gray-800 rounded-lg">{days}d</div>
        <div className="p-4 bg-gray-800 rounded-lg">{hours}h</div>
        <div className="p-4 bg-gray-800 rounded-lg">{minutes}m</div>
        <div className="p-4 bg-gray-800 rounded-lg">{seconds}s</div>
      </div>
    </div>
  );
};

export default function App() {
  return <CountdownTimer />;
}