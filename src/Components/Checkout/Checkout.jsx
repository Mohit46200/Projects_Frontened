import { Globalcontext } from "../../GlobalContext/globalcontext.jsx";
import { useContext, useState, useEffect } from "react"
import axios from "axios"

const Checkout = () => {

        const {totalBill,userCartData,setUserCartData,setCart,userLoginData} = useContext(Globalcontext)
        const [details, setDetails] = useState({})
        const [formData, setFormData] = useState({
          name: "",
          address: "",
          phone: "",
        })

        const [delete_cart, setDelete_cart] = useState(true)
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
            const res = await axios.post("https://projects-backend-5.onrender.com/check/details",payload)
            console.log("fuck")
            console.log(res.data.details)
            setDetails(res.data.details)
          } catch (error) {
            console.log("Error in posting is ", error)
          }
        }

        useEffect(() => {
          user_details()
        }, [])

        
        useEffect(() => {
          if (details) {
            setFormData({
              name: details.name,
              address: details.address ,
              phone: details.phone ,
            })
          }

        }, [details])

        const handleSubmit = async (e) => {
          e.preventDefault()
          console.log(userCartData)
          if (!formData.name || !formData.address || !formData.phone) {
            alert("All fields are compulsory!")
            return
          }

          try {
            const payload = {
              email: userCartData.email,
              details: formData,
              product_id: userCartData.product_id
            }

            const payload2 = {
              email: userCartData.email,
              delete_cart: delete_cart
            }

            const res = await axios.post("https://projects-backend-5.onrender.com/check/checkout",payload)
            console.log(res.data)
            setUserCartData({})
            const res2 = await axios.post("https://projects-backend-5.onrender.com/data/cartdata",payload2)
            console.log(res2.data)
            setCart(0)
            alert("Order Submitted Successfully!")
          } catch (error) {
            console.log("Error is checking out ", error) 
          }
        }

        return (
          <div className="min-h-screen bg-[#faf7f5] py-16 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
                  Secure Floral Checkout
                </span>

                <h1 className="mt-4 text-5xl md:text-6xl font-serif text-gray-900">
                  Complete Your Order
                </h1>

                <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Finalize your floral delivery details and let us deliver handcrafted
                  elegance directly to your loved ones.
                </p>
              </div>

              <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-10">
                <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <span className="uppercase tracking-[0.25em] text-xs text-[#7b2140]">
                        Delivery Details
                      </span>

                      <h2 className="mt-3 text-4xl font-serif text-gray-900">
                        Checkout
                      </h2>
                    </div>

                    <div className="bg-[#f8ece8] text-[#7b2140] px-5 py-3 rounded-full text-sm font-medium">
                      Cash on Delivery
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#7b2140] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">
                        Delivery Address
                      </label>

                      <textarea
                        name="address"
                        placeholder="Enter delivery address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="5"
                        className="w-full bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none resize-none focus:border-[#7b2140] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#7b2140] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase tracking-wide text-gray-500 mb-3">
                        Payment Method
                      </label>

                      <div className="bg-[#faf7f5] border border-gray-200 rounded-2xl px-5 py-5 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Cash on Delivery
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            Pay securely when your flowers arrive
                          </p>
                        </div>

                        <div className="w-5 h-5 rounded-full border-4 border-[#7b2140]" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#6b1d3a] hover:bg-[#571730] text-white py-5 rounded-full text-lg font-medium shadow-xl transition"
                    >
                      Submit Order
                    </button>
                  </form>
                </div>

                <div className="bg-[#6b1d3a] text-white rounded-[36px] shadow-sm overflow-hidden h-fit sticky top-10">
                  <div className="p-8 md:p-10">
                    <span className="uppercase tracking-[0.25em] text-xs text-white/70">
                      Payment Overview
                    </span>

                    <h2 className="mt-4 text-4xl font-serif">
                      Order Summary
                    </h2>

                    <div className="mt-12 space-y-6">
                      <div className="flex justify-between items-center text-white/80">
                        <span>Subtotal</span>

                        <span className="text-lg">
                          ₹{totalBill}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-white/80">
                        <span>Delivery</span>

                        <span className="text-green-300 font-medium">
                          Free
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-white/80">
                        <span>Packaging</span>

                        <span>Included</span>
                      </div>

                      <div className="border-t border-white/20 pt-8 flex justify-between items-center">
                        <span className="text-xl">
                          Total
                        </span>

                        <span className="text-5xl font-serif">
                          ₹{totalBill}
                        </span>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
}
export default Checkout