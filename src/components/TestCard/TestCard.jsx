import React from 'react'
import person1 from '../../assets/images/person1.png'
import person2 from '../../assets/images/person2.png'
import star from '../../assets/images/star.png'

export default function TestCard() {
    return (
        <>
            <div className="container">
                {/* TESTS */}
                <div className="row Tests g-5">
                    {/* first test */}
                    <div className="col-md-6 p-5">
                        {/* test body */}
                        <div className="row test">
                            {/* test image */}
                            <div className="col-md-5 d-flex justify-content-center align-items-center p-3">
                                <div className="profile">
                                    <img src={person1} alt="person2" className="img-fluid profile-img" />
                                </div>
                            </div>
                            {/* test content */}
                            <div className="col-md-7 d-flex justify-content-center">
                                <div className="content d-flex flex-column justify-content-around py-4">
                                    <div className="rate text-center text-md-start">
                                        <h1 className="p-0 m-0">5.0<span className='ms-3 fs-5'>stars</span></h1>
                                        <div className="stars">
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                        </div>
                                    </div>
                                    <p className='lh-lg fs-6 text-center text-md-start'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <div className='text-center text-md-start'>
                                        <h6 className="fw-bold fs-4">John Doe</h6>
                                        <span className="">New York, NY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* first test */}
                    <div className="col-md-6 p-5">
                        {/* test body */}
                        <div className="row test">
                            {/* test image */}
                            <div className="col-md-5 d-flex justify-content-center align-items-center p-3">
                                <div className="profile">
                                    <img src={person2} alt="person2" className="img-fluid profile-img" />
                                </div>
                            </div>
                            {/* test content */}
                            <div className="col-md-7 d-flex justify-content-center">
                                <div className="content d-flex flex-column justify-content-around py-4">
                                    <div className="rate text-center text-md-start">
                                        <h1 className="p-0 m-0">5.0<span className='ms-3 fs-5'>stars</span></h1>
                                        <div className="stars">
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                            <img src={star} alt="star" className="img-fluid" />
                                        </div>
                                    </div>
                                    <p className='lh-lg fs-6 text-center text-md-start'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <div className='text-center text-md-start'>
                                        <h6 className="fw-bold fs-4">John Doe</h6>
                                        <span className="">New York, NY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}