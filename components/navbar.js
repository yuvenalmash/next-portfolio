'use client';
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("hidden");
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };

  return (
    <nav className="bg-dark">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-16">
          {/* brand */}
          <div className="flex-shrink-0 border rounded border-white hover:border-blue-600">
            <Link href="/" className="">
              <img src="LOGO.png" alt="logo" className="h-20 w-20" />
            </Link>
          </div>

          {/* Navbar links */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="hover:text-blue-600">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuHidden ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="hidden md:hidden mobile-menu fixed right-0 w-1/2 bg-blue-950">
        <ul className="px-2 pt-2 pb-4 space-y-2">
          <li className="active">
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#tech-stack" className="hover:text-blue-600">
              Tech Stack
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
