import { Dispatch } from "redux";
import { CountryDispatchType, GET_ALL_COUNTRIES, SEARCH_BY_NAME, SELECT_BY_REGION } from "./CountryActionTypes";

export const getAllCountries = () => async (dispatch:Dispatch<CountryDispatchType>) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const result = await res.json()
    dispatch({type: GET_ALL_COUNTRIES, payload: result})
}

export const searchByName = (name:string) => async (dispatch:Dispatch<CountryDispatchType>) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const result = await res.json()
    dispatch({type: SEARCH_BY_NAME, payload: result})
}

export const selectByRegion = (region:string) => async (dispatch:Dispatch<CountryDispatchType>) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    const result = await res.json()
    dispatch({type: SELECT_BY_REGION, payload: result})
}