import React from 'react'
import WhyContent from '../WhyContent/WhyContent'
import mainImg2 from '../../assets/images/mainImg2.png'
import './Why.css'
export default function Why() {

  return (
    <>
      <div className="container-fluid p-0">
        <div className="position-relative overflow-hidden">
          <img src={mainImg2} alt="mainImg" className="img-fluid position-absolute top-0 start-0 absImg" />
          <WhyContent />
        </div>
      </div>
    </>
  )
}
