export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg outline-0 flex-1 text-gray-100"
            />
            <button className="px-4 py-2 bg-yellow-400 text-indigo-900 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </div>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Copy */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-gray-300">
            © 2025 AI Genius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
