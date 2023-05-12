const deleteActivity = require("../../controllers/deletes/deleteActivity")

const deleteActivities = async(req, res) =>{
    const {name} = req.query;
    try {
        await deleteActivity(name);
        return res.status(200).send("Actividad eliminada con éxito");
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    deleteActivities
}