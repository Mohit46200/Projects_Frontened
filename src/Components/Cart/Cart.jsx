import {Globalcontext} from "../../GlobalContext/globalcontext.jsx"
import { useEffect, useState ,useContext} from "react"

const Cart = () => {

    const {userCartData, setUserCartData} = useContext(Globalcontext)
    console.log(userCartData)

    return (
        <>


        </>
    )
}

export default Cart