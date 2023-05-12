// const {Activity} = require("../db");
const findActivitiesByName = require("../finders/findActivitiesByName");

module.exports = updateActivityByName = async(name, newName, difficulty, duration,season, countries)=>{
    const myActivity = await findActivitiesByName(name);

    myActivity.update({
        name: newName,
        difficulty: difficulty,
        duration: duration,
        season: season
    });
    console.log(myActivity);
    await myActivity.setCountries(countries);
    return await myActivity.save();

}