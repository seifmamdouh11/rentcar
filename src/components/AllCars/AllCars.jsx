import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import './AllCars.css'
import CarCard from '../CarCard/CarCard'
import axios from 'axios'
import car1 from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import car3 from '../../assets/images/car3.png'
import car4 from '../../assets/images/car4.png'
import Pagination from '../Pagination/Pagination'
import { Link } from 'react-router-dom'
export default function SearchCar() {
    let [cars, setCars] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    let getCars = async () => {
        const response = await axios.get('https://myfakeapi.com/api/cars/')
        const availableCars = response.data.cars.filter(car => car.availability === true)
        setCars(availableCars)
    }
    useEffect(() => {
        getCars()
    }, [])
    let carImages = [car1, car2, car3, car4]
    const itemsPerPage = 16
    const totalPages = Math.ceil(cars.length / itemsPerPage)
    const currentData = cars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    console.log('Current page:', currentPage)
    return (
        <>
            <div className="container py-5">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Cars</li>
                </ol>
            </nav>

            <div className="container">
                <h4 className="popularBtn my-5 mx-auto">popular rental deals</h4>
                <h3 className="text-uppercase fw-bold fs-1 text-center mb-5">Most popular cars rental deals</h3>
                <div className="row g-4" data-aos="fade-up">
                    {
                        currentData.map((car, index) =>
                            <div className="col-md-3" key={index} data-aos="zoom-in">
                                <CarCard car={car} image={carImages[index % carImages.length]} />
                            </div>
                        )
                    }
                </div>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
        </div >

        </>
    )
}
