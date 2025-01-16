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

        <div className="sm:flex items-center md:hidden px-6 pt-8 gap-28 ">
          <button className="block md:hidden" onClick={handleOpen}>
            <IconHamburger />
          </button>
          <Logo />
        </div>

        <div className="hidden md:flex items-center absolute md:top-10 md:left-16 xl:top-16 xl:left-24 gap-10">
            <Logo />
            <nav
              className="text-white"
            >
              <div className="flex items-center justify-between h-full px-7">
                <ul className="flex gap-10 items-center font-bold text-lg">
                  <li className="hover:text-gray-100 relative after:w-0 after:h-[0.1rem] after:bg-gray-100 after:absolute after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-500">
                    <a href="http://#" target="_blank" rel="noopener noreferrer">home</a>
                  </li>
                  <li className="hover:text-gray-100 relative after:w-0 after:h-[0.1rem] after:bg-gray-100 after:absolute after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-500">
                    <a href="http://#" target="_blank" rel="noopener noreferrer">shop</a>
                  </li>
                  <li className="hover:text-gray-100 relative after:w-0 after:h-[0.1rem] after:bg-gray-100 after:absolute after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-500">
                    <a href="http://#" target="_blank" rel="noopener noreferrer">about</a>
                  </li>
                  <li className="hover:text-gray-100 relative after:w-0 after:h-[0.1rem] after:bg-gray-100 after:absolute after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-500">
                    <a href="http://#" target="_blank" rel="noopener noreferrer">contact</a>
                  </li>
                </ul>
              </div>
            </nav>
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