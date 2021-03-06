export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_SINGLE_COUNTRY = "GET_SINGLE_COUNTRY"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"
export const SELECT_BY_REGION = "SELECT_BY_REGION"

export type SingleLanguageDataType = {
    name:string;
    nativeName:string;
    iso639_1:string;
}


export type SingleCountry = {
    name:string;
    topLevelDomain: string [];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string [];
    capital: string;
    region: string;
    subregion: string;
    population: number;
    latlng: number [];
    languages: SingleLanguageDataType[]
    demonym: string;
    area: number;
    gini: number;
    timezones: string [];
    borders: string [];
    nativeName: string;
    numericCode: string;
    flag: string;
}

export interface GetAllCountries {
    type: typeof GET_ALL_COUNTRIES;
    payload: SingleCountry[]
}

export interface GetSingleCountry {
    type: typeof GET_SINGLE_COUNTRY;
    payload: SingleCountry[]
}

export interface SearchByName {
    type: typeof SEARCH_BY_NAME;
    payload: SingleCountry[]
}

export interface SelectByRegion {
    type: typeof SELECT_BY_REGION;
    payload: SingleCountry[]
}

export type CountryDispatchType = GetAllCountries | GetSingleCountry | SearchByName | SelectByRegion