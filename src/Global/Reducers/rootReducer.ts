import {combineReducers} from 'redux'
import { CountryReducer } from './CountryReducer'

const rootReducer = combineReducers({
    countries: CountryReducer
})


export default rootReducer