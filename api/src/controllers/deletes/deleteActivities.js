const {Activity} = require("../../db");

module.exports = deleteActivities = async()=>{
    await Activity.destroy({where:{}});
}