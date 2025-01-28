"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';



const fakeTrackingData = {
  trackingNumber: "1Z9999W99999999999",
  status: "In Transit",
  expectedDeliveryDate: "2025-02-03",
  shippingAddress: {
    name: "John Doe",
    address: "123 Nike St, Beaverton, OR 97005",
    city: "Beaverton",
    state: "OR",
    zip: "97005",
  },
};

export default function ShippingTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingStatus, setTrackingStatus] = useState<string | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleTrackShipment = () => {
    if (trackingNumber === fakeTrackingData.trackingNumber) {
      setTrackingStatus("In Transit");
      setError("");
    } else {
      setTrackingStatus(null);
      setError("Invalid tracking number. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="p-6 flex flex-col items-center max-w-4xl mx-auto">
        <header className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Track Your Nike Order</h1>
        </header>

        <div className="w-full grid grid-cols-1 gap-6 mb-8">
          {/* Tracking Form */}
          <div className="w-full max-w-md mx-auto">
            <label htmlFor="trackingNumber" className="block text-lg font-semibold mb-2">
              Enter Tracking Number
            </label>
            <input
              id="trackingNumber"
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="1Z9999W99999999999"
            />
            <button
              onClick={handleTrackShipment}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Track Shipment
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {/* Shipment Status */}
          {trackingStatus && (
            <div className="w-full max-w-md mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipment Status</h2>
              <p className="text-lg mb-2"><strong>Tracking Number:</strong> {fakeTrackingData.trackingNumber}</p>
              <p className="text-lg mb-2"><strong>Status:</strong> {trackingStatus}</p>
              <p className="text-lg mb-2"><strong>Expected Delivery Date:</strong> {fakeTrackingData.expectedDeliveryDate}</p>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
                <p className="text-lg">
                  <strong>Name:</strong> {fakeTrackingData.shippingAddress.name}
                </p>
                <p className="text-lg">
                  <strong>Address:</strong> {fakeTrackingData.shippingAddress.address}
                </p>
                <p className="text-lg">
                  <strong>City:</strong> {fakeTrackingData.shippingAddress.city}, {fakeTrackingData.shippingAddress.state} {fakeTrackingData.shippingAddress.zip}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
