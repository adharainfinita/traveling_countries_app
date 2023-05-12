const foundActivity = require("../finders/findActivitiesByName")


module.exports = deleteActivity = async(name)=>{
    const myActivity = await foundActivity(name);

    myActivity.destroy();
}