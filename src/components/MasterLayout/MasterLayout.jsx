import React from 'react'
import Home from '../Home/Home'
import SearchCar from '../SearchCar/SearchCar'
import How from '../How/How'
import Why from '../Why/Why'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
export default function MasterLayout() {
    return (
        <>
            <Home />
            <SearchCar />
            <How />
            <Why />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}
