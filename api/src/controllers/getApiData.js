const axios = require("axios")

module.exports = getApidata =async()=>{
    const allCountries = await axios("https://restcountries.com/v3/all");
        const countryMap = allCountries.data.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[0],
                continent: country.region
                ?country.continents[0]
                :"not found",
                capital: country.capital
                ?country.capital[0]
                :"capital-with-character-special",
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        });
        
        return countryMap;
}
