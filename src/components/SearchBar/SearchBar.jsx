import React from 'react'
import './SearchBar.css'
export default function SearchBar({search,setSearch}) {
    return (
        <>
           <div className="container position-relative my-5" data-aos="fade-down">
                <input className="form-control w-100 m-auto p-3 fs-5" type="text" placeholder="Search for a car..." onChange={(e)=>{setSearch(e.target.value)}} />
                <div className="search-icon position-absolute">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </>
    )
}