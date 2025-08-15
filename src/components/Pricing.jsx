import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$0",
    desc: "For personal use",
    features: ["AI chat", "3 prompts/day", "Basic AI models"],
  },
  {
    name: "Pro",
    price: "$19/mo",
    desc: "For professionals",
    features: ["Unlimited prompts", "Advanced AI models", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "$49/mo",
    desc: "For teams",
    features: [
      "Team management",
      "API access",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 dark:bg-gray-800 dark:text-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow hover:shadow-lg transition text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.2 }}
            >
              <h3 className="text-2xl font-bold dark:text-gray-200 mb-2">{plan.name}</h3>
              <h4 className="text-xl font-semibold text-indigo-500 mb-4">
                {plan.price}
              </h4>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{plan.desc}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full cursor-pointer py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
