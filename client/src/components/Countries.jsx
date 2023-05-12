

import { useSelector } from "react-redux";
import { Pagination } from "./Pagination";
import Country from "./Country.jsx";




const Countries = () => {
    const countriesStore = useSelector(state => state.countries);
    const pageNow = useSelector(state => state.page);

    const from = (pageNow - 1) * 7;
    const to = pageNow * 7;
    let verifyCountries = countriesStore[0];
    let pagesStack = Math.floor(verifyCountries?.length / 6);
    let countriesForPage = verifyCountries?.slice(from, to);
    return (
        <div>
            <div>{
                countriesForPage.map(country => {
                return (
                    <Country 
                    key={country?.id}
                    id={country?.id}
                    name={country?.name}
                    flag={country?.flag}
                    continent={country?.continent}
                    />
                )     
                })}
            </div>
            <Pagination pagesStack={pagesStack} />
        </div>
    )
}

export default Countries