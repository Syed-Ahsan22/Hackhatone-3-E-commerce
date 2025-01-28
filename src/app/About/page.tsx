"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';



// Define the type for the cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  // Specify the type of the state as an array of CartItem
  const [cart, setCart] = useState<CartItem[]>([]); 
  const router = useRouter();

  const handleAddToCart = () => {
    // Here, you would typically add the item to a global state or context (like Redux or Context API)
    setCart((prevCart) => [
      ...prevCart,
      {
        id: Date.now(), // Unique ID for each cart item
        name: "Nike Air tract suit",
        price: 120,
        quantity,
      },
    ]);
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Product Detail Section */}
      <main className="p-6 flex flex-col items-center max-w-4xl mx-auto">
        <header className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Nike Air Zoom Pegasus 39</h1>
        </header>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/nike.png" // Replace with your image path
              alt="Nike Air Zoom Pegasus 39"
              className="w-80 h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4">
              Experience the perfect fit with the Nike Air Zoom Pegasus 39. With responsive cushioning and a lightweight design, this sneaker offers support for every step, whether you're on the track or hitting the streets.
            </p>

            <div className="flex items-center mb-6">
              <span className="text-xl font-semibold text-gray-900">$120.00</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
