import { createContext, useCallback, useRef, useState } from "react"
import ToastViewport from "./ToastViewport"

export const ToastCtx = createContext(null)

let idCounter = 0

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const timers = useRef({})

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    if (timers.current[id]) {
      clearTimeout(timers.current[id])
      delete timers.current[id]
    }
  }, [])

  const showToast = useCallback((message, opts = {}) => {
    const { type = "info", duration = 3200 } = opts
    const id = ++idCounter
    setToasts((prev) => [...prev, { id, message, type, duration }])
    timers.current[id] = setTimeout(() => dismiss(id), duration)
    return id
  }, [dismiss])

  const toast = {
    success: (message, opts) => showToast(message, { ...opts, type: "success" }),
    error: (message, opts) => showToast(message, { ...opts, type: "error" }),
    info: (message, opts) => showToast(message, { ...opts, type: "info" }),
  }

  return (
    <ToastCtx.Provider value={toast}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastCtx.Provider>
  )
}

export default ToastProvider
