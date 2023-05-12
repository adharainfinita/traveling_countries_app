const {Country} = require("../../db");

module.exports = deleteAllCountries = async()=>{
    await Country.destroy({where: {}});
}