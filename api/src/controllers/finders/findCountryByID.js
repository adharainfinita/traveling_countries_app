const {Country, Activity} = require ("../../db");
const {Op} = require("sequelize")

module.exports = findCountryByID = async(id)=>{
    const foundCountry = await Country.findOne({
        where: {
            id: id
        }
    , 
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {attributes: []}
        }
    });
    
    return foundCountry;
}