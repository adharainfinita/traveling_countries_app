const {Activity} = require("../../db");

module.exports = createNewActivity = async(name, difficulty, duration, season, countries)=>{
    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season
    });
    console.log(countries)
    await newActivity.setCountries(countries);

    return newActivity;
}
