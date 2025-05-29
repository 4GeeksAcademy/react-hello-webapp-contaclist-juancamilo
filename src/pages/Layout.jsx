import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useContacts } from "../context/contactContext"
import { useEffect } from "react"
import { getContacts } from "../services/apiServices"

export const Layout = () => {
    const { dispatch } = useContacts();

    useEffect(() => {
        getContacts(dispatch);
    }, [])

    return (
        <ScrollToTop>
            <div className="page-container">
                <Navbar />
                    <Outlet />
                <Footer />
            </div>
        </ScrollToTop>
    )
}
