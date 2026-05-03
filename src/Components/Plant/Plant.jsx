import axios from "axios"
import { useEffect, useState ,useContext} from "react"
import {Globalcontext} from "../../GlobalContext/globalcontext.jsx"
import { useNavigate  , useLocation} from "react-router-dom"



const Plant = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading,setLoading] = useState(true)
  const {cart ,setCart,login,userLoginData, userCartData, setUserCartData, plant, setPlant,
            clickedonAddtoCart, setClickedonAddtoCart, setUserLoginData, setLogin
        } = useContext(Globalcontext)
  const [addedItems, setAddedItems] = useState({})

 
  const apidata = async () => {
    try {
      const res = await axios.get("https://projects-backend-6.onrender.com/plant")
      const dataArray = Object.values(res.data)
      setPlant(dataArray)
      setLoading(false)

    } catch (error) {
      console.log("Error is ", error)
    }
  }

  useEffect(() => {
    apidata()
  }, [])


  const addcart = async(product_id) => {
      try{
          if(!login){
              navigate("/login", {
                state:{from : location.pathname}
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
    
    const cartdata = async () => {
      try{
          const data = await axios.get(`https://projects-backend-6.onrender.com/data/cartcount/${userLoginData.email}`)
          await setUserCartData(data.data.data)
          setCart(data.data.data.product_id.length)
          setClickedonAddtoCart(false)
      }catch(error){
        console.log("Error is ",error)
      }
    }
  
    useEffect(() => {
      cartdata()
    },[login,userLoginData,clickedonAddtoCart])



    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
    
        if (token && user) {
          setLogin(true)
          setUserLoginData(JSON.parse(user));
        }
      }, [])



   if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center gap-4 p-8 bg-gray-800 rounded-2xl shadow-xl">
          
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Loading...
          </h1>
  
        </div>
      </div>
    )
  }


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {plant.map((plant, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300"
        >
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">{plant.name}</h2>
            <p className="text-green-600 font-bold">₹{plant.price}</p>
            <p className="text-gray-500 text-sm">{plant.description}</p>

            <div className="flex gap-2 justify-center">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  
                >
                  Buy Now
                </button>

                <button
                  className={`px-4 py-2 rounded-lg transition 
                    ${userCartData?.product_id?.includes(plant.product_id) || addedItems[plant.product_id]
                      ? "bg-yellow-200 text-black cursor-not-allowed"
                      : "bg-yellow-500 text-black hover:bg-yellow-450"}`
                    }
                  disabled={userCartData?.product_id?.includes(plant.product_id) || addedItems[plant.product_id]}
                  onClick={async () => {
                    if (userCartData?.product_id?.includes(plant.product_id)) {
                        return
                    }
                    await addcart(plant.product_id)
                    setClickedonAddtoCart(true)
                    if(login){
                        setAddedItems((prev) => ({
                          ...prev,
                          [plant.product_id]: true,
                    }))
                    }
                    
                  }}
                >
                  {addedItems[plant.product_id] || userCartData?.product_id?.includes(plant.product_id) ? "Already Added" : "Add to Cart"}
                </button>
              </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Plant