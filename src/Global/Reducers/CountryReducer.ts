import { CountryDispatchType, GET_ALL_COUNTRIES, GET_SINGLE_COUNTRY, SEARCH_BY_NAME, SELECT_BY_REGION, SingleCountry } from "../Actions/CountryActions/CountryActionTypes";

interface Istate {
    countries?:SingleCountry[];
    country?: SingleCountry
}

const initialState:Istate = {

}

export const CountryReducer = (state:Istate = initialState,action:CountryDispatchType):Istate => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                countries: action.payload
            };
        case GET_SINGLE_COUNTRY:
            return {
                ...state,
                country: action.payload
            };
        case SEARCH_BY_NAME:
            return {
                countries: action.payload
            };
        case SELECT_BY_REGION:
            return {
                countries: action.payload
            };
    
        default:
            return state;
    }
}