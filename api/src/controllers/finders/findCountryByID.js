const {Country, Activity} = require ("../../db");
// const {Op} = require("sequelize")

module.exports = findCountryByID = async(id)=>{
    return await Country.findOne({
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
}