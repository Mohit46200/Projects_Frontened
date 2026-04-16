import { createContext, useState} from "react"

export const Globalcontext = createContext()

const Globalprovider = ({ children }) => {

  const [cart, setCart] = useState(0)
  const [login,setLogin] = useState(false)
  const [userLoginData,setUserLoginData] = useState()
    const [userCartData,setUserCartData] = useState({})

  
  return (
    <Globalcontext.Provider value={{ 
      cart, setCart, login, setLogin ,userLoginData , setUserLoginData,userCartData, setUserCartData
      }}>
      {children}
    </Globalcontext.Provider>
  )
}

export default Globalprovider