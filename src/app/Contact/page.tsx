"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function ContactUs() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar (if needed) */}
      <Navbar />

      <main className="p-6 flex flex-col items-center w-full max-w-4xl mx-auto">
        <header className="w-full flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What can we help you with?"
              value={query}
              onChange={handleQueryChange}
              className="w-64 p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={() => alert(`Searching for: ${query}`)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </header>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Help Options */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">What can we help you with?</h2>
            <ul className="space-y-2">
              <li className="cursor-pointer text-blue-500 hover:underline">Order Status</li>
              <li className="cursor-pointer text-blue-500 hover:underline">Returns</li>
              <li className="cursor-pointer text-blue-500 hover:underline">Payment Issues</li>
              <li className="cursor-pointer text-blue-500 hover:underline">Product Support</li>
            </ul>
          </div>

          {/* Contact Options */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Contact Options</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-semibold">Call:</span>
                <a href="tel:+18005551234" className="text-blue-500 hover:underline">
                  92-310-451-1387
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Message:</span>
                <a href="mailto:support@nike.com" className="text-blue-500 hover:underline">
                  support@nike.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <p>Nike Headquarters, Beaverton, OR</p>
              </li>
            </ul>
          </div>

          {/* Payment Options */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Payments</h2>
            <p className="mb-2">Choose a payment option below:</p>
            <ul className="space-y-2">
              <li className="cursor-pointer text-blue-500 hover:underline">Credit/Debit Card</li>
              <li className="cursor-pointer text-blue-500 hover:underline">PayPal</li>
              <li className="cursor-pointer text-blue-500 hover:underline">EasyPaisa</li>
              <li className="cursor-pointer text-blue-500 hover:underline">Google Pay</li>
            </ul>
          </div>

          {/* Location and More */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Find Us</h2>
            <p>Visit our stores or find nearby locations. Now Only Online Store:</p>
            <button
              className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
              onClick={() => router.push("/locations")}
            >
              Find a Store
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
