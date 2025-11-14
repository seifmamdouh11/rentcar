import React from 'react'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import './ContactContent.css'
import mobile from '../../assets/images/mobile.png'
export default function ContactContent() {
    return (
        <>
            <div className="row position-relative" data-aos="fade-left">
                <div className="col-md-6">
                    <div className="d-flex flex-column justify-content-center  gap-4 text-center ">
                        <h3 className='text-uppercase fw-bold fs-1 lh-base'>Download Rentcars<br /> App for <span className="text-primary fs-1">FREE</span></h3>
                        <p>For faster, easier booking and exclusive deals.</p>
                        <div className="storeBtns d-flex gap-4 justify-content-center">
                            <a href=""><img src={google} alt="google" width={150} /></a>
                            <a href=""><img src={apple} alt="apple" width={150} /></a>
                        </div>
                        <form className="my-4 d-flex flex-column gap-4 w-100" style={{ maxWidth: "350px", margin: "0 auto" }}>
                            <input type="text" className="form-control contactInput" placeholder="Name" />
                            <input type="email" className="form-control contactInput" placeholder="Email" />
                            <input type="text" className="form-control contactInput" placeholder="Subject" />
                            <button className="btn btn-primary w-50 mx-auto p-2 fs-5">Send</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end align-items-end mt-5 mt-md-0">
                    <img src={mobile} alt="App" className="img-fluid" width={400} />
                </div>

            </div>
        </>
    )
}
