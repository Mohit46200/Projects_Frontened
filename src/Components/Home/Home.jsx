import floom from "../../Images/floom.png"
import floom2 from "../../Images/floom2.png"

const Home = () => {

    
    return (
        <>
            
            <section className="relative overflow-hidden bg-[#f8f2ee]">
            
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                
                <div>
                    <span className="uppercase tracking-[0.35em] text-xs text-[#7b2140] font-medium">
                    Modern Floral Studio
                    </span>

                    <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] font-serif text-gray-900">
                    Flowers that
                    <span className="block italic text-[#7b2140]">
                        feel unforgettable
                    </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
                    Elegant bouquets designed by independent florists across India —
                    thoughtfully arranged, beautifully wrapped and delivered with care.
                    </p>

                
                    <div className="mt-10 flex flex-wrap gap-4">
                    <div className="bg-[#6b1d3a] text-white px-8 py-4 rounded-full shadow-lg">
                        Explore Bouquets
                    </div>

                    <div className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full bg-white">
                        Seasonal Collections
                    </div>
                    </div>

                
                    <div className="mt-12 flex flex-wrap gap-3">
                    {[
                        "Same-day delivery",
                        "Luxury bouquets",
                        "Handcrafted flowers",
                        "Premium gifting",
                    ].map((item, index) => (
                        <div
                        key={index}
                        className="bg-white border border-gray-200 px-5 py-3 rounded-full text-sm text-gray-700 shadow-sm"
                        >
                        ✿ {item}
                        </div>
                    ))}
                    </div>
                </div>

                
                <div className="relative h-[650px] hidden lg:block">
                    
                    
                    <div className="absolute top-0 right-0 w-[420px] h-[520px] rounded-[40px] overflow-hidden shadow-2xl rotate-2">
                    <img
                        src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Flowers"
                        className="w-full h-full object-cover"
                    />
                    </div>

                
                    <div className="absolute bottom-10 left-0 bg-white p-5 rounded-[28px] shadow-2xl w-[260px] border border-gray-100">
                    <div className="flex items-center gap-4">
                        <img
                        src={floom}
                        alt="Bouquet"
                        className="w-20 h-20 rounded-2xl object-cover"
                        />

                        <div>
                        <p className="text-sm text-gray-500">
                            Best Seller
                        </p>

                        <h3 className="font-serif text-xl text-gray-900">
                            Pink Orchid
                        </h3>

                        <p className="text-[#7b2140] mt-1 text-sm">
                            Handcrafted bouquet
                        </p>
                        </div>
                    </div>
                    </div>

                    
                    <div className="absolute top-10 left-10 w-24 h-24 border border-[#7b2140]/20 rounded-full" />
                    <div className="absolute bottom-40 right-20 w-12 h-12 bg-[#7b2140]/10 rounded-full" />
                </div>
                </div>
            </div>
            </section>

                
                <section className="bg-[#faf7f5] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                    <span className="text-sm uppercase tracking-[0.3em] text-[#7b2140]">
                        Why Choose Us
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">
                        Why send flowers with Floom?
                    </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                        icon: "🌿",
                        title: "What you see is what you get",
                        text: "Every bouquet arrives freshly handcrafted and beautifully presented exactly as shown.",
                        },
                        {
                        icon: "☀️",
                        title: "One of a kind, every time",
                        text: "Designed by passionate local florists with creativity, elegance and seasonal freshness.",
                        },
                        {
                        icon: "🙌",
                        title: "Delivered with care",
                        text: "From arrangement to doorstep, every delivery is handled with exceptional care and attention.",
                        },
                    ].map((item, index) => (
                        <div
                        key={index}
                        className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                        <div className="h-16 w-16 rounded-2xl bg-[#f8ece8] flex items-center justify-center text-3xl mb-8">
                            {item.icon}
                        </div>

                        <h3 className="text-2xl font-serif text-gray-900 mb-4 leading-snug">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </section>

            
                <section className="bg-[#f5e7df] overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
                    <div className="h-[500px] overflow-hidden">
                    <img
                        src={floom}
                        alt="Flowers"
                        className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                    </div>

                    <div className="px-8 lg:px-20 py-16">
                    <span className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Handcrafted With Love
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                        Every bouquet signed, sealed & delivered with love
                    </h2>

                    <p className="mt-8 text-gray-700 leading-relaxed text-lg max-w-xl">
                        Our handwritten gift messages make every floral delivery feel deeply
                        personal. Each bouquet arrives beautifully wrapped and thoughtfully
                        delivered to create unforgettable moments.
                    </p>

                    <div className="mt-10 inline-flex items-center bg-[#7a1f3d] text-white px-8 py-4 rounded-xl shadow-lg">
                        Explore Bouquets
                    </div>
                    </div>
                </div>
                </section>

            
                <section className="bg-[#fbf6f2] py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                    <span className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Join Our Network
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                        Are you a passionate florist based in India?
                    </h2>

                    <p className="mt-8 text-gray-700 text-lg leading-relaxed">
                        We’re building a community of talented independent florists across
                        India. Grow your floral business, showcase your unique artistry and
                        reach more customers nationwide while staying true to your creative
                        identity.
                    </p>

                    <div className="mt-10 inline-flex bg-[#5b132c] text-white px-8 py-4 rounded-xl shadow-lg">
                        Sell on Floom India
                    </div>
                    </div>

                    <div className="relative">
                    <div className="absolute -top-6 -right-6 h-full w-full border-2 border-[#7b2140] rounded-[32px]" />

                    <img
                        src={floom2}
                        alt="Florist"
                        className="relative rounded-[32px] w-full h-[550px] object-cover shadow-2xl"
                    />
                    </div>
                </div>
                </section>

            
                <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    
                    <div>
                    <span className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Support
                    </span>

                    <h2 className="mt-5 text-4xl font-serif text-gray-900 mb-12">
                        Frequently asked questions
                    </h2>

                    <div className="space-y-6">
                        {[
                        "How does flower delivery work?",
                        "Do you offer same-day delivery?",
                        "Can I schedule future deliveries?",
                        "Can I personalize my bouquet?",
                        "What happens if nobody is home?",
                        "What if there is a delivery issue?",
                        ].map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#faf7f5] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{faq}</h3>

                            <span className="text-xl text-gray-500">+</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                
                    <div>
                    <span className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Delivery Areas
                    </span>

                    <h2 className="mt-5 text-4xl font-serif text-gray-900 mb-12">
                        Flowers delivered across India
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                        {[
                        "Delhi",
                        "Mumbai",
                        "Goa",
                        "Hyderabad",
                        "Chennai",
                        "Chandigarh",
                        "Uttarakhand",
                        "Himachal",
                        "Shillong",
                        "Gurgaon",
                        "Aligarh",
                        "Narora",
                        ].map((city, index) => (
                        <div
                            key={index}
                            className="bg-[#faf7f5] border border-gray-100 rounded-xl px-5 py-4 text-gray-700 hover:bg-[#7b2140] hover:text-white transition cursor-default"
                        >
                            {city}
                        </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-[#6b1d3a] rounded-[32px] p-10 text-white">
                        <h3 className="text-3xl font-serif leading-snug">
                        Delivering smiles, one bouquet at a time
                        </h3>

                        <p className="mt-4 text-white/80 leading-relaxed">
                        Elegant flowers handcrafted by India’s finest florists and
                        delivered with care.
                        </p>
                    </div>
                    </div>
                </div>
                </section>
            </>
        )
}

export default Home