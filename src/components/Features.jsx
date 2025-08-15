import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Fast AI Replies",
    desc: "Get instant, accurate responses in seconds.",
  },
  {
    icon: "📝",
    title: "Smart Writing",
    desc: "Generate blog posts, emails, and reports effortlessly.",
  },
  {
    icon: "🌐",
    title: "Multilingual Support",
    desc: "Communicate in 50+ languages with ease.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-8 shadow hover:shadow-lg transition text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            >
              <span className="text-5xl mb-4 block">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
