const {Router} = require("express");
const { getActivityByID } = require("../handlers/getters/getActivityByID");
const { editActivity } = require("../handlers/updates/editActivity");
const { deleteActivities } = require("../handlers/deleters/deleteActivity");
const activitiesRouter = Router();

activitiesRouter.get("/:id", getActivityByID);
activitiesRouter.put("/:id", editActivity);
activitiesRouter.delete("/:id", deleteActivities);



module.exports = activitiesRouter