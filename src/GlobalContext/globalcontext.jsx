import { createContext, useState} from "react"

export const Globalcontext = createContext()

const Globalprovider = ({ children }) => {

  const [cart, setCart] = useState(0)
  const [login,setLogin] = useState(false)
  const [userLoginData,setUserLoginData] = useState()
  const [userCartData,setUserCartData] = useState({})
  const [flowers,setFlowers] = useState([])
  const [plant,setPlant] = useState([])


  
  return (
    <Globalcontext.Provider value={{ 
      cart, setCart, login, setLogin ,userLoginData , setUserLoginData,userCartData, setUserCartData, flowers, setFlowers,
      plant, setPlant
    }}>
      {children}
    </Globalcontext.Provider>
  )
}

export default Globalprovider