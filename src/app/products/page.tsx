"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "uvum0s8r",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  quantity: number;
  _id: string;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  colors: string[];
  category: string;
  status: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const query = `*[_type == "product"] {
        _id,
        productName,
        price,
        description,
        "imageUrl": image.asset->url,
        colors,
        category,
        status
      }`;

      const data = await sanity.fetch(query);
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  };

  const addToCart = (product: Product) => {
    // Prevent adding duplicates
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.productName} has been added to your cart!`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products from API</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div> // Show loading indicator
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="p-4 border rounded-lg shadow hover:shadow-xl hover:transform hover:scale-105 transition duration-200 ease-in-out"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="rounded"
                  priority // Adding priority for the first image to load faster
                />
                <h3 className="text-lg font-semibold mt-2">{product.productName}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-md font-bold text-blue-600">${product.price}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.length > 0 ? (
                    product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="text-sm bg-slate-400 text-black rounded-full px-2 py-1"
                      >
                        {color}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">No colors</span>
                  )}
                </div>

                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCards;
