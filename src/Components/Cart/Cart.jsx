import { Globalcontext } from "../../GlobalContext/globalcontext.jsx"
import { useContext, useEffect } from "react"
import {useNavigate } from "react-router-dom"


const Cart = () => {
  const { userCartData, flowers, plant, login, setLogin, setUserLoginData, totalBill, setTotalBill} = useContext(Globalcontext)
  const navigate = useNavigate()
  const allProducts = [
    ...Object.values(flowers || {}),
    ...Object.values(plant || {}),
  ]

 
  const cartItems = allProducts.filter((item) =>
    userCartData?.product_id?.includes(item.product_id),
  )

  setTotalBill( cartItems.reduce((sum, item) => sum + item.price, 0))
  

  useEffect(() => {
      if(!login){
          navigate("/login", {
            state: {from: location.pathname}
          })
        }
  },[])
  

  useEffect(() => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token && user) {
      setLogin(true)
      setUserLoginData(JSON.parse(user));
    }
  }, [])



  return (
    <div className="min-h-screen bg-[#f6f3ee] px-8 py-12">
      <h1 className="text-5xl font-light text-center mb-12">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-2xl text-gray-500">Cart is Empty</div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.product_id}
                className="bg-white rounded-3xl shadow-md p-6 flex gap-6 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-2xl"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-medium">{item.name}</h2>

                  <p className="text-gray-500 mt-2 text-sm">
                    {item.description}
                  </p>

                  <p className="text-xl font-semibold mt-4">₹{item.price}</p>
                </div>

                <button className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
                  Remove
                </button>
              </div>
            ))}
          </div>

         
          <div className="bg-white shadow-md rounded-3xl p-8 h-fit">
            <h2 className="text-2xl mb-8">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-xl font-semibold mb-8">
              <span>Total</span>
              <span>₹{totalBill}</span>
            </div>

            <button 
            className="w-full bg-black text-white py-4 rounded-full"
            onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
