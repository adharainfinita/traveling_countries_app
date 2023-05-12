const deleteAllCountries = require("../../controllers/deletes/deleteAllCountries");
const createAllCountries = require("../../controllers/creates/createAllCountries");

const restartCountries = async(req, res)=>{
    try {
        await deleteAllCountries();
        
        return res.status(205).send("Los países han sido eliminados con éxito");
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    restartCountries
}