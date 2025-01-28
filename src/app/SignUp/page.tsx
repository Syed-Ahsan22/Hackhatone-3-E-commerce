import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex gap-12 bg-white shadow-md rounded-lg overflow-hidden">
          {/* Left Image Section */}
          <div className="w-[805px]">
            <Image
              className="object-cover"
              src="/nike2.png"
              alt="Sign Up Illustration"
              width={1720}
              height={1520}
            />
          </div>

          {/* Right Form Section */}
          <div className="w-[400px] p-6">
            <h1 className="text-2xl font-bold text-black mb-2">
              Log in to Exclusive
            </h1>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            {/* Input Fields */}
            <form className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email or Phone Number
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="mt-6">
              <button className="w-full py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600">
                Create Account
              </button>
            </div>

            {/* Google Sign-Up */}
            <div className="mt-4 flex items-center justify-center gap-4 border rounded-lg py-2 cursor-pointer">
              <Image
                src="/Igoogle.png"
                alt="Google Icon"
                width={24}
                height={24}
              />
              <span className="text-gray-700">Sign up with Google</span>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/Login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
