// const {API_URL} = process.env;
const createAllCountries = require("../../controllers/creates/createAllCountries")


const getAllCountries= async(req, res)=>{
    try {
        const dbCountries = await createAllCountries();
        if(!dbCountries.length) throw Error("Hubo un problema en la base de datos")
        return res.status(201).json(dbCountries);
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
}



module.exports = {
    getAllCountries

}