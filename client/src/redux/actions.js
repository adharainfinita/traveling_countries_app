import { ADD_COUNTRIES, NEXT_PAGE, PREV_PAGE, GET_COUNTRY_DETAIL, CLEAN_COUNTRY_DETAIL,
SEARCH_COUNTRY, RESET_COUNTRIES} from "./action-types";
import axios from "axios";
import {URL_BASE} from "../utils/api";

export const getCountries = () =>{
    return async function(dispatch){
        try {
            const response = await axios(URL_BASE);
            const data = response.data;
            return dispatch({type: ADD_COUNTRIES, payload: data})
        } catch (error) {
            alert(error.message);
        }
    }
}

export const prevPage=()=> {
    return {
        type: PREV_PAGE,
    };
}

export const nextPage=()=> {
    return {
        type: NEXT_PAGE,
    }
}

export const getCountryDetail=(id)=>{
    return async function(dispatch){
        try {
            const response = await axios(`${URL_BASE}/${id}`);
        return dispatch({type:GET_COUNTRY_DETAIL, payload: response.data})
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

export const cleanCountryDetail = () => {
    return {type: CLEAN_COUNTRY_DETAIL}
}

export const getCountryByName = (name)=>{
    return async function(dispatch){
        try {
            if(!name) throw Error("No has escrito nada!");
            const response = await axios(`${URL_BASE}/name?name=${name}`);
            if(response.data.length){
                return dispatch({type: SEARCH_COUNTRY,payload: response.data})
            }
            return alert("no hay países que contengan ese string")
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

export const resetCountries = () => {
    return { type: RESET_COUNTRIES}
}
