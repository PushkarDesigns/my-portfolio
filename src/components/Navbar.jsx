import React, { useState, useEffect } from "react";
import Logo from '../assets/logo.png'

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50); // original script used 50 px threshold
    };

    window.addEventListener("scroll", onScroll);
    // initial check in case page not at top on load
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black" : "bg-transparent"}`}>
        <nav className="h-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="w-full flex justify-between items-center px-4">
              {/* Logo */}
              <a href="/" className="flex-shrink-0">
                <img src={Logo} alt="logo" className="max-w-sm h-20 w-auto" />
              </a>

              {/* Desktop Links */}
              <div className="hidden sm:flex space-x-6">
                <a href="#home" className="text-white hover:text-green-500 transition-all duration-300 font-semibold hover:scale-110">Home</a>
                <a href="#about" className="text-white hover:text-green-500 transition-all duration-300 font-semibold hover:scale-110">About</a>
                <a href="#skills" className="text-white hover:text-green-500 transition-all duration-300 font-semibold hover:scale-110">Skills</a>
                <a href="#projects" className="text-white hover:text-green-500 transition-all duration-300 font-semibold hover:scale-110">Project</a>
                {/* <a href="#testimonials" className="text-white hover:text-green-500 transition-all duration-300 font-semibold hover:scale-110">Testimonial</a> */}
                <a href="#contact" className="text-white hover:text-green-500 transition-all duration-300 font-semibold hover:scale-110">Contact</a>
              </div>

              {/* Resume Button (desktop) */}
              <div className="hidden md:flex sm:flex">
                <a href="/resume.pdf" download className="w-full font-bold bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:scale-105 transition-all duration-300 ease-in-out text-center"
                >Download Resume
                </a>
              </div>

              {/* Mobile hamburger button */}
              <div className="md:hidden sm:hidden">
                <button id="menu-btn" className="focus:outline-none text-white" onClick={() => setMobileOpen((prev) => !prev)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
                  {/* same svg as your HTML */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div id="mobile-menu" className={`${mobileOpen ? "block" : "hidden"} md:hidden sm:hidden px-4 pb-4 text-white bg-black`}>
            <a href="#home" className="block text-center py-2 hover:text-orange-400 font-semibold hover:scale-110 transition-all duration-500">Home</a>
            <a href="#about" className="block text-center py-2 hover:text-orange-400 font-semibold hover:scale-110 transition-all duration-500">About</a>
            <a href="#skills" className="block text-center py-2 hover:text-orange-400 font-semibold hover:scale-110 transition-all duration-500">Skills</a>
            <a href="#projects" className="block text-center py-2 hover:text-orange-400 font-semibold hover:scale-110 transition-all duration-500">Project</a>
            {/* <a href="#testimonials" className="block text-center py-2 hover:text-orange-400 font-semibold hover:scale-110 transition-all duration-500">Testimonial</a> */}
            <a href="#contact" className="block text-center py-2 hover:text-orange-400 font-semibold hover:scale-110 transition-all duration-500">Contact</a>

            <a href="/resume.pdf" download className="w-full mt-3 block text-center font-bold bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:scale-105 transition-all duration-300 ease-in-out">Download Resume</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar
