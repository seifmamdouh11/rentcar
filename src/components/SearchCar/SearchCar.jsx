import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './SearchCar.css'
import CarCard from '../CarCard/CarCard'
import axios from 'axios'
import car1 from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import car3 from '../../assets/images/car3.png'
import car4 from '../../assets/images/car4.png'
import { Link } from 'react-router-dom'
export default function SearchCar() {
    let [cars, setCars] = useState([])
    let [search, setSearch] = useState('')

    let getCars = async () => {
        const response = await axios.get('https://myfakeapi.com/api/cars/')
        const availableCars = response.data.cars.filter(car => car.availability === true)
        setCars(availableCars)
    }
    useEffect(() => {
        getCars()
    }, [])


    let filteredCars = cars.filter(car =>
        car.car.toLowerCase().includes(search.toLowerCase())
    )
    if (filteredCars.length === 0) {
        return (
            <div className="container py-5 text-center">
                <SearchBar search={search} setSearch={setSearch} />
                <h3 className="mt-5 fw-bold text-secondary">No cars found 😢</h3>
            </div>
        )
    }


    let carImages = [car1, car2, car3, car4]
    let slicedCars = filteredCars.slice(0, 4)
    return (
        <>
            <div className="container py-5">
                <SearchBar search={search} setSearch={setSearch} />
                <div className="container">
                    <h4 className="popularBtn my-5 mx-auto">popular rental deals</h4>
                    <h3 className="text-uppercase fw-bold fs-1 text-center mb-5">Most popular cars rental deals</h3>
                    <div className="row g-4">
                        {
                            slicedCars.map((car, index) =>
                                <div className="col-md-3" key={index} data-aos="zoom-in">
                                    <CarCard car={car} image={carImages[index % carImages.length]} />
                                </div>
                            )
                        }
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link className="btn btn-outline-secondary fw-bold fs-6" to="cars">
                            SHOW ALL CARS <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}
