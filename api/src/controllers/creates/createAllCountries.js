const getApidata = require("../getApiData");
const {Country} = require("../../db.js");
const { lock } = require("../../app");


module.exports = createAllCountries =async()=>{
    
    const allCountries = await Country.findAll(); 
    if (allCountries.length) return allCountries
    return await Country.bulkCreate(await getApidata())    
}

// 