const createNewActivity = require("../../controllers/creates/createNewActivity");

const postActivity = async(req, res) =>{
    const {name, difficulty, duration, season, countries} = req.body;
    try {
        const newActivities = await createNewActivity(
            name, 
            difficulty, 
            duration, 
            season, 
            countries);
    
    return res.status(200).json(newActivities);
    } catch (error) {
        res.status(404).send(error.message)
    }
    
};


module.exports = {
    postActivity
}