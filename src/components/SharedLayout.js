import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

export default function SharedLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
