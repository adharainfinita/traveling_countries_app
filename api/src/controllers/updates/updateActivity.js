// const {Activity} = require("../db");
const findActivitiesByID = require("../finders/findActivityByID");
const findAllActivities = require("../finders/findAllActivities");

module.exports = updateActivity = async(id, newName, difficulty, duration,season, countries)=>{
    const myActivity = await findActivitiesByID(id);

    myActivity.update({
        name: newName,
        difficulty: difficulty,
        duration: duration,
        season: season,
    });
    
    await myActivity.setCountries(countries);
    
    return await findAllActivities();

}