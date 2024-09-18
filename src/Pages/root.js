import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box } from "@mui/material"

export default function Root() {
    return (
        <div className=" w-full h-screen font-sans m-0">
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    }}
                className="bg-slate-100">
                <Navbar />
                <Outlet />
                <Footer />
            </Box>
        </div>
    )
}