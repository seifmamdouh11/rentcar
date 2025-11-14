import React from 'react'
import HowImg1 from '../../assets/images/How1.png'
import HowImg2 from '../../assets/images/How2.png'
import HowImg3 from '../../assets/images/How3.png'
export default function HowCard() {
    return (
        <>
            <div className="col-md-4 mt-5">
                <div className="d-flex flex-column align-items-center gap-2">
                    <img src={HowImg1} alt="HowImg1" className="img-fluid mb-2" width={90} />
                    <h5 className="text-uppercase fw-none text-center m-0">Choose location</h5>
                    <p className="text-center text-secondary fs-6 w-50">Choose your and find your best car</p>
                </div>
            </div>
            <div className="col-md-4 mt-5">
                <div className="d-flex flex-column align-items-center gap-2">
                    <img src={HowImg2} alt="HowImg1" className="img-fluid mb-2" width={90} />
                    <h5 className="text-uppercase fw-none text-center m-0">Pick-up date</h5>
                    <p className="text-center text-secondary fs-6 w-50">Select your pick up date an time to book your car</p>
                </div>
            </div>
            <div className="col-md-4 mt-5">
                <div className="d-flex flex-column align-items-center gap-2">
                    <img src={HowImg3} alt="HowImg1" className="img-fluid mb-2" width={90} />
                    <h5 className="text-uppercase fw-none text-center m-0">Book your car</h5>
                    <p className="text-center text-secondary fs-6 w-50">Book your car and we will deliver it directly to you</p>
                </div>
            </div>
        </>
    )
}
