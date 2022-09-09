import axios from 'axios'
import React, { useState } from 'react'
import Countries from '../Countries.json'
import { apiKeys } from '../interceptor/interceptor'
import { Link } from 'react-router-dom'

const Home = () => {

    const handleCountry = (id) => {
        axios.get(`top-headlines?country=${id}&apiKey=${apiKeys}`)
    }

    return (
        <div className="countries">
            <div className="countries-list">
                {Countries.map((country, index) => {
                    return (
                        <Link to={`/country/${country.id}`}>
                            <div onClick={(e) => handleCountry(country.id)} key={index} className="countries-list-item">
                                <div className="countries-list-item-img">
                                    <img src={country.image} alt="" />
                                </div>

                                <div className="countries-list-item-container">
                                    <div className="countries-list-item-name">
                                        <p>{country.name}</p>
                                    </div>

                                    <div className="countries-list-item-id">
                                        <p>{country.id}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home