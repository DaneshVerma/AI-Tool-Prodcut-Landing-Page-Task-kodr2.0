import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <nav
        className="
          backdrop-blur-md
          bg-white/30 border-b border-white/40 shadow-sm
          dark:bg-gray-900/60 dark:border-gray-800
          py-3 px-6 md:px-8 flex items-center justify-between rounded-b-xl
          transition-colors
        "
      >
        {/* Logo/Brand */}
        <div className="font-extrabold text-2xl text-indigo-600 dark:text-yellow-300 tracking-tight">
          AI Genius
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-100">
          <li>
            <a href="#features" className="hover:text-indigo-500 dark:hover:text-yellow-300 transition">Features</a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-indigo-500 dark:hover:text-yellow-300 transition">Pricing</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-indigo-500 dark:hover:text-yellow-300 transition">Testimonials</a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#"
          className="
            hidden md:inline-block
            ml-6 px-5 py-2 bg-indigo-500 bg-opacity-80 text-white rounded-full font-semibold shadow
            hover:bg-indigo-600 transition
            dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300
          "
        >
          Get Started
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="
            md:hidden absolute top-full left-0 w-full
            backdrop-blur-md bg-white/50 border-t border-white/40 shadow-lg
            dark:bg-gray-900/70 dark:border-gray-800
            py-4 px-6 transition-all
          "
        >
          <ul className="flex flex-col gap-4 font-medium text-gray-700 dark:text-gray-100">
            <li>
              <a
                href="#features"
                className="hover:text-indigo-500 dark:hover:text-yellow-300 transition"
                onClick={toggleMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-indigo-500 dark:hover:text-yellow-300 transition"
                onClick={toggleMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-indigo-500 dark:hover:text-yellow-300 transition"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="
              block mt-4 px-5 py-2 bg-indigo-500 bg-opacity-80 text-white rounded-full font-semibold shadow
              hover:bg-indigo-600 transition
              dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300
            "
            onClick={toggleMenu}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
