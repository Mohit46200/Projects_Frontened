import homeImage from "../../Images/homeImage.jpg"
import floom from "../../Images/floom.png"
import floom2 from "../../Images/floom2.png"

const Home = () => {

    return (
            <>
                 <section className="relative w-full h-[500px] md:h-[600px]">
                
               
                <img 
                    src={homeImage}
                    alt="Flowers"
                    class="absolute inset-0 w-full h-full object-cover"
                />

               
               <div className="relative max-w-7xl mx-auto h-full flex items-center justify-start px-6">
                    
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-lg">
                    
                    
                    <h1 className="text-3xl md:text-4xl font-serif text-gray-900 leading-snug">
                        Same-day flower delivery across the India
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Luxury bouquets & gifts hand-delivered by local florists
                    </p>

                   
                    <div className="mt-6 flex flex-col md:flex-row gap-3">
                        
                     
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                        <span className="mr-2 text-gray-400">📍</span>
                        <input 
                            type="text" 
                            placeholder="Zipcode"
                            className="w-full outline-none text-sm"
                        />
                        </div>

                        
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                        <span className="mr-2 text-gray-400">📅</span>
                        <select className="w-full outline-none text-sm bg-transparent">
                            <option>Anytime</option>
                            <option>Today</option>
                            <option>Tomorrow</option>
                        </select>
                        </div>

                       
                        <button className="bg-[#6b1d3a] hover:bg-[#5a1830] text-white px-6 py-2 rounded-md text-sm font-medium transition">
                        Shop now
                        </button>

                    </div>

                    </div>
                </div>

            </section>

            <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
               
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-12">
                    Why send flowers with Floom?
                    </h2>

                   
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
              
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 text-gray-700">
                        
                        <span className="text-2xl">🌿</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        What you see is what you get
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                        Your bouquet arrives freshly made and just as pictured.
                        </p>
                    </div>

                 
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 text-gray-700">
                        <span className="text-2xl">☀️</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        One of a kind, every time
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                        Each design is handcrafted by a local independent florist.
                        </p>
                    </div>

                   
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 text-gray-700">
                        <span className="text-2xl">🙌</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Delivered with care
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                        Hand-arranged and delivered safely, right on time.
                        </p>
                    </div>

                    </div>
                </div>
            </section>


            <section class="bg-[#f3e7df]">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

                   
                    <div class="h-[400px] md:h-[500px]">
                    <img 
                        src={floom} 
                        alt="Flowers and card"
                        class="w-full h-full object-cover"
                    />
                    </div>

                    
                    <div class="px-8 md:px-16 py-12">
                    <h2 class="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-snug">
                        Every bouquet signed-sealed-delivered with love
                    </h2>

                    <p class="text-gray-700 leading-relaxed mb-8 max-w-md">
                        Our handwritten gift messages make your delivery all that much more personal. 
                        Each bouquet arrives with a beautifully crafted note, sealed safely and delivered 
                        with care, ensuring your message reaches your loved ones perfectly.
                    </p>

                    <button class="bg-[#7a1f3d] text-white px-6 py-3 rounded-md hover:bg-[#5c172e] transition">
                        Shop Bouquets
                    </button>
                    </div>

                </div>
            </section>

            <section class="bg-[#f5ece6] py-16 px-6">
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                  
                    <div>
                    <h2 class="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                        Are you a passionate florist based in India?
                    </h2>

                    <p class="text-gray-700 leading-relaxed mb-8">
                        We're always on the lookout for talented, independent florists across India to join our growing community! 
                        As a partner, you'll retain your unique style and creativity while expanding your reach to more flower lovers 
                        across the country. Grow your brand, reach new customers, and take your floral business to the next level with us.
                    </p>

                    <button class="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-950 transition">
                        Sell on Floom India
                    </button>
                    </div>

                    
                    <div>
                    <img 
                        src={floom2}
                        alt="Florist arranging flowers" 
                        class="w-full h-full object-cover rounded-lg"
                    />
                    </div>

                </div>
             </section>


            <section class="bg-gray-100 py-16 px-6">
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    
                    <div>
                    <h2 class="text-2xl md:text-3xl font-serif mb-8">
                        Our most frequently asked questions
                    </h2>

                    <div class="space-y-6">
                        
                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            How does flowers delivery with Floom work?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Enter the delivery zip code to browse unique bouquets from independent local florists in that area. Choose your favorite design and our florist partner will handcraft and deliver flowers directly to your recipient.
                        </p>
                        </div>

                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            Do you offer same-day and next-day flowers delivery in the U.S.?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Yes. Same-day flowers delivery is available in many areas across the U.S. when you order by 1pm. Next-day delivery is available when you place your order by midnight.
                        </p>
                        </div>

                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            Can I get flowers delivered on weekends or schedule a future date?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Many florists offer weekend delivery. You can also schedule your order up to 45 days in advance.
                        </p>
                        </div>

                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            Can I personalize my order with add-ons or a gift message?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Yes. Add chocolates, candles, vases, balloons and more. Every order includes a notecard.
                        </p>
                        </div>

                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            What happens if the recipient is not home?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            You can request safe delivery or leave with a neighbor during checkout.
                        </p>
                        </div>

                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            What if there is a problem with my delivery?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Contact support if your flowers arrive damaged or not as expected.
                        </p>
                        </div>

                        <div>
                        <h3 class="font-semibold text-gray-800 mb-1">
                            Do you offer eco-friendly delivery options?
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Many florists use sustainable packaging and seasonal flowers.
                        </p>
                        </div>

                    </div>
                    </div>

                 
                    <div>
                    <h2 class="text-2xl md:text-3xl font-serif mb-8">
                        Flowers delivered in the India
                    </h2>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-gray-700 text-sm">
                        <a href="#" class="hover:underline">Delhi</a>
                        <a href="#" class="hover:underline">Uttarakhand</a>
                        <a href="#" class="hover:underline">Mumbai</a>

                        <a href="#" class="hover:underline">Goa</a>
                        <a href="#" class="hover:underline">Hyderabad</a>
                        <a href="#" class="hover:underline">Chennai</a>

                        <a href="#" class="hover:underline">Himachal</a>
                        <a href="#" class="hover:underline">Chandigarh</a>
                        <a href="#" class="hover:underline">Shilong</a>

                        <a href="#" class="hover:underline">Narora</a>
                        <a href="#" class="hover:underline">Gudgaon</a>
                        <a href="#" class="hover:underline">Aligarh</a>

                    </div>
                    </div>

                </div>
            </section>
            </>


    )
}

export default Home