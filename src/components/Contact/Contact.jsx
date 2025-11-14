import React from 'react'
import mainImg2 from '../../assets/images/mainImg2.png'
import ContactContent from '../ContactContent/ContactContent'
export default function Contact() {
    return (
        <>
            <div className="container-fluid contactContainer p-0 ">
                <div className="px-5 pt-5 position-relative overflow-hidden">
                              <img src={mainImg2} alt="mainImg" className="img-fluid position-absolute top-0 start-0 absImg" />
                    <ContactContent/>
                </div>
            </div>
        </>
    )
}
