"use client";

import React from "react";
import Image from "next/image";
import ProductCards from "./products/page"; // Ensure "use client" in ProductCards if hooks are used
import Navbar from "./components/Navbar"; // Ensure Navbar uses "use client" if hooks are used
import Footer from "./components/footer"; // Ensure Footer uses "use client" if hooks are used
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-[1344px] h-[977px] mt-[58px] ml-[48px]">
        {/* Image Section */}
        <div className="h-[700px]">
          <Image 
            src="/shoes.png" 
            alt="Shoes Image" 
            width={1344} 
            height={700} 
            className="object-contain"
          />
        </div>
        <br />
        <div className="w-[1008px] h-[229px]">
          <Image 
            src="/Frame.png" 
            alt="Shoes Image" 
            width={1008} 
            height={229} 
          />
        </div>
      </div>

      {/* Product Cards */}
      <ProductCards />
      <br /><br /><br /><br />

      <div className="w-[880px] h-[192px] relative left-[280px]">
        <Image 
          src="/Frame1.png" 
          alt="nike" 
          width={880} 
          height={192} 
        />
      </div>
      <Footer />
    </div>
  );
}
