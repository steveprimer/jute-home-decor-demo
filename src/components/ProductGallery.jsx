import React from "react";

const products = [
  {
    name: "Braided Jute Coaster Set",
    desc: "Set of 4 handmade coasters to add a rustic touch.",
    image: "/images/coaster.jpg",
    price: "$12",
    message: "Hello! I'm interested in ordering the Braided Jute Coaster Set.",
  },
  {
    name: "Woven Storage Basket",
    desc: "Perfect for laundry or cozy blankets.",
    image: "/images/basket.jpg",
    price: "$25",
    message: "Hi! I'd love to buy the Woven Storage Basket.",
  },
  {
    name: "Macramé Wall Hanging",
    desc: "Elegant jute wall art for your living space.",
    image: "/images/wall-hanging.jpg",
    price: "$18",
    message: "Hey! I'm looking to get the Macramé Wall Hanging.",
  },
  {
    name: "Jute Plant Hanger",
    desc: "Hand-knotted plant holder for indoor vibes.",
    image: "/images/plant-hanger.jpg",
    price: "$15",
    message: "Hello! I'd like to order the Jute Plant Hanger.",
  },
];

export default function ProductGallery() {
  return (
    <section id="products" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-neutral-800">
          Our Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-neutral-800">
                  {item.name}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
                <p className="mt-2 text-yellow-600 font-medium">{item.price}</p>
                <a
                  href={`https://wa.me/+2348156238865?text=${encodeURIComponent(
                    item.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
