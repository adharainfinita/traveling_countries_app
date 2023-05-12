const findActivityByName = require("../../controllers/finders/findActivitiesByName");

const getActivityByName = async(req, res)=>{
    const {name}  = req.query;
    if(!name)throw Error("No hay información proporcionada");

    try {
        const foundActivities = await findActivityByName(name);

        if(foundActivities) return res.status(200).json(foundActivities);
        else throw Error(`No hay actividades que coincidan con la búsqueda de ${name}`);

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = {
    getActivityByName
}