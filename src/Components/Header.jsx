import { useState } from "react";
import { Link, NavLink } from "react-router";
import { TfiSearch } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // Added modern menu icons
import { useSelector } from "react-redux";

// Small reusable component
function ActiveLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "text-black font-medium transition-colors"
          : "text-[#c3c3c3] hover:text-black transition-colors"
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const cart = useSelector((state) => state.cart);
  //console.log("cart data from redux store", cart); // Object { number: 0 }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="py-3 px-4 md:px-10 flex justify-between items-center max-w-7xl mx-auto">
        {/* Left Side: Mobile Menu Button & Brand Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Icon (Only visible on mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-black cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo */}
          <Link to="/" className="logo block" onClick={closeMenu}>
            <p className="font-semibold text-2xl md:text-3xl font-['Pinyon_Script']">
              M Store
            </p>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-['Montserrat'] text-sm lg:text-base">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/product-details">Men</ActiveLink>
          <ActiveLink to="/products">Women</ActiveLink>
          <ActiveLink to="/p4">Kids</ActiveLink>
          <ActiveLink to="/p5">Sale</ActiveLink>
          <ActiveLink to="/p6">Categories</ActiveLink>
        </div>

        {/* Right Side: Icons (ALWAYS visible on mobile & desktop) */}
        <div className="flex items-center gap-4 md:gap-6 text-black text-lg md:text-xl">
          <Link to="/p7" className="hover:opacity-70 transition-opacity">
            <TfiSearch />
          </Link>
          <Link
            to="/cart"
            className="relative "
          >
            <FaShoppingCart className="text-2xl" />

            {cart?.number > 0 && (
              <span
                className="absolute -top-2 -right-2  bg-red-500 text-white text-[10px] font-medium 
                     w-5 h-5 flex items-center justify-center rounded-full shadow"
              >
                {cart.number}
              </span>
            )}
          </Link>
          <Link to="/profile" className="hover:opacity-70 transition-opacity">
            <IoPerson />
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Links (Toggled via State) */}
      <div
        className={`
          fixed top-[57px] left-0 w-full bg-white border-b border-slate-100 shadow-md p-6 flex flex-col gap-4 font-['Montserrat'] text-lg md:hidden transition-all duration-300 ease-in-out z-40
          ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <ActiveLink to="/" onClick={closeMenu}>
          Home
        </ActiveLink>
        <ActiveLink to="/product-details" onClick={closeMenu}>
          Men
        </ActiveLink>
        <ActiveLink to="/products" onClick={closeMenu}>
          Women
        </ActiveLink>
        <ActiveLink to="/p4" onClick={closeMenu}>
          Kids
        </ActiveLink>
        <ActiveLink to="/p5" onClick={closeMenu}>
          Sale
        </ActiveLink>
        <ActiveLink to="/p6" onClick={closeMenu}>
          Categories
        </ActiveLink>
      </div>
    </header>
  );
}
