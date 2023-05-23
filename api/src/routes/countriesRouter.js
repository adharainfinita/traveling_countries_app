const {Router} = require("express")
const countriesRouter = Router();

const {getCountryByID} = require("../handlers/getters/getCountryByID")
const {getCountryByName} = require("../handlers/getters/getCountryByName");



countriesRouter.get("/name", getCountryByName)
countriesRouter.get("/:id", getCountryByID);





module.exports = countriesRouter