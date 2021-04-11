import React from 'react'
import { NavLink } from 'react-router-dom'

import {GiRingedPlanet} from 'react-icons/gi'
import {GiWorld} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'

const Navi = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary-dark shadow-2">
            <div className="container">
                <a className="navbar-brand fw-bold text-white" href="/">
                    <GiRingedPlanet fontSize={22}/>
                    Astro 
                    <span className="text-danger">World</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" to="/">
                                <AiOutlineHome className="me-1" fontSize={20}/>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" to="/company">
                                <GiWorld className="me-1" fontSize={20}/>
                                All Countries
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navi
