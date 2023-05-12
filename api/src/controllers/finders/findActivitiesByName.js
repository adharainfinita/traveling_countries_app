const { Op } = require("sequelize");
const {Activity, Country} = require ("../../db");

module.exports = findActivitiesByName= async(name) =>{
    return await Activity.findOne({
        where:{
            name: { 
                [Op.iLike]: `%${name}%`
            }
        }, include: {
            model: Country,
            attributes: ["name", "flag", "capital", "continent","population"],
            through: {attributes: []}
        }
    })
}