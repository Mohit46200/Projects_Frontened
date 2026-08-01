import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollUp}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.08, boxShadow: "0 20px 35px -10px rgba(107,29,58,0.55)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="fixed bottom-7 right-6 z-[90] h-12 w-12 rounded-full bg-[#6b1d3a] text-white shadow-xl flex items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
            transition={shouldReduceMotion ? {} : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
