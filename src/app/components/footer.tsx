export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex flex-col items-start">
              <img src="/path-to-nike-logo.png" alt="Nike Logo" className="w-32" />
              <p className="mt-4 text-gray-400 text-sm">Just Do It.</p>
            </div>
  
            {/* Quick Links */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">Quick Links</h3>
              <a href="/shop" className="text-gray-400 hover:text-white text-sm">Shop</a>
              <a href="/sale" className="text-gray-400 hover:text-white text-sm">Sale</a>
              <a href="/new-arrivals" className="text-gray-400 hover:text-white text-sm">New Arrivals</a>
              <a href="/locations" className="text-gray-400 hover:text-white text-sm">Find a Store</a>
            </div>
  
            {/* Customer Service */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">Customer Service</h3>
              <a href="/help" className="text-gray-400 hover:text-white text-sm">Help & Support</a>
              <a href="/returns" className="text-gray-400 hover:text-white text-sm">Returns & Exchanges</a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
            </div>
  
            {/* Social Media */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/nike" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/nike" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/nike" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/user/nike" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nike, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  