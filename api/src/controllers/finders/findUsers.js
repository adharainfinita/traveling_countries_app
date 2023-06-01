const {User} = require("../../db");

module.exports = findUsers = async() => await User.findAll();