import { createContext, useState, useEffect} from "react"
import axios from "axios";

export const Globalcontext = createContext()

const Globalprovider = ({ children }) => {

  const [cart, setCart] = useState(0)
  const [login,setLogin] = useState(false)
  const [userLoginData,setUserLoginData] = useState()
  const [userCartData,setUserCartData] = useState({})
  const [flowers,setFlowers] = useState([])
  const [plant,setPlant] = useState([])
  const [clickedonAddtoCart,setClickedonAddtoCart] = useState(false)
  const [totalBill, setTotalBill] = useState(0)

  const [loading_F,setLoading_F] = useState(true)
  const [loading_P,setLoading_P] = useState(true)


  const apidata = async () => {
      try {
        const res = await axios.get("https://projects-backend-6.onrender.com/flower")
        const dataArray_F = Object.values(res.data)
        setFlowers(dataArray_F)
        setLoading_F(false)

        const res2 = await axios.get("https://projects-backend-6.onrender.com/plant")
        const dataArray_P = Object.values(res2.data)
        setPlant(dataArray_P)
        setLoading_P(false)
        
      } catch (error) {
        console.log("Error is ", error)
      }
    }
  
    useEffect(() => {
      apidata()
    }, [])


     useEffect(() => {
      const token = localStorage.getItem("token")
      const user = localStorage.getItem("user")
  
      if (token && user) {
        setLogin(true)
        setUserLoginData(JSON.parse(user))
      }
    }, [login])


    const cartdata = async () => {
    try{
        const data = await axios.get(`https://projects-backend-6.onrender.com/data/cartcount/${userLoginData.email}`)
        setUserCartData(data.data.data)
        setCart(data.data.data.product_id.length)
        setClickedonAddtoCart(false)
    }catch(error){
      console.log("Error is ",error)
    }
  }

  useEffect(() => {
    cartdata()
  },[login,userLoginData,clickedonAddtoCart])


  
  return (
    <Globalcontext.Provider value={{ 
      cart, setCart, login, setLogin ,userLoginData , setUserLoginData,userCartData, setUserCartData, flowers, setFlowers,
      plant, setPlant, clickedonAddtoCart, setClickedonAddtoCart, totalBill, setTotalBill, loading_F,setLoading_F
      ,loading_P,setLoading_P
    }}>
      {children}
    </Globalcontext.Provider>
  )
}

export default Globalprovider