import { Link } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.section 
        className="navbar-container 2xl:container mx-auto fixed top-0 left-0 w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          <div className="flex flex-row justify-between items-center">
            <Link
              to="/"
              className="font-[Inter] font-bold text-[20px] leading-[36px]"
            >
              <motion.span
                className="glow-text-nav"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                TITAN
              </motion.span>
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="md:hidden"
                id="menuicon"
              >
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                className="hidden"
                id="crossicon"
              >
                <path
                  fill="currentColor"
                  d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.5.5 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.5.5 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.5.5 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.5.5 0 0 0 0-.707"
                ></path>
              </svg>
            </div>
          </div>

          <nav className="hidden md:block" id="content">
            <ul className="flex flex-col justify-end items-center md:flex-row gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="nav-link">HOME</Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/product" className="nav-link">PRODUCT</Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="nav-link">ABOUT</Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/cart">
                  <div className="flex flex-row nav-link gap-2">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <p className="font-[Inter] font-bold text-[16px] leading-[24px]">
                    CART
                  </p>
                </div>
                </Link>
              </motion.div>

              {/* Login Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex flex-row hover:bg-yellow-500 p-2 mx-auto hover:rounded-lg cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 13.826a3.506 3.506 0 1 0 0-7.013a3.506 3.506 0 0 0 0 7.013m0 0a6 6 0 0 1 5.953 5.254M12 13.826a6 6 0 0 0-5.953 5.254m0 0A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.953-2.17m-11.906 0a9.25 9.25 0 1 1 11.907 0"
                    ></path>
                  </svg>

                  <p className="font-[Inter] font-bold text-[16px] leading-[24px]">
                    LOGIN
                  </p>
                </div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      className="dropdown-menu absolute right-0 mt-2 w-48 rounded-md"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                    <Link to="/orders">
                      <div className="flex flex-row justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 2048 2048"
                          width="1em"
                          height="1em"
                        >
                          <path
                            fill="currentColor"
                            d="m2029 1453l-557 558l-269-270l90-90l179 178l467-466zM1024 640H640V512h384zm0 256H640V768h384zm-384 128h384v128H640zM512 640H384V512h128zm0 256H384V768h128zm-128 128h128v128H384zm768-384V128H256v1792h896v128H128V0h1115l549 549v731l-128 128V640zm128-128h293l-293-293z"
                          ></path>
                        </svg>
                        <p className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white font-[Inter] font-bold text-[16px] leading-[24px] rounded-t-md">
                          ORDERS
                        </p>
                      </div>
                      </Link>
                      <Link to="/upload">
                      <div className="flex flex-row justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22"
                          width="1em"
                          height="1em"
                        >
                          <path
                            fill="currentColor"
                            d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16zM8 13.01l1.41 1.41L11 12.84V17h2v-4.16l1.59 1.59L16 13.01L12.01 9z"
                          ></path>
                        </svg>
                        <p className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white font-[Inter] font-bold text-[16px] leading-[24px] rounded-t-md">
                          UPLOADS
                        </p>
                      </div>
                      </Link>
                      <div className="flex flex-row justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                        width="1em"
                        height="1em"
                      >
                        <path
                          fill="currentColor"
                          d="M4 12a.5.5 0 0 0 .5.5h8.793l-2.647 2.646a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.707.707l2.647 2.646H4.5a.5.5 0 0 0-.5.5M17.5 2h-11A2.5 2.5 0 0 0 4 4.5v4a.5.5 0 0 0 1 0v-4A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-4a.5.5 0 0 0-1 0v4A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2"
                        ></path>
                      </svg>
                      <button
                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white font-[Inter] font-bold text-[16px] leading-[24px] rounded-b-md"
                        onClick={() => {
                          setDropdownOpen(false);
                          // Handle sign-out logic here
                        }}
                      >
                        SIGNOUT
                      </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ul>
          </nav>
        </div>
      </motion.section>
    </>
  );
};

export default Navbar;
