const findActivityByID = require("../../controllers/finders/findActivityByID");

const getActivityByID = async(req, res)=>{
    const {id} = req.params;
    try {
        if(!id)throw Error("Hubo un error con el identificador");
        const foundActivity = await findActivityByID(id);
        if(foundActivity) return res.status(200).json(foundActivity);
    } catch (error) {
        return error.message.includes("identificador")
        ? res.status(404).json({error: error.message})
        :res.status(400).json({error:error.message})
    }
}

module.exports = {
    getActivityByID
}