import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import Country from '../../components/Country/Country'
import { searchByName, selectByRegion } from '../../Global/Actions/CountryActions/CountryAction'
import { SingleCountry } from '../../Global/Actions/CountryActions/CountryActionTypes'
import { RootState } from '../../Global/Store'





const Home = () => {

    const [load, setload] = useState(false)
    const [skeletonArray, setskeletonArray] = useState<number []>([1,2,3,4,5,6,7,8,9])

    const countries = useSelector((state:RootState) => state.countries.countries)
    const dispatch = useDispatch()

    const showdata = () => {
        if(load === false){
            return (
                <>
                    {
                        countries?.slice(0,9).map((country:SingleCountry) => <Country key={Math.random()} country={country}/>)
                    }
                    <button 
                    onClick={() => setload(true)} 
                    className="btn bg-primary text-white w-25 mx-auto my-2">
                        Load More
                    </button>
                </>
            )
        }
        else {
            return countries?.map((country:SingleCountry) => <Country key={Math.random()} country={country}/>)
        }
    }

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(searchByName(event.target.value))
    }

    const handleSelect = (event:React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        dispatch(selectByRegion(event.target.value))
    }

    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-lg-8 mx-auto">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <input 
                                onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleSearch(event)} type="text" 
                                placeholder="Search" 
                                className="btn w-100 text-start"/>
                            </div>
                            <div className="col-lg-3">
                                <select onChange={(event:React.ChangeEvent<HTMLSelectElement>) => handleSelect(event)} className="btn">
                                    <option value="">Choose a region</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Americas">Americas</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Oceania">Oceania</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    countries === undefined || countries.length === undefined ? 
                    skeletonArray.map(item => (
                            <div key={Math.random()} className="col-lg-4  mx-auto mb-1">
                                <SkeletonTheme color="#C3C3C3">
                                    <Skeleton height="13em" width="100%" />
                                </SkeletonTheme>
                            </div>
                    ))
                    : 
                    showdata()
                }
            </div>
        </div>
    )
}

export default Home
