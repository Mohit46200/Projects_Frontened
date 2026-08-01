import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import floom from "../../Images/floom.png"
import floom2 from "../../Images/floom2.png"

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const petals = [
    { left: "6%", size: 20, duration: 10, delay: 0 },
    { left: "16%", size: 13, duration: 8, delay: 1.4 },
    { left: "30%", size: 22, duration: 12, delay: 0.6 },
    { left: "44%", size: 15, duration: 9, delay: 2.2 },
    { left: "58%", size: 18, duration: 11, delay: 0.3 },
    { left: "70%", size: 12, duration: 7.5, delay: 1.8 },
    { left: "83%", size: 24, duration: 10.5, delay: 0.9 },
    { left: "93%", size: 14, duration: 8.5, delay: 2.6 },
]

const tickerItems = [
    "Same-day delivery",
    "Handcrafted bouquets",
    "Nationwide shipping",
    "Fresh daily",
    "Premium gifting",
    "Independent florists",
]

const Home = () => {

    const shouldReduceMotion = useReducedMotion()
    const [openFaq, setOpenFaq] = useState(null)

    const floatFast = shouldReduceMotion
        ? {}
        : { y: [0, -18, 0], scale: [1, 1.04, 1], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }

    const floatSlow = shouldReduceMotion
        ? {}
        : { y: [0, 16, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }

    const pulseGlow = shouldReduceMotion
        ? {}
        : { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }

    const spinSlow = shouldReduceMotion
        ? {}
        : { rotate: 360, transition: { duration: 24, repeat: Infinity, ease: "linear" } }

    const spinReverse = shouldReduceMotion
        ? {}
        : { rotate: -360, transition: { duration: 30, repeat: Infinity, ease: "linear" } }

    const scrollCue = shouldReduceMotion
        ? {}
        : { y: [0, 10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }

    const buttonGlow = shouldReduceMotion
        ? {}
        : {
            boxShadow: [
                "0 10px 25px -8px rgba(107,29,58,0.35)",
                "0 15px 35px -5px rgba(107,29,58,0.65)",
                "0 10px 25px -8px rgba(107,29,58,0.35)"
            ],
            transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
        }

    return (
        <>

            <section className="relative overflow-hidden bg-[#f8f2ee]">

            <motion.div animate={pulseGlow} className="absolute top-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
            <motion.div animate={pulseGlow} transition={{ delay: 1.2 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl" />

            {petals.map((p, i) => (
                <motion.span
                key={i}
                className="absolute select-none pointer-events-none text-[#7b2140]/30"
                style={{ left: p.left, top: "-40px", fontSize: p.size }}
                animate={shouldReduceMotion ? {} : {
                    y: [0, 700],
                    x: [0, 20, -20, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 1, 0]
                }}
                transition={shouldReduceMotion ? {} : { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
                >
                ✿
                </motion.span>
            ))}

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
                <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-16 items-center"
                >


                <div>
                    <motion.span variants={fadeUp} className="uppercase tracking-[0.35em] text-xs text-[#7b2140] font-medium">
                    Modern Floral Studio
                    </motion.span>

                    <motion.h1 variants={fadeUp} className="mt-6 text-5xl md:text-7xl leading-[1.05] font-serif text-gray-900">
                    Flowers that
                    <motion.span variants={fadeUp} className="block italic text-[#7b2140]">
                        feel unforgettable
                    </motion.span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
                    Elegant bouquets designed by independent florists across India —
                    thoughtfully arranged, beautifully wrapped and delivered with care.
                    </motion.p>


                    <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                    <motion.div
                        animate={buttonGlow}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.94 }}
                        className="bg-[#6b1d3a] text-white px-8 py-4 rounded-full shadow-lg cursor-pointer"
                    >
                        Explore Bouquets
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.06, backgroundColor: "#f8f2ee" }}
                        whileTap={{ scale: 0.94 }}
                        className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full bg-white cursor-pointer"
                    >
                        Seasonal Collections
                    </motion.div>
                    </motion.div>


                    <motion.div variants={staggerContainer} className="mt-12 flex flex-wrap gap-3">
                    {[
                        "Same-day delivery",
                        "Luxury bouquets",
                        "Handcrafted flowers",
                        "Premium gifting",
                    ].map((item, index) => (
                        <motion.div
                        key={index}
                        variants={scaleIn}
                        whileHover={{ scale: 1.08, backgroundColor: "#f8ece8" }}
                        className="bg-white border border-gray-200 px-5 py-3 rounded-full text-sm text-gray-700 shadow-sm cursor-pointer"
                        >
                        <motion.span
                            animate={shouldReduceMotion ? {} : { rotate: [0, 15, -15, 0] }}
                            transition={shouldReduceMotion ? {} : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            className="inline-block mr-1"
                        >
                            ✿
                        </motion.span>
                        {item}
                        </motion.div>
                    ))}
                    </motion.div>
                </div>


                <div className="relative h-[650px] hidden lg:block">


                    <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 2 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-0 right-0 w-[420px] h-[520px] rounded-[40px] overflow-hidden shadow-2xl"
                    >
                    <motion.img
                        src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Flowers"
                        animate={floatFast}
                        whileHover={{ scale: 1.08 }}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>


                    <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-10 left-0 w-[260px]"
                    >
                    <motion.div
                        animate={floatSlow}
                        whileHover={{ scale: 1.04, boxShadow: "0 25px 45px -12px rgba(0,0,0,0.3)" }}
                        className="bg-white p-5 rounded-[28px] shadow-2xl border border-gray-100"
                    >
                        <div className="flex items-center gap-4">
                        <motion.img
                            src={floom}
                            alt="Bouquet"
                            whileHover={{ rotate: 8, scale: 1.1 }}
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
                    </motion.div>
                    </motion.div>


                    <motion.div animate={spinSlow} className="absolute top-10 left-10 w-24 h-24 border border-[#7b2140]/20 rounded-full" />
                    <motion.div animate={spinReverse} className="absolute top-24 left-24 w-14 h-14 border border-dashed border-[#7b2140]/25 rounded-full" />
                    <motion.div animate={pulseGlow} className="absolute bottom-40 right-20 w-12 h-12 bg-[#7b2140]/10 rounded-full" />
                </div>
                </motion.div>

                <motion.div
                animate={scrollCue}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-[#7b2140]/50"
                >
                <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
                <span className="text-lg">⌄</span>
                </motion.div>
            </div>
            </section>

            <section className="bg-[#7b2140] py-4 overflow-hidden">
                <motion.div
                className="flex w-max whitespace-nowrap gap-16"
                animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
                transition={shouldReduceMotion ? {} : { duration: 22, repeat: Infinity, ease: "linear" }}
                >
                {[0, 1].map((dup) => (
                    <div key={dup} className="flex gap-16 shrink-0">
                    {tickerItems.map((text, i) => (
                        <span key={i} className="flex items-center gap-3 text-white/90 text-sm tracking-[0.25em] uppercase">
                        <span>{text}</span>
                        <span className="text-white/40">✿</span>
                        </span>
                    ))}
                    </div>
                ))}
                </motion.div>
            </section>


                <section className="relative overflow-hidden bg-[#faf7f5] py-24 px-6">
                <motion.div animate={pulseGlow} className="absolute top-10 -left-20 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />
                <motion.div animate={pulseGlow} transition={{ delay: 1.5 }} className="absolute bottom-0 -right-10 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                    >
                    <motion.span variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[#7b2140]">
                        Why Choose Us
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">
                        Why send flowers with Floom?
                    </motion.h2>
                    </motion.div>

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                    >
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
                        <motion.div
                        key={index}
                        variants={fadeUp}
                        whileHover={{ y: -12, scale: 1.02, boxShadow: "0 35px 50px -15px rgba(0,0,0,0.18)" }}
                        className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
                        >
                        <motion.div
                            whileHover={{ rotate: 14, scale: 1.1 }}
                            className="h-16 w-16 rounded-2xl bg-[#f8ece8] flex items-center justify-center text-3xl mb-8"
                        >
                            <motion.span
                            animate={shouldReduceMotion ? {} : { y: [0, -4, 0], rotate: [0, -6, 6, 0] }}
                            transition={shouldReduceMotion ? {} : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                            className="inline-block"
                            >
                            {item.icon}
                            </motion.span>
                        </motion.div>

                        <h3 className="text-2xl font-serif text-gray-900 mb-4 leading-snug">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
                </section>


                <section className="bg-[#f5e7df] overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
                    <motion.div
                    initial={{ opacity: 0, scale: 1.15 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[500px] overflow-hidden"
                    >
                    <motion.img
                        src={floom}
                        alt="Flowers"
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="px-8 lg:px-20 py-16"
                    >
                    <motion.span variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Handcrafted With Love
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-5 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                        Every bouquet signed, sealed & delivered with love
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mt-8 text-gray-700 leading-relaxed text-lg max-w-xl">
                        Our handwritten gift messages make every floral delivery feel deeply
                        personal. Each bouquet arrives beautifully wrapped and thoughtfully
                        delivered to create unforgettable moments.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.06, boxShadow: "0 20px 35px -10px rgba(122,31,61,0.45)" }}
                        whileTap={{ scale: 0.94 }}
                        className="mt-10 inline-flex items-center bg-[#7a1f3d] text-white px-8 py-4 rounded-xl shadow-lg cursor-pointer"
                    >
                        Explore Bouquets
                    </motion.div>
                    </motion.div>
                </div>
                </section>


                <section className="bg-[#fbf6f2] py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    >
                    <motion.span variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Join Our Network
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-5 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                        Are you a passionate florist based in India?
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mt-8 text-gray-700 text-lg leading-relaxed">
                        We’re building a community of talented independent florists across
                        India. Grow your floral business, showcase your unique artistry and
                        reach more customers nationwide while staying true to your creative
                        identity.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.06, boxShadow: "0 20px 35px -10px rgba(91,19,44,0.5)" }}
                        whileTap={{ scale: 0.94 }}
                        className="mt-10 inline-flex bg-[#5b132c] text-white px-8 py-4 rounded-xl shadow-lg cursor-pointer"
                    >
                        Sell on Floom India
                    </motion.div>
                    </motion.div>

                    <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: 40, y: -40, rotate: 0 }}
                        whileInView={{
                        opacity: 1, x: 0, y: 0, rotate: [0, 1.5, 0, -1.5, 0],
                        transition: {
                            opacity: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                            x: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                            y: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                            rotate: shouldReduceMotion ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                        }
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="absolute -top-6 -right-6 h-full w-full border-2 border-[#7b2140] rounded-[32px]"
                    />

                    <motion.img
                        src={floom2}
                        alt="Florist"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.03 }}
                        className="relative rounded-[32px] w-full h-[550px] object-cover shadow-2xl"
                    />
                    </div>
                </div>
                </section>


                <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    >
                    <motion.span variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Support
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-5 text-4xl font-serif text-gray-900 mb-12">
                        Frequently asked questions
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                        "How does flower delivery work?",
                        "Do you offer same-day delivery?",
                        "Can I schedule future deliveries?",
                        "Can I personalize my bouquet?",
                        "What happens if nobody is home?",
                        "What if there is a delivery issue?",
                        ].map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            whileHover={{ scale: 1.015 }}
                            whileTap={{ scale: 0.985 }}
                            animate={{
                            backgroundColor: openFaq === index ? "#f8ece8" : "#faf7f5",
                            borderColor: openFaq === index ? "#7b2140" : "#f3f4f6"
                            }}
                            transition={{ duration: 0.35 }}
                            className="border rounded-2xl p-6 cursor-pointer"
                        >
                            <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{faq}</h3>

                            <motion.span
                                animate={{ rotate: openFaq === index ? 45 : 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="text-xl text-gray-500"
                            >
                                +
                            </motion.span>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                    </motion.div>


                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    >
                    <motion.span variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#7b2140]">
                        Delivery Areas
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-5 text-4xl font-serif text-gray-900 mb-12">
                        Flowers delivered across India
                    </motion.h2>

                    <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-3 gap-5">
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
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            whileHover={{ scale: 1.08, backgroundColor: "#7b2140", color: "#ffffff", rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#faf7f5] border border-gray-100 rounded-xl px-5 py-4 text-gray-700 cursor-default"
                        >
                            <motion.span
                            animate={shouldReduceMotion ? {} : { opacity: [1, 0.6, 1] }}
                            transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                            className="inline-block"
                            >
                            {city}
                            </motion.span>
                        </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.02 }}
                        className="mt-16 bg-[#6b1d3a] rounded-[32px] p-10 text-white relative overflow-hidden"
                    >
                        <motion.div animate={pulseGlow} className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <motion.div animate={pulseGlow} transition={{ delay: 2 }} className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                        <h3 className="relative text-3xl font-serif leading-snug">
                        Delivering smiles, one bouquet at a time
                        </h3>

                        <p className="relative mt-4 text-white/80 leading-relaxed">
                        Elegant flowers handcrafted by India’s finest florists and
                        delivered with care.
                        </p>
                    </motion.div>
                    </motion.div>
                </div>
                </section>
            </>
        )
}

export default Home