import axios from "axios";
import { useContext, useState } from "react";
import { Globalcontext } from "../../GlobalContext/globalcontext.jsx"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import SkeletonGrid from "../Common/SkeletonGrid.jsx"
import { useToast } from "../Toast/useToast.js"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const Flower = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const toast = useToast()
  const shouldReduceMotion = useReducedMotion()
  const { cart, setCart, login, userLoginData, userCartData, setUserCartData, flowers, setFlowers,
            clickedonAddtoCart, setClickedonAddtoCart, setUserLoginData, setLogin, loading_F, setLoading_F
        } = useContext(Globalcontext)
  const [addedItems, setAddedItems] = useState({})
  const [addingItem, setAddingItem] = useState(null)

  const addcart = async (product_id) => {
    try {
      if (!login) {
        toast.info("Please login to add products to your cart")
        navigate("/login", { state: { from: location.pathname } })
        return
      }

      setAddingItem(product_id)
      const payload = {
        email: userLoginData.email,
        product_id: [product_id],
      }
      const res = await axios.post("https://projects-backend-6.onrender.com/data/cartdata", payload)
      setCart(res.data.data.product_id.length)
      toast.success("Added to your cart")
    } catch (error) {
      console.log("Error is ", error)
      toast.error("Something went wrong, please try again")
    } finally {
      setAddingItem(null)
    }
  }

  const buynow = (product_id) => {
    if (!login) {
      toast.info("Please login to buy this product")
      navigate("/login", { state: { from: location.pathname } })
    } else {
      navigate("/cart", { state: { product_id: product_id } })
    }
  }

  if (loading_F) {
    return (
      <div className="bg-[#faf7f5] min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">Floral Collection</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">Luxury Flowers</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Elegant handcrafted bouquets created with fresh seasonal flowers and designed to make every moment feel special.
            </p>
            <p className="mt-3 text-xs text-gray-400">Waking up the backend — this can take about a minute on first load.</p>
          </div>
          <SkeletonGrid count={6} />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#faf7f5] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">Floral Collection</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">Luxury Flowers</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Elegant handcrafted bouquets created with fresh seasonal flowers and designed to make every moment feel special.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {flowers.map((flower, index) => {
            const isAdded = userCartData?.product_id?.includes(flower.product_id) || addedItems[flower.product_id]
            const isAdding = addingItem === flower.product_id

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -10 }}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-[320px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#7b2140] text-xs px-4 py-2 rounded-full tracking-wide shadow">
                    Signature Bouquet
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-serif text-gray-900 leading-snug">{flower.name}</h2>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{flower.description}</p>
                    </div>

                    <div className="bg-[#f8ece8] text-[#7b2140] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      ₹{flower.price}
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex-1 bg-[#6b1d3a] text-white py-3 rounded-2xl hover:bg-[#571730] transition font-medium shadow-lg"
                      onClick={() => buynow(flower.product_id)}
                    >
                      Buy Now
                    </motion.button>

                    <motion.button
                      whileHover={!isAdded ? { scale: 1.03 } : {}}
                      whileTap={!isAdded ? { scale: 0.96 } : {}}
                      className={`relative flex-1 py-3 rounded-2xl transition font-medium border overflow-hidden
                        ${isAdded
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                          : "bg-[#f8ece8] text-[#7b2140] border-[#f1d7d0] hover:bg-[#f1d7d0]"
                        }`}
                      disabled={isAdded || isAdding}
                      onClick={async () => {
                        await addcart(flower.product_id)
                        setClickedonAddtoCart(true)

                        if (login) {
                          setAddedItems((prev) => ({ ...prev, [flower.product_id]: true }))
                        }
                      }}
                    >
                      {isAdding ? (
                        <motion.span
                          className="inline-block h-4 w-4 border-2 border-[#7b2140] border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                        />
                      ) : isAdded ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          className="inline-flex items-center gap-2"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Added
                        </motion.span>
                      ) : (
                        "Add to Cart"
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Flower
