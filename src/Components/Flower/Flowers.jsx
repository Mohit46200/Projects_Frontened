import axios from "axios";
import { useEffect, useState ,useContext } from "react";
import {Globalcontext} from "../../GlobalContext/globalcontext.jsx"
import { useNavigate , useLocation} from "react-router-dom"


const Flower = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {cart,setCart,login,userLoginData, userCartData, setUserCartData,flowers,setFlowers,
            clickedonAddtoCart,setClickedonAddtoCart,setUserLoginData, setLogin,loading_F,setLoading_F
        } = useContext(Globalcontext)
  const [addedItems, setAddedItems] = useState({})
  
  
 const addcart = async(product_id) => {
    try{
        if(!login){
          alert("Please Login to add products to cart")
            navigate("/login", {
              state: {from: location.pathname}
            })
        }
        else{
            const payload = {
              email:userLoginData.email,
              product_id:[product_id]
            }
            const res = await axios.post("https://projects-backend-6.onrender.com/data/cartdata",payload)
            setCart(res.data.data.product_id.length)
          }

    }catch(error){
      console.log("Error is ",error)
    }
    
  }
      
  
    const buynow = (product_id) => {
        if(!login){
            alert("Please Login to buy product")
              navigate("/login", {
                state:{from : location.pathname}
              })
          }
        else{
          navigate("/cart", {
            state: { product_id: product_id },
          })
        }
          

    }


  
  if (loading_F) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#faf7f5]">
        <div className="flex flex-col items-center gap-4 p-8 bg-[#faf7f5] rounded-2xl shadow-xl">
          
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          
          <h1 className="text-black text-lg font-semibold tracking-wide">
            Loading...
          </h1>
          <h6>Backend is uploaded on render , it will take around 1 minute</h6>
  
        </div>
      </div>
    )
  }

            return (
            <div className="bg-[#faf7f5] min-h-screen py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="mb-14 text-center">
                  <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
                    Floral Collection
                  </span>

                  <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">
                    Luxury Flowers
                  </h1>

                  <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Elegant handcrafted bouquets created with fresh seasonal flowers and
                    designed to make every moment feel special.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                  {flowers.map((flower, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={flower.image}
                          alt={flower.name}
                          className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                        />

                        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#7b2140] text-xs px-4 py-2 rounded-full tracking-wide shadow">
                          Signature Bouquet
                        </div>
                      </div>

                      <div className="p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h2 className="text-2xl font-serif text-gray-900 leading-snug">
                              {flower.name}
                            </h2>

                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                              {flower.description}
                            </p>
                          </div>

                          <div className="bg-[#f8ece8] text-[#7b2140] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            ₹{flower.price}
                          </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                          <button
                            className="flex-1 bg-[#6b1d3a] text-white py-3 rounded-2xl hover:bg-[#571730] transition font-medium shadow-lg"
                            onClick={() => buynow(flower.product_id)}
                          >
                            Buy Now
                          </button>

                          <button
                            className={`flex-1 py-3 rounded-2xl transition font-medium border
                              ${
                                userCartData?.product_id?.includes(
                                  flower.product_id
                                ) || addedItems[flower.product_id]
                                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                  : "bg-[#f8ece8] text-[#7b2140] border-[#f1d7d0] hover:bg-[#f1d7d0]"
                              }`}
                            disabled={
                              userCartData?.product_id?.includes(
                                flower.product_id
                              ) || addedItems[flower.product_id]
                            }
                            onClick={async () => {
                              await addcart(flower.product_id)
                              setClickedonAddtoCart(true)

                              if (login) {
                                setAddedItems((prev) => ({
                                  ...prev,
                                  [flower.product_id]: true,
                                }))
                              }
                            }}
                          >
                            {addedItems[flower.product_id] ||
                            userCartData?.product_id?.includes(
                              flower.product_id
                            )
                              ? "Added"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
}

export default Flower