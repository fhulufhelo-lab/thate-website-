import React, { children } from 'react'
import Header from '../Componets/Header.js';
import Footer from '../Componets/Footer.js';
function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default MainLayout