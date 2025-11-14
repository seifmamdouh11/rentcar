import React from 'react'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import firstCar from '../../assets/images/firstCar.png'
export default function HomeContent() {
    return (
        <>
            <div className="row home flex-column-reverse flex-md-row">
                <div className="col-md-6 position-relative h-100" data-aos="fade-down-right">
                    <div className="homeContent mx-auto">
                        <h3 className='text-uppercase fw-bold fs-1'>Find, book and
                            <br />rent a car  <span className="text-primary fs-1">Easily</span></h3>
                        <p>Get a car wherever and whenever you need it with your IOS and Android device</p>
                        <div className="storeBtns d-flex gap-4">
                            <a href=""><img src={google} alt="google" width={150} /></a>
                            <a href=""><img src={apple} alt="apple" width={150} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 h-100 position-relative h-100" data-aos="fade-down-left"
                    data-aos-anchor="top-center"
                    data-aos-offset="500"
                    data-aos-duration="1000">
                    <img src={firstCar} alt="firstCar" className="firstCar img-fluid " />
                </div>
            </div>
        </>
    )
}
