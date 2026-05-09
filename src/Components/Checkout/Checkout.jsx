import { Globalcontext } from "../../GlobalContext/globalcontext.jsx"
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

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Checkout
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Address
              </label>
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                rows="4"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Payment Method
              </label>
              <div className="border border-gray-300 rounded-lg p-3">
                Cash on Delivery
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Submit Order
            </button>
          </form>
        </div>
        <div className="bg-black text-white p-8 flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalBill}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>₹{totalBill}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Checkout