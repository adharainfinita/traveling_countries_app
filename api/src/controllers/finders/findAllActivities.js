const {Activity} = require("../../db");

module.exports = findAllActivities = async() => await Activity.findAll()
