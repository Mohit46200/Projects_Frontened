import { useContext } from "react"
import { ToastCtx } from "./ToastContext.jsx"

export const useToast = () => {
  const ctx = useContext(ToastCtx)
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return ctx
}

export default useToast
