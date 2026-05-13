const Footer = () => {

        return (
        <footer className="bg-[#f7f1ed] border-t border-[#eaded8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-[1.2fr_2fr] gap-16">
                <div>
                <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
                    Floom India
                </span>

                <h2 className="mt-5 text-5xl font-serif text-gray-900 leading-tight">
                    Flowers designed to make every moment memorable
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
                    Luxury bouquets handcrafted by passionate florists and delivered
                    beautifully across India.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    {[
                    "Same-day Delivery",
                    "Luxury Bouquets",
                    "Premium Gifting",
                    ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 shadow-sm"
                    >
                        ✿ {item}
                    </div>
                    ))}
                </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-lg font-serif text-gray-900 mb-6">
                    Support
                    </h3>

                    <ul className="space-y-4 text-gray-600">
                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        FAQs
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Returns & Refunds
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Contact Us
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Help Centre
                        </a>
                    </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-serif text-gray-900 mb-6">
                    Company
                    </h3>

                    <ul className="space-y-4 text-gray-600">
                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        About
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Magazine
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Careers
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Sell on Floom
                        </a>
                    </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-serif text-gray-900 mb-6">
                    Legal
                    </h3>

                    <ul className="space-y-4 text-gray-600">
                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Cookie Policy
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Privacy Policy
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Terms of Service
                        </a>
                    </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-serif text-gray-900 mb-6">
                    Explore
                    </h3>

                    <ul className="space-y-4 text-gray-600">
                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Valentine's Day
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Mother's Day
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Wedding Flowers
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#7b2140] transition">
                        Seasonal Collections
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="mt-20 border-t border-[#eaded8] pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
                <p className="text-sm text-gray-500 text-center lg:text-left">
                © 2026 Floom India. All rights reserved.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Designed with love</span>

                <div className="w-2 h-2 rounded-full bg-[#7b2140]" />

                <span>Luxury floral experiences across India</span>
                </div>
            </div>
            </div>
        </footer>
        )
}

export default Footer