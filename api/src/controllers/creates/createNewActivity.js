const {Activity} = require("../../db");
const findAllActivities = require("../finders/findAllActivities")

module.exports = createNewActivity = async(name, difficulty, duration, season, countries)=>{
    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season
    });
    await newActivity.setCountries(countries);

    return await findAllActivities();
}
