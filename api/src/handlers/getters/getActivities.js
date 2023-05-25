const findAllActivities = require("../../controllers/finders/findAllActivities");

const getActivities = async(req, res)=>{
    try {
        const allActivities = await findAllActivities();
        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getActivities
}