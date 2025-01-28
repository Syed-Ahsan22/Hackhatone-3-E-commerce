"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const dummyCart: CartItem[] = [
  { id: 1, name: "Nike Air Zoom Pegasus 39", price: 120, quantity: 1 },
  { id: 2, name: "Nike Air Max 2021", price: 150, quantity: 2 },
];

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingPostalCode, setBillingPostalCode] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order Submitted Successfully!");
    router.push("/thank-you"); // Redirect to a Thank You page after successful checkout
  };

  const totalPrice = dummyCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="p-6 flex flex-col items-center max-w-4xl mx-auto">
        <header className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
        </header>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <ul>
                {dummyCart.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <span className="font-semibold text-lg">Total:</span>
                <span className="font-semibold text-lg">${totalPrice}</span>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Postal Code"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </form>
            </div>

            {/* Billing Information */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h2>
              <div className="mb-4">
                <label>
                  <input
                    type="checkbox"
                    checked={billingSameAsShipping}
                    onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
                  />
                  <span className="ml-2">Billing address is the same as shipping</span>
                </label>
              </div>

              {!billingSameAsShipping && (
                <>
                  <input
                    type="text"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    placeholder="Billing Name"
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    required
                  />
                  <input
                    type="text"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    placeholder="Billing Address"
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    required
                  />
                  <input
                    type="text"
                    value={billingPostalCode}
                    onChange={(e) => setBillingPostalCode(e.target.value)}
                    placeholder="Billing Postal Code"
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    required
                  />
                  <input
                    type="text"
                    value={billingCountry}
                    onChange={(e) => setBillingCountry(e.target.value)}
                    placeholder="Billing Country"
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    required
                  />
                </>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h2>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md mt-6 hover:bg-blue-600"
              >
                Complete Checkout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
