import { ADD_COUNTRIES, NEXT_PAGE, PREV_PAGE, GET_COUNTRY_DETAIL, CLEAN_COUNTRY_DETAIL,
SEARCH_COUNTRY, RESET_COUNTRIES, ORDER_COUNTRIES, FILTER_COUNTRIES, GET_ACTIVITIES,
POST_ACTIVITY, GET_ACTIVITY_DETAIL, CLEAN_ACTIVITY, EDIT_ACTIVITY, INTERRUPTOR, DELETE_ACTIVITY
} from "./action-types";
import axios from "axios";
import {URL_BASE, URL_ACTIVITIES} from "../utils/api";
import notFound from "../utils/notFound";

export const getCountries = () =>{
    return async function(dispatch){
        try {
            const {data} = await axios(URL_BASE);
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
            const {data} = await axios(`${URL_BASE}/${id}`);
            return dispatch({type:GET_COUNTRY_DETAIL, payload: data})
        } catch (error) {
            alert(error.message);
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
            const {data} = await axios(`${URL_BASE}/name?name=${name}`);
            if(typeof data === "object"){
                return dispatch({type: SEARCH_COUNTRY,payload: data})
            }
            else {
                alert("No hay países con ese nombre. Prueba de nuevo esribiendo las primeras letra, o buscalo en las opciones disponibles")
                return dispatch({type: SEARCH_COUNTRY,payload: notFound})
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

export const resetCountries = () => {
    return { type: RESET_COUNTRIES}
}

export const orderCountries =(value)=>{
    return {type: ORDER_COUNTRIES, payload: value}
}

export const filterCountries = (value)=>{
    return {type: FILTER_COUNTRIES, payload: value}
}

export const getAllActivities = ()=>{
    return async function(dispatch){
        try {
            const {data} = await axios(URL_ACTIVITIES);
            if(data){
                return dispatch({type: GET_ACTIVITIES, payload: data})
            }
            return alert("No hay actividades disponisbles")
        } catch (error) {
            alert(error.message);
        }
    }
}

export const postActivity = ({name, difficulty, duration, season, countries}) =>{
    return async function(dispatch){
        try {
            const {data} = await axios.post(URL_ACTIVITIES, {
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season,
                countries: countries
            });
            return dispatch({type: POST_ACTIVITY, payload: data})
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getActivityByID = (id)=>{
    return async function(dispatch){
        try {
            const {data} = await axios(`${URL_ACTIVITIES}/${id}`);
            return dispatch({type:GET_ACTIVITY_DETAIL, payload: data})
        } catch (error) {
            alert(error.message);
        }
    }
}
export const cleanActivityDetail = ()=>{
    return {type: CLEAN_ACTIVITY}
}

export const updateActivity = ({id, name, difficulty, duration, season,countries})=>{
    return async function(dispatch){
        try {
            if( !countries || !name)  throw Error("Faltan datos");
            const {data} = await axios.put(`${URL_ACTIVITIES}/${id}`, {
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season,
                countries: countries
            });
            if(!data) throw Error("No hubo respuesta exitosa")
            return dispatch({type:EDIT_ACTIVITY, payload: data})
        } catch (error) {
            alert(error.message);
        }
    }
}

export const deployTheSideBar = ()=>{
    return {type: INTERRUPTOR}
}

export const deleteActivity = (id) =>{
    return async function(dispatch){
        const {data} = await axios.delete(`${URL_ACTIVITIES}/${id}`);
        return dispatch({type:DELETE_ACTIVITY, payload: data})
    }
}