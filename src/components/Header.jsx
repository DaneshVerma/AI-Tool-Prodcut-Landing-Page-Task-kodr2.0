export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <nav className="
        backdrop-blur-md
        bg-white/30 border-b border-white/40 shadow-sm
        dark:bg-gray-900/60 dark:border-gray-800
        py-3 px-8 flex items-center justify-between rounded-b-xl
        transition-colors
      ">
        {/* Logo/Brand */}
        <div className="font-extrabold text-2xl text-indigo-600 dark:text-yellow-300 tracking-tight">
          AI Genius
        </div>
        {/* Navigation */}
        <ul className="flex gap-6 font-medium text-gray-700 dark:text-gray-100">
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
        {/* CTA */}
        <a
          href="#"
          className="
            ml-6 px-5 py-2 bg-indigo-500 bg-opacity-80 text-white rounded-full font-semibold shadow
            hover:bg-indigo-600 transition
            dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300
          "
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
