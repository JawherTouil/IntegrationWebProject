"use client";
import React, { useState } from "react";

// Import images from src/assets
import MangoMatcha from "../assets/Mango Matcha(30g).png";
import pack from "../assets/pack.png";
import corn from "../assets/corn.png";
import lays from "../assets/lays.png";
import spicy from "../assets/spicy.png";
import maruman from "../assets/maruman.png";
import image9 from "../assets/image(9).png";
import rice from "../assets/rice.png";
import muncher from "../assets/muncher.png";
import taste from "../assets/taste.png";
import mochi from "../assets/mochi.png";
import sauce from "../assets/sauce.png";

const Discounts = () => {
  const [price, setPrice] = useState(100000);

  const products = [
    {
      image: MangoMatcha,
      title: "Mango Matcha(30g)",
      originalPrice: "40,000TND",
      discountedPrice: "32,000TND",
      discount: 20,
      price: 40000,
    },
    {
      image: pack,
      title: "The Big pack",
      originalPrice: "70,000TND",
      discountedPrice: "49,000TND",
      discount: 30,
      price: 70000,
    },
    {
      image: corn,
      title: "Corn Snack",
      originalPrice: "15,000TND",
      discountedPrice: "12,000TND",
      discount: 20,
      price: 15000,
    },
    {
      image: lays,
      title: "Lays Chips",
      originalPrice: "10,000TND",
      discountedPrice: "8,000TND",
      discount: 20,
      price: 10000,
    },
    {
      image: spicy,
      title: "Spicy Noodles",
      originalPrice: "25,000TND",
      discountedPrice: "20,000TND",
      discount: 20,
      price: 25000,
    },
    {
      image: maruman,
      title: "Maruman Rice",
      originalPrice: "30,000TND",
      discountedPrice: "24,000TND",
      discount: 20,
      price: 30000,
    },
    {
      image: image9,
      title: "Image 9 Snack",
      originalPrice: "18,000TND",
      discountedPrice: "14,400TND",
      discount: 20,
      price: 18000,
    },
    {
      image: rice,
      title: "Jasmine Rice",
      originalPrice: "50,000TND",
      discountedPrice: "40,000TND",
      discount: 20,
      price: 50000,
    },
    {
      image: muncher,
      title: "Muncher Cookies",
      originalPrice: "12,000TND",
      discountedPrice: "9,600TND",
      discount: 20,
      price: 12000,
    },
    {
      image: taste,
      title: "Taste of Asia",
      originalPrice: "35,000TND",
      discountedPrice: "28,000TND",
      discount: 20,
      price: 35000,
    },
    {
      image: mochi,
      title: "Mochi Ice Cream",
      originalPrice: "22,000TND",
      discountedPrice: "17,600TND",
      discount: 20,
      price: 22000,
    },
    {
      image: sauce,
      title: "Soy Sauce",
      originalPrice: "8,000TND",
      discountedPrice: "6,400TND",
      discount: 20,
      price: 8000,
    },
  ];

  const filteredProducts = products.filter((product) => product.price <= price);

  return (
    <main className="flex flex-col justify-center items-center px-20 py-32 bg-white max-md:px-5 max-md:pt-24">
      <div className="flex flex-col w-full max-w-[1128px] max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <p className="self-start mt-4 text-xl tracking-normal leading-none text-center text-black">
            Showing 1 - {filteredProducts.length} of {products.length} results
          </p>
          <div className="flex flex-col items-center gap-2">
            <label className="text-black font-medium">Max Price: {price} TND</label>
            <input
              type="range"
              min="0"
              max="100000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-64 h-2 bg-[#904A41] rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </header>

        <section className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4">{product.title}</h3>
                <p className="text-gray-600">
                  <span className="line-through">{product.originalPrice}</span>{" "}
                  <span className="text-red-600">{product.discountedPrice}</span>
                </p>
                <p className="text-green-600">{product.discount}% off</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Discounts;
