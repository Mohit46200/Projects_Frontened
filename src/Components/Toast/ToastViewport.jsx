import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const ICONS = {
  success: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <motion.path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

const STYLES = {
  success: { bg: "bg-white", ring: "ring-emerald-100", iconBg: "bg-emerald-50", iconText: "text-emerald-600", bar: "bg-emerald-500" },
  error: { bg: "bg-white", ring: "ring-rose-100", iconBg: "bg-rose-50", iconText: "text-rose-600", bar: "bg-rose-500" },
  info: { bg: "bg-white", ring: "ring-[#f1e0d8]", iconBg: "bg-[#f8ece8]", iconText: "text-[#7b2140]", bar: "bg-[#7b2140]" },
}

const ToastViewport = ({ toasts, onDismiss }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="fixed z-[200] top-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 flex flex-col gap-3 w-[calc(100%-2rem)] max-w-sm pointer-events-none">
      <AnimatePresence initial={false}>
        {toasts.map((t) => {
          const s = STYLES[t.type] || STYLES.info
          return (
            <motion.div
              key={t.id}
              layout
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -24, scale: 0.9 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 60, scale: 0.9, transition: { duration: 0.25 } }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              onClick={() => onDismiss(t.id)}
              className={`pointer-events-auto relative overflow-hidden ${s.bg} ring-1 ${s.ring} rounded-2xl shadow-xl shadow-black/5 px-4 py-3.5 flex items-start gap-3 cursor-pointer`}
            >
              <div className={`shrink-0 h-8 w-8 rounded-full ${s.iconBg} ${s.iconText} flex items-center justify-center`}>
                {ICONS[t.type] || ICONS.info}
              </div>
              <p className="text-sm text-gray-800 leading-snug pt-1.5 pr-1">{t.message}</p>

              <motion.div
                className={`absolute bottom-0 left-0 h-[3px] ${s.bar}`}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: t.duration / 1000, ease: "linear" }}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default ToastViewport
