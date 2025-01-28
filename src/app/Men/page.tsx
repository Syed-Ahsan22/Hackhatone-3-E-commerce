"use client";

import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import Footer from "../components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';


interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Men's Sneakers", size: "M", price: 50, quantity: 1 },
    { id: 2, name: "Women's Sandals", size: "L", price: 30, quantity: 2 },
  ]);
  const deliveryFee = 10;
  const router = useRouter();

  // Handle quantity changes
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-4">
        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">${item.price}</p>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() =>
                    handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="w-12 text-center border"
                />
                <button
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          className="w-full mt-6 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          onClick={() => router.push("/Checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
      <Footer/>
    </div>
  );
}
