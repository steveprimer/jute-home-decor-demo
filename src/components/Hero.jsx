import React from "react";

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white px-4">
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Handcrafted Nigerian Elegance for Your Home
        </h1>
        <p className="mb-6 text-lg">
          Beautifully woven jute pieces that bring warmth and nature indoors.
        </p>
        <a
          href="#products"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full font-semibold scroll-smooth transition duration-300"
        >
          View Our Creations
        </a>
      </div>
    </section>
  );
}
