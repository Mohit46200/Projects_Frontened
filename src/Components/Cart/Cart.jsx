  import { Globalcontext } from "../../GlobalContext/globalcontext.jsx"
  import { useContext, useEffect, useState } from "react"
  import {useNavigate, useLocation } from "react-router-dom"
  import axios from "axios"
  


  const Cart = () => {
    const { userCartData, flowers, plant, login, setLogin, 
            setUserLoginData, totalBill, setTotalBill} = useContext(Globalcontext)
    const [remove,setRemove] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const {product_id} = location.state || {}
    const allProducts = [
      ...Object.values(flowers || {}),
      ...Object.values(plant || {}),
    ]
    let cartItems = []
    if(product_id){
        cartItems = allProducts.filter(
          (item) =>  item.product_id===product_id
        )
    }else{
        cartItems = allProducts.filter((item) =>
        userCartData?.product_id?.includes(item.product_id),
    )
    }
  
    

    setTotalBill( cartItems.reduce((sum, item) => sum + item.price, 0))
    

    useEffect(() => {
        if(!login){
            navigate("/login", {
              state: {from: location.pathname}
            })
          }
    },[])




    const remove_product = async(product_id) => {
          try{
              const payload = {
                email:userCartData.email,
                product_id: product_id,
                remove:remove
              }
              const res = await axios.post("https://projects-backend-6.onrender.com/data/cartdata",payload) 
          }catch(error){
              console.log("Error in removing is ",error)
          }
    }
    

  return (
    <div className="min-h-screen bg-[#faf7f5] px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
            Floral Checkout
          </span>

          {product_id ? (
            <h1 className="mt-4 text-5xl md:text-6xl font-serif text-gray-900">
              Your Order
            </h1>
          ) : (
            <h1 className="mt-4 text-5xl md:text-6xl font-serif text-gray-900">
              Your Cart
            </h1>
          )}

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Review your selected bouquets and premium floral arrangements before
            proceeding to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-[36px] shadow-sm py-24 text-center">
            <div className="text-7xl mb-6">🛒</div>

            <h2 className="text-3xl font-serif text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-4 text-gray-500">
              Add beautiful flowers and plants to continue shopping.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.product_id}
                  className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="overflow-hidden rounded-[24px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full md:w-44 h-44 object-cover hover:scale-105 transition duration-700"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs uppercase tracking-[0.25em] text-[#7b2140]">
                              Premium Selection
                            </span>

                            <h2 className="mt-3 text-3xl font-serif text-gray-900">
                              {item.name}
                            </h2>
                          </div>

                          <div className="bg-[#f8ece8] text-[#7b2140] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            ₹{item.price}
                          </div>
                        </div>

                        <p className="mt-5 text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        
                        <button 
                        onClick = {() => remove_product(item.product_id)}
                        className="border border-gray-200 px-6 py-3 rounded-full text-sm hover:bg-[#6b1d3a] hover:text-white hover:border-[#6b1d3a] transition">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit sticky top-10">
              <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8">
                <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
                  Summary
                </span>

                <h2 className="mt-4 text-3xl font-serif text-gray-900">
                  Order Summary
                </h2>

                <div className="mt-10 space-y-5">
                  <div className="flex justify-between text-gray-600">
                    <span>Items</span>
                    <span>{cartItems.length}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Packaging</span>
                    <span>Included</span>
                  </div>
                </div>

                <div className="my-8 border-t border-dashed border-gray-200" />

                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Total</span>

                  <span className="text-4xl font-serif text-[#7b2140]">
                    ₹{totalBill}
                  </span>
                </div>

                <button
                  className="w-full mt-10 bg-[#6b1d3a] hover:bg-[#571730] text-white py-4 rounded-full text-lg font-medium shadow-xl transition"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>

                <p className="text-center text-xs text-gray-400 mt-5">
                  Secure floral checkout experience
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
  }

  export default Cart
