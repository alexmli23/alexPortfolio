import React from "react";
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleClick = (path) =>{
    navigate(path)
  }
  const location = useLocation();
  return (
    <div className="fixed top-0 w-full bg-[#2C2C2C] flex flex-row justify-center text-white py-10 px-6 z-50">
      <h1 className="text-xl font-bold px-5 hover:bg-white hover:text-white hover:rounded-sm transition
      bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient-flow">
        {location.pathname === "/Contact" && <span className="bg-white text-black px-2 rounded-sm">Contact</span>}
        {location.pathname !== "/Contact" && (
        <button onClick={() => handleClick("/Contact")}>
            <span>Contact</span>
        </button>
       )}
      </h1>
      <h1 className="text-xl font-bold px-5 hover:text-white  hover:rounded-sm transition
      bg-gradient-to-r from-white via-teal-300 to-blue-500 bg-clip-text text-transparent animate-gradient-flow">
      {location.pathname === "/" && <span className="bg-white text-black px-2 rounded-sm">Home</span>}
      {location.pathname !== "/" && (
        <button onClick={() => handleClick("/")}>
          <span>Home</span>
        </button>
      )}
      </h1>
      <h1 className="text-xl font-bold px-5 hover:bg-white hover:text-white hover:rounded-sm transition
      bg-gradient-to-r from-teal-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-flow">
              {location.pathname === "/Developing" && <span className="bg-white text-black px-2 rounded-sm">Developing</span>}
      {location.pathname !== "/Developing" && (
        <button onClick={() => handleClick("/Developing")}>
        Developing
    </button>
      )}
      </h1>
    </div>
  );
};

export default Navbar;
