import React from 'react'
import HowCard from '../HowCard/HowCard'
import AutoPlay from '../Autoplayer/Autoplayer'

export default function How() {
    return (
        <>
            <div className="container py-5" data-aos="fade-up-right">
                <h4 className="popularBtn my-5 mx-auto">HOW IT WORKS</h4>
                <h3 className="fw-bold fs-1 text-center mb-5">Rent with following 3 working steps</h3>
                <div className="row g-0">
                    <HowCard />
                </div>
                <AutoPlay />
            </div> 
        </>
    )
}
