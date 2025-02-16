import React from "react";
import CountdownTimer from "./CountdownTimer";

const KhadiIndia = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-gray-900"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "contain", // Ensures the whole image is visible
        backgroundPosition: "top center", // Adjusts position to prevent cropping
      }}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
        {/* Primary Logo Section */}
        <header className="py-10 bg-[rgba(234,224,200,0.6)] py-8 sm:py-12 px-4 sm:px-6 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase text-gray-900">
            Khadi India
          </h1>
          <p className="text-base sm:text-lg italic mt-2 text-gray-900">
            Heritage Woven into Luxury
          </p>
        </header>

        {/* Why Khadi India Section */}
        <section className="bg-[rgba(234,224,200,0.6)] py-8 sm:py-12 px-4 sm:px-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
              Why Khadi India?
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-900">
              Because it’s more than a fabric—it’s a revolution.
              <br />
              Because each weave carries history—and now, it’s time to shape
              the future.
              <br />
              Because true luxury is not mass-produced—it’s crafted with soul,
              by artisans who have inherited this skill for generations.
            </p>
          </div>
        </section>

        {/* Founder's Story Section */}
        <section className="max-w-4xl w-full bg-[rgba(0,0,0,0.6)] text-white rounded-lg p-6 sm:p-12 shadow-lg mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="font-serif text-base sm:text-lg leading-relaxed">
            I grew up watching the world embrace international luxury while our
            own heritage fabrics remained underappreciated.
            <strong> Khadi</strong>—the very fabric that played a pivotal role
            in India’s freedom struggle—was seen as outdated, a relic of the
            past. That realization hit me hard.
          </p>
          <p className="mt-4 font-serif text-base sm:text-lg leading-relaxed">
            Why was the world paying thousands for handcrafted fabrics from
            elsewhere, while our own artisans, weaving stories into every
            thread, were struggling to survive? Why was <strong>Khadi</strong>{" "}
            not seen as luxury?
          </p>
          <p className="mt-4 font-serif text-base sm:text-lg leading-relaxed">
            That’s where <strong>Khadi India</strong> was born—not just as a
            brand, but as a movement. A movement to bring Indian craftsmanship
            back into global relevance. A movement to show that luxury is not
            defined by a foreign label, but by the hands that create it.
          </p>
        </section>

        {/* Revolution Statement Section */}
        <section className="max-w-4xl w-full px-4 sm:px-6 py-8 sm:py-12 text-center bg-[rgba(0,0,0,0.6)] text-white rounded-lg shadow-lg mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            We are here to disrupt. To redefine. To reclaim.
          </h2>
          <p className="text-base sm:text-lg font-medium mt-4">
            <strong>March 3rd, 2025 – The Revolution Begins</strong>
          </p>
          <p className="text-base sm:text-lg italic mt-4">
            This is not just a launch—it’s a statement.
            <br />A statement that India does not follow trends; it creates
            them.
          </p>
          <p className="text-base sm:text-lg mt-4">
            We are bringing heritage to the streets, tradition to modernity, and
            Khadi to the world.
          </p>
          <p className="text-lg sm:text-xl font-semibold mt-6">
            Join the movement. Own the legacy. Make history.
          </p>
        </section>
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 w-full flex justify-center mt-8 sm:mt-12">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default KhadiIndia;
