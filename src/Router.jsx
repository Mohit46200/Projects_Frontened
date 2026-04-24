import { createBrowserRouter ,Navigate } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Homechild from "./Components/Home/Homechild"
import FlowerChild from "./Components/Flower/FlowerChild"
import  PlantChild from "./Components/Plant/PlantChild"
import Loginchild from "./Google_Login/Loginchild"
import CartChild from "./Components/Cart/CartChild"

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Navigate to={"/home"}/>
            },
            Homechild(),
            FlowerChild(),
            PlantChild(),
            Loginchild(),
            CartChild()
        ]
    }

])

export default Router