import React from 'react'
import lightLogo from '../../assets/images/lightLogo.png'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="container-fluid footer bg-dark" data-aos="fade-up">
                <div className="container p-4"> 
                    <div className="footerMain row g-5">
                        <div className="col-md-4 col-12">
                            <img src={lightLogo} alt="logo" className="img-fluid mb-4" width={150} />
                            <ul className="list-unstyled text-light">
                                <li className='mb-4'><i className="fa fa-location text-light me-1 fs-4"></i>25566 Hc 1, Glenallen,<br />Alaska, 99588, USA</li>
                                <li className='mb-4'><i className="fa fa-mobile text-light me-1 fs-4"></i>+603 4784 273 12</li>
                                <li className='mb-4'><i className="fa fa-envelope text-light me-1 fs-4"></i>rentcars@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-12">
                            <h4 className="text-light fw-bold">Our Product</h4>
                            <ul className="listStyling list-unstyled text-light">
                                <li className='mb-2'><a href="">Career</a></li>
                                <li className='mb-2'><a href="">Car</a></li>
                                <li className='mb-2'><a href="">Packages</a></li>
                                <li className='mb-2'><a href="">Features</a></li>
                                <li className='mb-2'><a href="">Priceline</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-12">
                            <h4 className="text-light fw-bold">Resources</h4>
                            <ul className="listStyling list-unstyled text-light">
                                <li className='mb-2'><a href="">Download</a></li>
                                <li className='mb-2'><a href="">Help Centre</a></li>
                                <li className='mb-2'><a href="">Guides</a></li>
                                <li className='mb-2'><a href="">Partner Network</a></li>
                                <li className='mb-2'><a href="">Cruises</a></li>
                                <li className='mb-2'><a href="">Developer</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-12">
                            <h4 className="text-light fw-bold">About Rentcars</h4>
                            <ul className="listStyling list-unstyled text-light">
                                <li className='mb-2'><a href="">Why choose us</a></li>
                                <li className='mb-2'><a href="">Our Story</a></li>
                                <li className='mb-2'><a href="">Investor Relations</a></li>
                                <li className='mb-2'><a href="">Press Center</a></li>
                                <li className='mb-2'><a href="">Advertise</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='text-light' />
                    <span className='text-secondary'>Copyright © 2022 Rentcars. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}
