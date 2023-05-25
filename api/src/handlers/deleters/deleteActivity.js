const deleteActivity = require("../../controllers/deletes/deleteActivity")

const deleteActivities = async(req, res) =>{
    const {id} = req.params;
    try {
        const newActivities = await deleteActivity(id);
        return res.status(200).json(newActivities);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    deleteActivities
}