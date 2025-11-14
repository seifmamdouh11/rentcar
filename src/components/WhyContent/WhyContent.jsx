import React from 'react'
import secondCar from '../../assets/images/secondCar.png'

import WhyCards from '../WhyCards/WhyCards'
export default function WhyContent() {
    return (
        <>
            <div className="row align-items-center justify-content-center py-5">
                <div className="col-md-6 h-100 position-relative h-100" >
                    <img src={secondCar} alt="secondCar" className="secondCar img-fluid " data-aos="fade-right"/>
                </div>
                <div className="col-md-6 position-relative h-100 p-0 m-0" data-aos="fade-left">
                    <div className="container">
                        <h4 className="popularBtn mx-md-0 mx-auto my-2">popular rental deals</h4>
                        <h3 className="text-uppercase lh-base text-center text-md-start mx-md-0 mx-auto m-0 w-75">We offer the best experience with our rental dealss</h3>
                    </div>
                    <div className="row m-auto">
                        <WhyCards />
                    </div>
                </div>
            </div>
        </>
    )
}
