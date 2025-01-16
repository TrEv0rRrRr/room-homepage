import Logo from "@assets/logo.jsx";
import IconClose from "@assets/MenuIcons/icon-close.jsx";
import IconHamburger from "@assets/MenuIcons/icon-hamburger.jsx";
import React, { useState } from "react";

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <React.StrictMode>
      <header className="w-full absolute md:z-20">
        <div className="flex items-center px-6 pt-8 gap-28">
          <button className="block md:hidden" onClick={handleOpen}>
            <IconHamburger />
          </button>
          <Logo />
        </div>
        <nav
          className={`absolute top-0 left-0 w-full h-full 
            bg-white transition-transform duration-300 
            ease-in-out py-10 
            ${isOpen ? 
              "transform translate-y-0 z-10" : 
              "transform -translate-y-20"
            }
          `}
        >
          <div className="flex items-center justify-between h-full px-7">
            <button onClick={handleOpen}>
              <IconClose />
            </button>
            <ul className="flex gap-5 items-center font-bold">
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </nav>
      </header>
      
      {/* MODAL */}
      <div 
        className={`
          ${isOpen ? "block" : "hidden"} 
          fixed w-full h-full 
          bg-black/50 transition-all
        `}
      />
    </React.StrictMode>
  )
}

export default Header;