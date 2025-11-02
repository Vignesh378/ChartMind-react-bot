import React from 'react'
import Headers from "../../component/landing/Header"
import Hero from '../../component/landing/Hero.jsx'
import Faqs from "../../component/landing/Faqs"
import Features from "../../component/landing/Features"
import Footer from "../../component/landing/Footer"

function LandingPage() {
    return (
       <div className='bg-[#ffffff] text-gray-600'>
            <Headers/>
            <main >
                <Hero/>
                <Features/>
                <Faqs/>
                <Footer/>
            </main>
        </div>
    )
}

export default LandingPage
