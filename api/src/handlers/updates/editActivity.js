const updateActivity = require("../../controllers/updates/updateActivity")

const editActivity= async(req, res)=>{
    const {id} = req.params;
    const {name, difficulty, duration, season, countries} = req.body;
    
    try {
        if(!countries || !name || !id || !difficulty) throw Error("Faltan datos")
        const activityUpdate = await updateActivity(id, name, difficulty, duration, season, countries);
        return res.status(200).json(activityUpdate);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports ={
    editActivity
    
}