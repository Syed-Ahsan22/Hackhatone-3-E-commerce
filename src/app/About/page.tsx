"use client";

import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define the type for the cart item and product data
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
}

const sanity = sanityClient({
  projectId: "uvum0s8r", // Your Sanity project ID
  dataset: "production", // Your Sanity dataset
  apiVersion: "2023-01-01",
  useCdn: true,
});

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [product, setProduct] = useState<Product | null>(null); // Store product data
  const router = useRouter();

  // Fetch product data from Sanity
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && productName == "Nike Air Zoom Pegasus 39"][0] { 
          _id, 
          productName, 
          price, 
          description, 
          "imageUrl": image.asset->url 
        }`;
        const data = await sanity.fetch(query);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: Date.now(),
      name: product?.productName || "Unknown Product",
      price: product?.price || 0,
      quantity,
    };

    setCart((prevCart) => [...prevCart, newItem]);
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="p-6 flex flex-col items-center max-w-4xl mx-auto">
        <header className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{product?.productName || "Loading..."}</h1>
        </header>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex justify-center">
            {product?.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product?.productName || "Product Image"}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            ) : (
              <div>Loading image...</div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4">
              {product?.description || "Loading description..."}
            </p>

            <div className="flex items-center mb-6">
              <span className="text-xl font-semibold text-gray-900">${product?.price || 0}</span>
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
