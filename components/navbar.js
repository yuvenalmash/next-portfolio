'use client';
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("hidden");
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };

  const links = {
    Home: "/",
    Projects: "#projects",
    TechStack: "#tech-stack",
    Contact: "#contact",
  }

  return (
    <nav className="fixed w-full z-10 backdrop-blur-3xl">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <svg className="h-16 w-16 p-1 fill-white border rounded border-white transition-colors durstion-300 ease-in-out hover:fill-cyan-500 hover:border-cyan-800 hover:animate-pulse" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0.21035719,0.0027492 C 0.01334522,0.00117904 0.00726879,0.11832525 0.0083302,0.26324201 0.00993881,0.48286833 -0.00120244,1.0287561 0.00296837,1.3400224 c 0.0041708,0.3112663 -0.01171006,0.54217 0.19295888,0.70961 0.12809192,0.1047922 1.02621125,0.058228 1.39001365,0.050511 0.017637,0.2550975 0.030886,1.2915188 0.025609,1.4027173 C 1.6062725,3.6140589 1.6389079,3.7695947 1.798657,3.77175 1.9953803,3.7744042 2.0140335,3.6525572 2.0152867,3.5146706 2.0165399,3.3767839 2,2.0859375 2,2.0859375 2.2723812,2.0877575 3.0862912,2.087985 3.2630667,1.9488664 3.4022679,1.8393181 3.5014736,1.7558603 3.5141811,1.3047429 3.5244922,0.93869685 3.5135504,0.3209767 3.5130402,0.25593024 3.5120198,0.12583734 3.5149181,0.00135107 3.2995876,0.00432705 3.1275698,0.00670443 3.1078673,0.1037287 3.1110484,0.25826681 3.1126594,0.3365289 3.1204984,0.90217264 3.1089284,1.1860383 3.0973571,1.469904 3.0662691,1.471994 3.0278416,1.5283216 2.9369389,1.6615681 2.6520482,1.6674855 1.7695286,1.6738335 0.88700902,1.6801815 0.68450069,1.7307942 0.52282889,1.5990367 0.44148757,1.5327461 0.44910377,1.5057383 0.44075476,1.2097441 0.43240575,0.91374988 0.4172738,0.43986189 0.41335164,0.27780926 0.4094358,0.116018 0.39116635,0.00419023 0.21035719,0.0027492 Z M 4.15625,0 C 4.0026515,0.01007734 3.9583214,0.10718994 3.9545286,0.19689954 c 1.593e-4,0.23563107 0.00947,3.19784036 0.012272,3.27380356 0.00281,0.075963 -0.00258,0.307485 0.2207075,0.3027355 C 4.4107942,3.7686891 4.3819437,3.493141 4.3803086,3.4251828 4.3786734,3.3572246 4.3569322,1.9598603 4.3613401,0.76366878 4.6176479,1.0440923 4.9071204,1.3257333 5.1473758,1.5800869 5.2689095,1.7182502 5.4081374,1.7196827 5.5058256,1.6352562 5.5995742,1.5338917 5.5916338,1.397057 5.4941089,1.299684 5.0967773,0.86817275 4.7860925,0.51481824 4.4219386,0.13046588 4.3346848,0.01943081 4.2698226,0.01840701 4.15625,0 Z M 7.2988281,0 C 7.274291,-6.5920135e-4 7.083667,0.0074752 7.0755611,0.24015021 7.0712967,0.41321199 7.0767843,1.8058936 7.0742229,3.0273438 6.8017197,2.7202376 6.2708545,2.1534212 6.2032967,2.1005085 6.0970604,2.0163612 5.9833966,2.0186943 5.9062911,2.0870777 c -0.070517,0.067697 -0.1173328,0.19975 -0.00323,0.3262735 0.2541004,0.2746787 0.7200941,0.798312 1.1134133,1.2208141 0.1592783,0.1579986 0.2734349,0.1594201 0.39679,0.101017 C 7.4808804,3.7031693 7.4920784,3.6285086 7.5082774,3.531852 7.5078476,2.3897676 7.5065554,1.3719732 7.5,0.23242187 7.4896985,0.0159872 7.3233652,6.5920135e-4 7.2988281,0 Z" />
              </svg>
            </Link>
          </div>

          {/* Navbar links */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {Object.keys(links).map((link, index) => (
                <li key={index}>
                  <Link href={links[link]} className="transition-colors duration-300 ease-out hover:text-cyan-500">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button flex items-center px-3 py-2 text-white transition-color duration-300 ease-in-out hover:text-cyan-500"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuHidden ? (
                <AiOutlineMenu className="h-8 w-8" />
              ) : (
                <AiOutlineClose className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden mobile-menu fixed right-0 w-1/2 bg-gradient-to-r from-cyan-800 to-black transition-all duration-300 ${
          isMobileMenuHidden ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <ul className="px-2 pt-2 pb-4 space-y-2">
          {Object.keys(links).map((link, index) => (
            <li key={index}>
              <Link href={links[link]} onClick={toggleMobileMenu} className="hover:text-orange-600 text-lg">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
