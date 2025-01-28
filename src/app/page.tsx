"use client";

import React from "react";
import Image from "next/image";
import ProductCards from "./products/page";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
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
        </div> <br />
        <div className="w-[1008px] h-[229px] top-[748px] left-[168px]">
        <Image 
            src="/Frame.png" 
            alt="Shoes Image" 
            width={1008} 
            height={229} />
        
        </div>
      </div>

      {/* Product Cards */}
      <ProductCards/>
      <br /> <br /> <br /> <br />

      <div className="w-[880px] h-[192px] top-[] relative left-[280px]">
      <Image 
            src="/Frame1.png" 
            alt="nike" 
            width={880} 
            height={192} />
      </div>
      <Footer/>
    </div>
  );
}
