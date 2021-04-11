import React from 'react'
import { SingleCountry } from '../../Global/Actions/CountryActions/CountryActionTypes'
import styles from './Country.module.scss'

import {RiMapPin5Line} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {ImEarth} from 'react-icons/im'
import {BiSearchAlt2} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

interface Iprops {
    country:SingleCountry
}


const Country:React.FC<Iprops> = ({country}) => {
    return (
        <div className={`${styles.cardContainer} col-lg-4 shadow-1 mx-auto`}>
            <div className={`${styles.cardCountry} `}>
                <img src={country.flag} className={`${styles.image} card-img-top shadow-1`} alt="..." />
                <div className={`${styles.cardText} card-body`}>
                    <h5 className="card-title fw-bolder fs-5 d-flex align-items-center text-black">
                        <RiMapPin5Line fontSize={16} />
                        <span className="fs-5 ms-2">{country.name}</span>
                    </h5>
                    <h6 className="d-flex align-items-center text-black">
                        <IoIosPeople fontSize={18} />
                        <span className="fs-6 fw-normal fst-italic ms-2">{country.population}m</span>
                    </h6>
                    <p className="card-text fst-italic d-flex align-items-center text-black">
                        <ImEarth fontSize={18} />
                        <span className=" ms-2">{country.region}</span>
                    </p>
                    <NavLink to={`/country/${country.name}`} className="btn btn-primary">
                        <BiSearchAlt2 fontSize={15} />
                        <span className="mx-1">Explore</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Country
