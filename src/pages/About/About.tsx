import React from 'react'

import {TiInfoLarge} from 'react-icons/ti'


const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 shadow-6 rounded">
                    <h5 className="fs-5 d-flex align-items-center my-2">
                        <TiInfoLarge fontSize={18} className=""/>
                        About
                    </h5>
                    <p className="my-1 fst-italic">API <span className="fw-bold fst-normal">restcountries.eu</span></p>
                    <div className="d-flex mb-2 align-items-center ">
                        <p className="fst-italic me-4 mb-0">Get information about countries via a RESTful API</p>
                        <a className="m-0" href="#"><span className="badge bg-secondary fw-normal">build | unknown</span></a>
                    </div>
                    <p>Simple React Typescript Redux project <a className="m-0" href="https://github.com/themrzlyv/astroWorld">View Github</a> </p>
                </div>
            </div>
        </div>
    )
}

export default About
