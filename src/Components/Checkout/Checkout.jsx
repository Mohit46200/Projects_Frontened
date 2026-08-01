import { Globalcontext } from "../../GlobalContext/globalcontext.jsx";
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useToast } from "../Toast/useToast.js"

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Checkout = () => {
  const { totalBill, setTotalBill, userCartData, setUserCartData, setCart, userLoginData } = useContext(Globalcontext)
  const navigate = useNavigate()
  const toast = useToast()
  const [details, setDetails] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  })
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [shake, setShake] = useState(false)

  const [delete_cart] = useState(true)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const user_details = async () => {
    try {
      const payload = {
        email: userLoginData.email
      }
      const res = await axios.post("https://projects-backend-5.onrender.com/check/details", payload)
      setDetails(res.data.details)
      if (!details) {
        setLoading(false)
      }
    } catch (error) {
      console.log("Error in posting is ", error)
    }
  }

  useEffect(() => {
    user_details()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if (details) {
      setFormData({
        name: details.name,
        address: details.address,
        phone: details.phone,
      })
      setLoading(false)
    }

  }, [details])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.address || !formData.phone) {
      toast.error("All fields are compulsory!")
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }

    try {
      setSubmitting(true)
      const payload = {
        email: userCartData.email,
        details: formData,
        product_id: userCartData.product_id
      }

      const payload2 = {
        email: userCartData.email,
        delete_cart: delete_cart
      }

      await axios.post("https://projects-backend-5.onrender.com/check/checkout", payload)
      setUserCartData({})
      await axios.post("https://projects-backend-6.onrender.com/data/cartdata", payload2)
      setCart(0)
      setTotalBill(0)
      setSuccess(true)
    } catch (error) {
      console.log("Error is checking out ", error)
      toast.error("We couldn't place your order, please try again")
    } finally {
      setSubmitting(false)
    }
  }


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#faf7f5]">
        <div className="flex flex-col items-center gap-4 p-8 bg-[#faf7f5] rounded-2xl shadow-xl">
          <motion.div
            className="w-12 h-12 rounded-full border-4 border-[#7b2140] border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
          <h1 className="text-black text-lg font-semibold tracking-wide">Loading...</h1>
        </div>
      </div>
    )
  }



  return (
    <div className="min-h-screen bg-[#faf7f5] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">Secure Floral Checkout</span>

          <h1 className="mt-4 text-5xl md:text-6xl font-serif text-gray-900">Complete Your Order</h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Finalize your floral delivery details and let us deliver handcrafted elegance directly to your loved ones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-10">
          <motion.div
            animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="uppercase tracking-[0.25em] text-xs text-[#7b2140]">Delivery Details</span>
                <h2 className="mt-3 text-4xl font-serif text-gray-900">Checkout</h2>
              </div>

              <div className="bg-[#f8ece8] text-[#7b2140] px-5 py-3 rounded-full text-sm font-medium">
                Cash on Delivery
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
              ].map((f, i) => (
                <motion.div key={f.name} custom={i} variants={fieldVariants} initial="hidden" animate="visible">
                  <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={formData[f.name]}
                    onChange={handleChange}
                    className="w-full bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#7b2140] focus:ring-2 focus:ring-[#7b2140]/15 transition"
                  />
                </motion.div>
              ))}

              <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
                <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">Delivery Address</label>
                <textarea
                  name="address"
                  placeholder="Enter delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none resize-none focus:border-[#7b2140] focus:ring-2 focus:ring-[#7b2140]/15 transition"
                />
              </motion.div>

              <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
                <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#7b2140] focus:ring-2 focus:ring-[#7b2140]/15 transition"
                />
              </motion.div>

              <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
                <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">Payment Method</label>

                <div className="bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Cash on Delivery</h3>
                    <p className="text-sm text-gray-500 mt-1">Pay securely when your flowers arrive</p>
                  </div>

                  <div className="w-5 h-5 rounded-full border-4 border-[#7b2140]" />
                </div>
              </motion.div>

              <motion.button
                custom={4}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                whileHover={!submitting ? { scale: 1.015, boxShadow: "0 20px 35px -10px rgba(107,29,58,0.5)" } : {}}
                whileTap={!submitting ? { scale: 0.985 } : {}}
                type="submit"
                disabled={submitting}
                className="w-full bg-[#6b1d3a] hover:bg-[#571730] text-white py-5 rounded-full text-lg font-medium shadow-xl transition disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {submitting ? (
                  <>
                    <motion.span
                      className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                    />
                    Placing your order…
                  </>
                ) : (
                  "Submit Order"
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#6b1d3a] text-white rounded-[36px] shadow-sm overflow-hidden h-fit sticky top-28 relative"
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="p-8 md:p-10 relative">
              <span className="uppercase tracking-[0.25em] text-xs text-white/70">Payment Overview</span>

              <h2 className="mt-4 text-4xl font-serif">Order Summary</h2>

              <div className="mt-12 space-y-6">
                <div className="flex justify-between items-center text-white/80">
                  <span>Subtotal</span>
                  <span className="text-lg">₹{totalBill}</span>
                </div>

                <div className="flex justify-between items-center text-white/80">
                  <span>Delivery</span>
                  <span className="text-green-300 font-medium">Free</span>
                </div>

                <div className="flex justify-between items-center text-white/80">
                  <span>Packaging</span>
                  <span>Included</span>
                </div>

                <div className="border-t border-white/20 pt-8 flex justify-between items-center">
                  <span className="text-xl">Total</span>
                  <span className="text-5xl font-serif">₹{totalBill}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="bg-white rounded-[36px] p-10 md:p-14 max-w-md w-full text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.15 }}
                className="mx-auto h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                  <motion.path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>

              <h2 className="mt-8 text-3xl font-serif text-gray-900">Order Submitted!</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Your beautifully handcrafted flowers are on their way. Thank you for choosing Floom India.
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/home")}
                className="mt-9 w-full bg-[#6b1d3a] hover:bg-[#571730] text-white py-4 rounded-full text-lg font-medium shadow-xl transition"
              >
                Back to Home
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default Checkout
