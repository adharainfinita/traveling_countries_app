import { 
    ADD_COUNTRIES, NEXT_PAGE, PREV_PAGE, GET_COUNTRY_DETAIL, 
    CLEAN_COUNTRY_DETAIL, SEARCH_COUNTRY, RESET_COUNTRIES, 
    FILTER_COUNTRIES, ORDER_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITY,
    GET_ACTIVITY_DETAIL, EDIT_ACTIVITY, INTERRUPTOR, CLEAN_ACTIVITY, DELETE_ACTIVITY
    } from "./action-types";

const initialState = {
    countries: [],
    countriesOrigin: [],
    detail: {},
    page: 1,
    activities: [],
    activitiesDetail: {},
    interruptor: false
}

const reducer = (state = initialState, action)=>{
    switch(action.type){

        case ADD_COUNTRIES:{
            return {
                ...state,
                countries: action.payload,
                countriesOrigin: action.payload
            }
        }

        case NEXT_PAGE:
            return {
            ...state,
            page: state.page + 1,
        }

        case PREV_PAGE:
            return {
            ...state,
            page: state.page - 1,
        }

        case GET_COUNTRY_DETAIL:{
            return{
                ...state,
                detail: action.payload
            }
        }

        case CLEAN_COUNTRY_DETAIL:{
            return {...state, detail: {}}
        }

        case SEARCH_COUNTRY:{
            return {
                ...state,
                countries: action.payload
            }
        }

        case RESET_COUNTRIES:{
            return {
                ...state,
                countries: [...state.countriesOrigin]
            }
        }

        case ORDER_COUNTRIES:{
            const countriesCopy = [...state.countries];
            if(action.payload.length ===3){
                if (action.payload === "MAX") countriesCopy.sort((a, b)=> a.population - b.population)
                else countriesCopy.sort((a, b)=> b.population - a.population)
            }
            else {
                if(action.payload === "A"){
                    countriesCopy.sort((a, b) => {
                        if(a.name < b.name) return -1
                        if(a.name > b.name) return 1;
                        return 0;
                    })
                }
                else {
                    countriesCopy.sort((a, b) => {
                        if(a.name > b.name)return -1
                        if(a.name < b.name)return 1;
                        return 0;
                    })
                }
            }
            return{
                ...state,
                countries: countriesCopy
            }
        }
        
        case FILTER_COUNTRIES:{
            let countriesFound = [...state.countriesOrigin];
            if(action.payload.includes("*")){
                action.payload = action.payload.split("*").join("");
                countriesFound = state.countriesOrigin.filter(country=> country.subregion === action.payload);
                if(action.payload === "All" && !countriesFound.length) countriesFound = [...state.countriesOrigin]
            }
            if(action.payload === "ACT"){
                countriesFound = state.countriesOrigin.filter(country => country.activities.length);
            }
            if(action.payload.includes("/")){
                action.payload = action.payload.split("/").join("")
                countriesFound  = state.countriesOrigin.filter(country=> country.continent === action.payload)
                if(action.payload === "All" && !countriesFound.length) countriesFound = [...state.countriesOrigin]
            }
            return {
                ...state,
                countries: countriesFound
            }
        }

        case GET_ACTIVITIES:{
            return {
                ...state,
                activities: action.payload
            }
        }

        case POST_ACTIVITY:{
            return {
                ...state,
                activities: action.payload
            }
        }

        case GET_ACTIVITY_DETAIL:{
            return {
                ...state,
                activitiesDetail: action.payload
            }
        }

        case CLEAN_ACTIVITY:{
            return {
                ...state,
                activitiesDetail: {}
            }
        }

        case EDIT_ACTIVITY:{
            return {
                ...state,
                activitiesDetail: action.payload
            }
        }

        case INTERRUPTOR:{
            return {
                ...state,
                interruptor: state.interruptor === false ? true : false
            }
        }

        case DELETE_ACTIVITY:{
            return {
                ...state,
                activities: action.payload
            }
        }

        default: 
        return {...state}
    }
    
}

export default reducer;