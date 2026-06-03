import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <nav className=" py-3 px-10 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="logo ">
          <p className="font-semibold text-3xl  font-['Pinyon_Script']">
            Fashions
          </p>
        </div>
        <div className="menu flex justify-between w-1/2 text-[#7777779e]">
            <Link to='/'>Home</Link>
            <Link to='/p2'>page2</Link>
            <Link to='/p3'>page3</Link>
            <Link to='/p4'>page4</Link>
            <Link to='/login'>Log In</Link>


        </div>
      </nav>
    </>
  );
}
