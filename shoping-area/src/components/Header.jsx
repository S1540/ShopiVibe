import { Search, ShoppingCart, User, Menu, Heart, Bell } from "lucide-react";
import { useState } from "react";

function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 bg-te right-0 z-50 bg-gradient-to-r from-indigo-600 via-teal-500  to-indigo-600 shadow-2xl">
      {/* Main Header */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                ShopVibe
              </span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:bg-white transition-all duration-300 shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile only */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:flex p-2 text-white hover:bg-white/20 rounded-full transition-colors relative group">
              <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Notifications */}
            <button className="hidden sm:flex p-2 text-white hover:bg-white/20 rounded-full transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-0.5 -right-0.5  bg-red-500 w-4 h-4 rounded-full"></span>
            </button>

            {/* Cart */}
            <button className="p-2 text-white hover:bg-white/20 rounded-full transition-colors relative group">
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Account */}
            <button className="hidden sm:flex items-center space-x-2 p-2 text-white hover:bg-white/20 rounded-full transition-colors">
              <User className="w-6 h-6" />
              <span className="hidden lg:block font-medium">Account</span>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:block bg-black bg-opacity-10 backdrop-blur-sm">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-8 h-12">
            {[
              "Electronics",
              "Fashion",
              "Home & Garden",
              "Sports",
              "Books",
              "Beauty",
              "Deals",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-yellow-300 font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t-4 border-yellow-400">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-3 pt-4">
              {[
                "Electronics",
                "Fashion",
                "Home & Garden",
                "Sports",
                "Books",
                "Beauty",
                "Deals",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-800 font-medium py-2 px-2 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Account Links */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-800 font-medium py-2 px-2 rounded-lg hover:bg-purple-50"
              >
                <User className="w-5 h-5" />
                <span>My Account</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-800 font-medium py-2 px-2 rounded-lg hover:bg-purple-50"
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Search Overlay */}
      <div
        className={`bg-gray-300 transition-all duration-300 ease-in-out ${
          isSearchOpen
            ? "block md:hidden opacity-100 translate-y-0"
            : "opacity-0 hidden translate-y-0"
        }`}
      >
        <input
          className=" py-2 px-4 outline-0 w-full focus:ring-1 focus:ring-yellow-400"
          type="text"
          placeholder="Search for products, brands and more..."
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-8 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-15 animate-bounce delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-12 h-12 bg-cyan-400 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>
    </header>
  );
}
export default ModernHeader;
