const {Activity} = require("../../db");
const findAllActivities = require("../finders/findAllActivities")

module.exports = createNewActivity = async(name, difficulty, duration, season, countries, userId)=>{
    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
        userId: userId
    });
    await newActivity.setCountries(countries);
    await newActivity.setUser(userId)

    return await findAllActivities();
}
