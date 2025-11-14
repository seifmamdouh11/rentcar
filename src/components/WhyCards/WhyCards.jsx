import React from 'react'
import rowImg1 from '../../assets/images/rowImg1.png'
import rowImg2 from '../../assets/images/rowImg2.png'
import rowImg3 from '../../assets/images/rowImg3.png'
import rowImg4 from '../../assets/images/rowImg4.png'
import './WhyCards.css'
export default function WhyCards() {
    return (
        <>
            <div className="col-12">
                <div className="container d-flex align-items-center gap-3 mt-5">
                    <div className="rowImg"><img src={rowImg1} alt="rowImg1" width={60} height={60} /></div>
                    <div className="rowText lh-base">
                        <h5>Best price guaranteed</h5>
                        <span className='text-secondary'>Find a lower price? We’ll refund you 100% of the difference.</span>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="container d-flex align-items-center gap-3 mt-5">
                    <div className="rowImg"><img src={rowImg2} alt="rowImg1" width={60} height={60} /></div>
                    <div className="rowText lh-base">
                        <h5>Experience driver</h5>
                        <span className='text-secondary'>Don’t have driver? Don’t worry, we have many experienced driver for you.</span>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="container d-flex align-items-center gap-3 mt-5">
                    <div className="rowImg"><img src={rowImg3} alt="rowImg1" width={60} height={60} /></div>
                    <div className="rowText lh-base">
                        <h5>24 hour car delivery</h5>
                        <span className='text-secondary'>Book your car anytime and we will deliver it directly to you.</span>
                    </div>
                </div>
            </div>
            
            <div className="col-12">
                <div className="container d-flex align-items-center gap-3 mt-5">
                    <div className="rowImg"><img src={rowImg4} alt="rowImg1" width={60} height={60} /></div>
                    <div className="rowText lh-base">
                        <h5>24/7 technical support</h5>
                        <span className='text-secondary'>Have a question? Contact Rentcars support any time when you have problem.</span>
                    </div>
                </div>
            </div>


        </>
    )
}
