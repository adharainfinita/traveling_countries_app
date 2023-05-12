import { ADD_COUNTRIES, NEXT_PAGE, PREV_PAGE, GET_COUNTRY_DETAIL, 
        CLEAN_COUNTRY_DETAIL, SEARCH_COUNTRY, RESET_COUNTRIES} from "./action-types";

const initialState = {
    countries: [],
    countriesOrigin: [],
    detail: {},
    page: 1,
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_COUNTRIES:{
            return {
                ...state,
                countries: [ action.payload],
                countriesOrigin: [action.payload]
            }
        }
        case NEXT_PAGE:
            return {
            ...state,
            page: state.page + 1,
        };
        case PREV_PAGE:
            return {
            ...state,
            page: state.page - 1,
        };
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
            // const foundCountries = state.countries.filter((target => target.name === action.payload))
            return {
                ...state,
                countries: [action.payload]
            }
        }
        case RESET_COUNTRIES:{
            return {
                ...state,
                countries: [...state.countriesOrigin]
            }
        }

        default: 
        return {...state}
    }
    
}

export default reducer;