import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* Top Banner */}
      <div className="w-full h-12 bg-black flex items-center justify-center">
        <div className="text-white text-sm flex justify-between w-[70%] items-center">
          <p>
            Summer Sale For All Nike shoes And Free Express Delivery - OFF 50%!
          </p>
          <button className="font-semibold underline">Shop Now</button>
          <div className="flex items-center gap-2">
            <p>English</p>
            <Image
              src="/Vector (34).png"
              alt="Language Selector"
              width={24}
              height={24}
              className="bg-white"
            />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full h-14 mt-4 flex justify-center">
        <div className="w-[1170px] flex items-center justify-between">
          {/* Logo */}
          <p className="text-2xl font-bold">Exclusive.Nike</p>

          {/* Search Bar */}
          <div className="flex items-center flex-1 justify-center mx-8">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full max-w-md h-10 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Search
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-lg">
            <Link href="/Contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/About" className="hover:underline">
              About
            </Link>
            <Link href="/SignUp" className="hover:underline">
              Sign Up
            </Link>
            <Link href="/Men" className="hover:underline">
              Men
            </Link>
            <Link href="/Checkout" className="hover:underline">
              Check Your Order
            </Link>
            <Link href="/shipping" className="hover:underline">
              Track Order
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
