import React from "react";
import { GiRecycle, GiHandBag, GiLoveLetter } from "react-icons/gi";

export default function WhyUs() {
  const features = [
    {
      icon: <GiRecycle className="text-4xl text-yellow-600" />,
      title: "Sustainable & Plastic-Free",
    },
    {
      icon: <GiHandBag className="text-4xl text-yellow-600" />,
      title: "100% Handwoven in Nigeria",
    },
    {
      icon: <GiLoveLetter className="text-4xl text-yellow-600" />,
      title: "Delivered with Love 💛",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-10">
          Why Our Customers Love Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.icon}
              <h3 className="mt-4 text-lg font-medium text-neutral-700">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
