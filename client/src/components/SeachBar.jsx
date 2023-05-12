import { useState } from "react";
import "../styles/SearchBar.css";
import { useDispatch } from "react-redux";
import { getCountryByName, resetCountries } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange =(event)=>setName(event.target.value);

    const onSearch = ()=>{
        dispatch(getCountryByName(name))
    }
    const reset = ()=>{
        dispatch(resetCountries())
    }

    return(
        <div className="float-bar">
            <input type="search" placeholder="write" onChange={handleChange} value={name}></input>
            <button onClick={()=> {
                onSearch(name);
            }}>Buscar</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default SearchBar