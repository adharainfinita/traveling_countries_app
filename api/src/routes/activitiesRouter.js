const {Router} = require("express");
const { getActivityByName } = require("../handlers/getters/getActivityByName");
const { updateActivity } = require("../handlers/updates/editActivity");
const { deleteActivities } = require("../handlers/deleters/deleteActivity");
const activitiesRouter = Router();

activitiesRouter.get("/name?", getActivityByName);
activitiesRouter.put("/name?", updateActivity);
activitiesRouter.delete("/name?", deleteActivities);



module.exports = activitiesRouter