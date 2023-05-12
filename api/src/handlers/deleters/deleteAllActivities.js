const deleteActivities = require("../../controllers/deletes/deleteActivities");

const deleteAllActivities = async(req, res)=>{
    try {
        await deleteActivities();
        return res.status(200).send("Las actividades han sido eliminadas con éxito");
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports ={
    deleteAllActivities
    
}