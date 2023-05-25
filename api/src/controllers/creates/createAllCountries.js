const getApidata = require("../getApiData");
const {Country, Activity} = require("../../db.js");


module.exports = createAllCountries =async()=>{
    const allCountries = await Country.findAll({
        where:{},include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {attributes: []}
        }
    }); 
    if (allCountries.length) return allCountries;
    return await Country.bulkCreate(await getApidata());    
}

// 