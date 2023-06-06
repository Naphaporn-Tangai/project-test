"use client";

import { useState , useEffect} from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./style.css";
import buttons from "./data";

const ButtonWithImage = ({ href, label, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(true);
  };

  useEffect(() => {
    if (isSelected) {
      const resetButton = () => {
        setIsSelected(false);
      };

      document.addEventListener('click', resetButton);

      return () => {
        document.removeEventListener('click', resetButton);
      };
    }
  }, [isSelected]);

  return (
    <Link href={href}>
      <button
        className={`py-4 px-5 relative ${isSelected ? 'selected' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {label}
        {(isSelected || isHovered) && (
          <div className="absolute bottom-5 left-0 w-full h-full flex justify-center items-center text-text-color">
            <img src={image} alt={label} className="max-w-full max-h-full" />
          </div>
        )}
      </button>
    </Link>
  );
};



const Appbar = ({ imageSrc, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("EN");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <nav className="fiexd w-full  text-text-color border-y border-icon-color ">
      <div className="max-w-7xl  flex items-center justify-center">
        <div className="flex">
        {buttons.map((button, index) => (
        <ButtonWithImage
          key={index}
          href={button.href}
          label={button.label}
          image={button.image}
        />
      ))}
          <div className="relative top-3 ml-5 z-10">
            <button
              type="button"
              onClick={toggleDropdown}
              className={`flex items-center justify-center w-16 ${
                isOpen ? 'bg-icon-color' : ''
              }`}
      
            >
              {selectedOption}
              <MdOutlineArrowDropDown className="text-text-color w-8 h-8" />
            </button>

            {isOpen && (
              <div className="absolute right-0  w-16 bg-black border border-icon-color shadow-md">
                <ul>
                  {selectedOption === "EN" && (
                    <li
                      className="px-4 py-2 hover:bg-icon-color cursor-pointer"
                      onClick={() => selectOption("TH")}
                    >
                      TH
                    </li>
                  )}
                  {selectedOption === "TH" && (
                    <li
                      className="px-4 py-2 hover:bg-icon-color cursor-pointer"
                      onClick={() => selectOption("EN")}
                    >
                      EN
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
