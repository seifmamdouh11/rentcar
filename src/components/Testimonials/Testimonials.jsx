import React from 'react'
import './Testimonials.css'
import TestCard from '../TestCard/TestCard'
export default function Testimonials() {
    return (
        <>
            <div className="container-fluid Testimonials position-relative p-5" data-aos='fade-right'>
                <div className="container my-5">
                    <h4 className="popularBtn my-4 mx-auto">popular rental deals</h4>
                    <h3 className="fw-bold fs-1 text-center mb-5">What peole say about us?</h3>
                </div>
                <TestCard />
            </div>
        </>
    )
}
