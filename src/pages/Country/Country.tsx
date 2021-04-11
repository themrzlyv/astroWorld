import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCountry } from '../../Global/Actions/CountryActions/CountryAction'
import { SingleCountry } from '../../Global/Actions/CountryActions/CountryActionTypes'
import { RootState } from '../../Global/Store'
import { useRouter } from '../../helpers/useRouter'


import styles from './Country.module.scss'


const Country = () => {
    const router = useRouter()

    const dispatch = useDispatch()
    const data = useSelector((state:RootState) => state.countries.country)

    useEffect(() => {
        dispatch(getSingleCountry(router.query.id))
    },[router.query,dispatch])

    return (
        <>
            {
                data === undefined ?
                (<h4>loading</h4>)
                :
                data.map((item:SingleCountry) => 
                    (
                        <div key={item.gini} className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 py-3 d-flex flex-column align-items-center shadow-6">
                                                <div className={`${styles.image} shadow-2`}>
                                                    <img src={item.flag}   alt={item.name} />
                                                </div>
                                                <h5 className="fs-5 fw-bold mt-2 mb-0">
                                                    {item.name}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 my-2 d-flex flex-column align-items-center shadow-6">
                                                <h6 className="my-2">
                                                    {item.region}
                                                </h6>
                                                <div className="d-flex align-items-center  w-25 justify-content-between">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <p className="m-0 fw-bold">{item.population}</p>
                                                        <p className="fs-6 text-secondary m-0">
                                                            Popullation
                                                        </p>
                                                    </div>
                                                    <div className="d-flex flex-column align-items-center">
                                                        <p className="m-0 fw-bold">{item.area}</p>
                                                        <p className="fs-6  text-secondary m-0">
                                                            Area
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 shadow-6">
                                                <h6 className="h6 my-2 fw-bold ">
                                                    Details
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </>
    )
}

export default Country
