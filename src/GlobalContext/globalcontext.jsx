import { createContext, useState } from "react";


export const Globalcontext = createContext()

const Globalprovider = ({children}) => {
    const [cart,setCart] = useState(0)


    return (
            <Globalcontext.Provider value={{cart, setCart}}>
                {children}
            </Globalcontext.Provider>
    
    )

}

export default Globalprovider