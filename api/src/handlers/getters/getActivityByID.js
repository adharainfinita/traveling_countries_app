const findActivityByID = require("../../controllers/finders/findActivityByID");

const getActivityByID = async(req, res)=>{
    const {id}  = req.params;
    try {
        if(!id)throw Error("Hubo un error con el identificador");
        const foundActivities = await findActivityByID(id);

        if(foundActivities) return res.status(200).json(foundActivities);
        // else throw Error(`No hay actividades que coincidan con la búsqueda de ${name}`);

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = {
    getActivityByID
}