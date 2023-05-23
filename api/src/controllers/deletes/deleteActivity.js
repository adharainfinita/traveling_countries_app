const foundActivity = require("../finders/findActivityByID");
const findAllActivities = require("../finders/findAllActivities");


module.exports = deleteActivity = async(id)=>{
    const myActivity = await foundActivity(id);
    myActivity.destroy();
    return await findAllActivities();
}