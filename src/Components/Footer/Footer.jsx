import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const linkColumns = [
  {
    title: "Support",
    links: ["FAQs", "Returns & Refunds", "Contact Us", "Help Centre"],
  },
  {
    title: "Company",
    links: ["About", "Magazine", "Careers", "Sell on Floom"],
  },
  {
    title: "Legal",
    links: ["Cookie Policy", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Explore",
    links: ["Valentine's Day", "Mother's Day", "Wedding Flowers", "Seasonal Collections"],
  },
]

const Footer = () => {
  return (
    <footer className="relative bg-[#f7f1ed] border-t border-[#eaded8] overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-rose-100/40 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
              Floom India
            </motion.span>

            <motion.h2 variants={fadeUp} className="mt-5 text-5xl font-serif text-gray-900 leading-tight">
              Flowers designed to make every moment memorable
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-gray-600 leading-relaxed max-w-md">
              Luxury bouquets handcrafted by passionate florists and delivered beautifully across India.
            </motion.p>

            <motion.div variants={stagger} className="mt-10 flex flex-wrap gap-3">
              {["Same-day Delivery", "Luxury Bouquets", "Premium Gifting"].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.06, backgroundColor: "#faf3ef" }}
                  className="bg-white border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 shadow-sm"
                >
                  ✿ {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {linkColumns.map((col) => (
              <motion.div key={col.title} variants={fadeUp}>
                <h3 className="text-lg font-serif text-gray-900 mb-6">{col.title}</h3>

                <ul className="space-y-4 text-gray-600">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="relative inline-block hover:text-[#7b2140] transition group">
                        {link}
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-[#7b2140] transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border-t border-[#eaded8] pt-8 flex flex-col lg:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-gray-500 text-center lg:text-left">
            © 2026 Floom India. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Designed with love</span>

            <motion.div
              className="w-2 h-2 rounded-full bg-[#7b2140]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <span>Luxury floral experiences across India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
