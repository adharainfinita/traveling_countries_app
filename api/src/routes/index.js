const { Router } = require('express');
// Importar todos los routers;
const countriesRouter = require("./countriesRouter");
const activitiesRouter =  require("./activitiesRouter");
const router = Router();
const {getAllCountries} = require("../handlers/getters/getAllCountries");
const {postActivity} = require("../handlers/setters/postActivity");
const { getActivities } = require('../handlers/getters/getActivities');
const { restartCountries } = require('../handlers/deleters/restartCountries');
const { deleteAllActivities } = require('../handlers/deleters/deleteAllActivities');


router.get("/countries", getAllCountries);
router.delete("/countries", restartCountries);
router.post("/activities", postActivity);
router.get("/activities", getActivities);
router.delete("/activities", deleteAllActivities);

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
