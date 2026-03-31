import {Link} from "react-router-dom"


const Header = () => {

    


    return (
        
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
            
                <div className="text-xl font-semibold tracking-widest">
                F L O O M
                </div>

                
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    <Link to="/home" className="hover:text-black transition">Home</Link>
                    <Link to="/flower" className="hover:text-black transition">Flowers</Link>
                    <Link to="/plant" className="hover:text-black transition">Plant</Link>
                    <a href="#" className="hover:text-black transition">Gifts</a>
                    <a href="#" className="hover:text-black transition">Occasions</a>
                </nav>

                
                <div className="flex items-center space-x-6 text-sm text-gray-700">
                
                
                <div className="flex items-center space-x-2 cursor-pointer">
                    <span>Send To:</span>
                    <span>🇮🇳</span>
                </div>

                
                <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition">
                    <button
                    >Login</button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M6 20c0-4 12-4 12 0"/>
                    </svg>
                </div>

                
                <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition">
                    <span>Basket</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 6h15l-1.5 9h-13z"/>
                    <circle cx="9" cy="20" r="1"/>
                    <circle cx="18" cy="20" r="1"/>
                    </svg>
                </div>

                </div>
            </div>
        </header>
       
    )
}

export default Header