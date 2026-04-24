import {Link} from "react-router-dom"
import {Globalcontext} from "../../GlobalContext/globalcontext.jsx"
import { useContext } from "react"


const Header = () => {

    const {cart,setCart,login,setLogin} = useContext(Globalcontext)


    return (
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <div className="text-xl font-bold tracking-widest">
                F L O O M
                </div>

                <nav className="hidden md:flex space-x-8 text-sm font-bold text-gray-700">
                <Link to="/home" className="hover:text-black transition">Home</Link>
                <Link to="/flower" className="hover:text-black transition">Flowers</Link>
                <Link to="/plant" className="hover:text-black transition">Plant</Link>
                </nav>

                <div className="flex items-center space-x-6 text-sm font-bold text-gray-700">
                
                <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition">
                    <Link to="/login">Login</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M6 20c0-4 12-4 12 0"/>
                    </svg>
                </div>

                <div className="flex items-center space-x-2 cursor-pointer hover:text-black transition relative">
                    <Link
                        to="/cart"
                        className="flex items-center space-x-2 hover:text-black transition"
                        >
                        <span className="font-bold">Basket</span>

                        <div className="relative">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path d="M6 6h15l-1.5 9h-13z" />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="18" cy="20" r="1" />
                            </svg>

                            {cart > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                                {cart}
                            </span>
                            )}
                        </div>
                    </Link>
                </div>

                </div>
            </div>
        </header>
    )
}

export default Header