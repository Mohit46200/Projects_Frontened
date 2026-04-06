import axios from "axios";
import { useEffect, useState } from "react";
import {Globalcontext} from "/home/mohit/Desktop/Coding/Projects/Project1/src/GlobalContext/globalcontext.jsx"
import { useContext } from "react"


const Flower = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading,setLoading] = useState(true)
  const {cart,setCart} = useContext(Globalcontext)

  const apidata = async () => {
    try {
 
      const res = await axios.get("http://localhost:8000/flower")

    
      const dataArray = Object.values(res.data);
      console.log(res.data)
      console.log(dataArray)
      setFlowers(dataArray)
      setLoading(false)
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    apidata();
  }, []);


 const addcart = () => {
    setCart(prev => {
      const updated = prev + 1
      return updated
    })
  }

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
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{flower.name}</h2>
              <p className="text-green-600 font-bold">₹{flower.price}</p>
              <p className="text-gray-500 text-sm mb-4"> {flower.description}
              </p>

             
              <div className="flex gap-2 justify-center">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"

                >
                  Buy Now
                </button>

                <button
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                  onClick={addcart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Flower;