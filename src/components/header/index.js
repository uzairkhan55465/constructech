import React, { useState } from 'react';
import Logo from "../../assets/Images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0A0909] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ps-8 pe-16">
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={Logo} alt='' className='w-[100px] h-[90px] xl:w-[125px] xl:h-[102px]' />
          <div className='pt-3'>
            <span className="self-center tracking-extra-wide text-[19px] xl:text-[22px] font-[400] ms-[-5px] whitespace-nowrap text-white leading-4">CONSTRUCTECH</span>
            <p className='self-center text-[15px] xl:text-[18px] font-[400] ms-[-5px] whitespace-nowrap text-white'>an company for companies</p>
          </div>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
            <li>
              <a href="#" className="block px-3 mx-1 text-white text-[16px] xl:text-lg font-normal md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-[#F4A31D] border-b-4 border-transparent hover:border-b-4 hover:border-[#F4A31D]" aria-current="page">About us</a>
            </li>
            <li>
              <a href="#" className="block px-3 mx-1 text-white text-[16px] xl:text-lg font-normal md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-[#F4A31D] border-b-4 border-transparent hover:border-b-4 hover:border-[#F4A31D]">Features</a>
            </li>
            <li>
              <a href="#" className="block px-3 mx-1 text-white text-[16px] xl:text-lg font-normal md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-[#F4A31D] border-b-4 border-transparent hover:border-b-4 hover:border-[#F4A31D]">Services</a>
            </li>
            <li>
              <a href="#" className="block px-3 mx-1 text-white text-[16px] xl:text-lg font-normal md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-[#F4A31D] border-b-4 border-transparent hover:border-b-4 hover:border-[#F4A31D]">Process</a>
            </li>
            <li>
              <a href="#" className="block px-3 mx-1 text-white text-[16px] xl:text-[16px] xl:text-lg font-normal md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-[#F4A31D] border-b-4 border-transparent hover:border-b-4 hover:border-[#F4A31D]">Get a Quote</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
