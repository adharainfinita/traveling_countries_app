const updateActivityByName = require("../../controllers/updates/updateActivity")

const updateActivity= async(req, res)=>{
    const {name} = req.query;
    const {newName, difficulty, duration, season, countries} = req.body;
    try {
        const activityUpdate = await updateActivityByName(name, newName, difficulty, duration, season, countries);
        return res.status(202).json(activityUpdate);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports ={
    updateActivity
    
}