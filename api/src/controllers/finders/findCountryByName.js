const { Op } = require("sequelize");
const {Country} = require ("../../db");


module.exports = findCountryByName= async(name) =>{
    return await Country.findAll({
        where:{
            name: { 
                [Op.iLike]: `%${name}%`
            }
        }
    })
}