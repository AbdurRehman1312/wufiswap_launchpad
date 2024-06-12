import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
function Layout() {
    return (
        <>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default Layout