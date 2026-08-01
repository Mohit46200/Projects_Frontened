import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import BackToTop from "../Common/BackToTop"
import PageTransition from "../Common/PageTransition"
import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

const Layout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <Header/>
            <AnimatePresence mode="wait">
                <PageTransition key={location.pathname}>
                    <Outlet/>
                </PageTransition>
            </AnimatePresence>
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default Layout
