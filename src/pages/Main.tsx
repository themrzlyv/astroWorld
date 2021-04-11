import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Country from './Country/Country'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/country/:id" component={Country}/>
            <Route  component={NotFound}/>
        </Switch>
    )
}

export default Main
