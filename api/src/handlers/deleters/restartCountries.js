const deleteAllCountries = require("../../controllers/deletes/deleteAllCountries");

const restartCountries = async(req, res)=>{
    try {
        await deleteAllCountries();
        return res.status(200).send("Felicidades, vaciaste TODOS los países de tu base de datos");
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    restartCountries
}