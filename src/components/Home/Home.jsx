import React from 'react'
import Navbar from '../Navbar/Navbar'
import HomeContent from '../HomeContent/HomeContent'
import mainImg from '../../assets/images/mainImg.png'
import './Home.css'
export default function Home() {

  return (
    <>
          <Navbar />
      <div className="container-fluid p-0">
        <div className="homeContainer position-relative overflow-hidden vh-100" >
          <img src={mainImg} alt="mainImg" className="img-fluid position-absolute top-0 end-0 absImg" />
          <HomeContent />
        </div>
      </div>
    </>
  )
}
