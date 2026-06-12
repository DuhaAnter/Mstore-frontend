import { Link, NavLink } from "react-router";
import { TfiSearch } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

//small reusable component
function ActiveLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-black font-medium" : "text-[#c3c3c3] hover:text-black"
      }
    >
      {children}
    </NavLink>
  );
}
export default function Header() {
  return (
    <>
      <nav className=" py-3 px-10 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="logo ">
          <p className="font-semibold text-3xl  font-['Pinyon_Script']">
            M Store
          </p>
        </div>
        <div className="menu flex justify-between w-1/2 text-[#c3c3c3] font-['Montserrat']">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/product-details">Men</ActiveLink>
          <ActiveLink to="/products">Women</ActiveLink>
          <ActiveLink to="/p4">Kids</ActiveLink>
          <ActiveLink to="/p5">Sale</ActiveLink>
          <ActiveLink to="/p6">Categoreis</ActiveLink>
          <div className="flex justify-evenly items-center  w-37 text-black text-xl">
            <Link to="/p7">
              <TfiSearch />
            </Link>
            <Link to="/p8">
              <FaShoppingCart />
            </Link>
            <Link to="/profile">
              <IoPerson />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
