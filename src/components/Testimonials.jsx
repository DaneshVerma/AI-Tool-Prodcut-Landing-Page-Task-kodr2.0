import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah L.",
    text: "AI Genius has saved me 10+ hours a week!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Example, replace as needed
  },
  {
    name: "John D.",
    text: "The best AI writing assistant I've ever tried.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Aman G.",
    text: "Perfect for my business workflows.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                />
                <strong>{t.name}</strong>
              </div>
              <p className="text-gray-600 dark:text-gray-400">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
