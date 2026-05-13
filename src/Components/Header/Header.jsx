import {Link} from "react-router-dom"
import {Globalcontext} from "../../GlobalContext/globalcontext.jsx"
import { useContext } from "react"


const Header = () => {

    const {cart,setCart,login,setLogin,userLoginData} = useContext(Globalcontext)


    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#efe3dc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="h-24 flex items-center justify-between">
                <div className="flex items-center gap-14">
                <Link to="/home">
                    <h1 className="text-3xl font-serif tracking-[0.35em] text-[#6b1d3a]">
                    FLOOM
                    </h1>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link
                    to="/home"
                    className="text-sm uppercase tracking-[0.2em] text-gray-600 hover:text-[#6b1d3a] transition"
                    >
                    Home
                    </Link>

                    <Link
                    to="/flower"
                    className="text-sm uppercase tracking-[0.2em] text-gray-600 hover:text-[#6b1d3a] transition"
                    >
                    Flowers
                    </Link>

                    <Link
                    to="/plant"
                    className="text-sm uppercase tracking-[0.2em] text-gray-600 hover:text-[#6b1d3a] transition"
                    >
                    Plants
                    </Link>
                </nav>
                </div>

                <div className="flex items-center gap-5">
                <Link
                    to="/login"
                    className="flex items-center gap-3 bg-[#faf7f5] border border-[#f1e5df] px-4 py-2 rounded-full hover:shadow-md transition"
                >
                    {login ? (
                    <img
                        src={userLoginData.picture}
                        className="h-10 w-10 rounded-full object-cover border border-white shadow"
                    />
                    ) : (
                    <div className="h-10 w-10 rounded-full bg-[#f8ece8] flex items-center justify-center text-[#6b1d3a]">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M6 20c0-4 12-4 12 0" />
                        </svg>
                    </div>
                    )}

                    <div className="hidden sm:block">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                        Account
                    </p>

                    <p className="text-sm text-gray-700 font-medium">
                        {login ? "Profile" : "Login"}
                    </p>
                    </div>
                </Link>

                <Link
                    to="/cart"
                    className="relative flex items-center gap-3 bg-[#6b1d3a] text-white px-5 py-3 rounded-full hover:bg-[#571730] transition shadow-lg"
                >
                    <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M6 6h15l-1.5 9h-13z" />
                        <circle cx="9" cy="20" r="1" />
                        <circle cx="18" cy="20" r="1" />
                    </svg>

                    {cart > 0 && (
                        <span className="absolute -top-3 -right-3 bg-white text-[#6b1d3a] text-[10px] font-bold h-5 min-w-[20px] px-1 rounded-full flex items-center justify-center shadow">
                        {cart}
                        </span>
                    )}
                    </div>

                    <div className="hidden sm:block">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                        Shopping
                    </p>

                    <p className="text-sm font-medium">
                        Basket
                    </p>
                    </div>
                </Link>
                </div>
            </div>
            </div>
        </header>
        )
}

export default Header