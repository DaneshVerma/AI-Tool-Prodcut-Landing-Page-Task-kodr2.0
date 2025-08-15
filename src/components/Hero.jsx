import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Boost Your Productivity with{" "}
            <span className="text-yellow-300">AI Genius</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Let AI handle repetitive work so you can focus on important tasks.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition">
            Get Started for Free
          </button>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Recommend downloading an SVG from undraw.co and placing it in src/assets */}
          <img
            src="/generated-image.png" // Example: place your illustration here from undraw.co
            alt="AI Illustration"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
