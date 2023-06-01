// const { Op } = require("sequelize");
const {Activity, Country, User} = require ("../../db");

module.exports = findActivityByID= async(id) =>{
    return await Activity.findOne({
        where:{
                id: id
        }, 
            include: {
            model: Country, 
            attributes: ["name", "flag", "capital", "continent","population", "id"],
            through: {attributes: []},
        }

    })
}