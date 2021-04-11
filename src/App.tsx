import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navi from './components/Head/Navi'
import { getAllCountries } from './Global/Actions/CountryActions/CountryAction'
import Main from './pages/Main'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])

    return (
        <div className="container-fluid "> 
            <div className="row">
                <Navi />
            </div>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default App
