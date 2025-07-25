import React from "react";

export default function FooterCTA() {
  return (
    <section className="bg-white py-16 text-center px-6">
      <h2 className="text-3xl font-bold text-neutral-800 mb-4">
        Ready to add warmth to your space?
      </h2>
      <p className="text-neutral-600 mb-6">
        Let’s bring your home to life with handcrafted Nigerian jute decor.
      </p>
      <a
        href="https://wa.me/2348123456789?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20handmade%20jute%20home%20decor!"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold"
      >
        Chat With Us on WhatsApp
      </a>
    </section>
  );
}
