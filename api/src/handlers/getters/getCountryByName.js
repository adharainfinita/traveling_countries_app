const findCountryByName = require("../../controllers/finders/findCountryByName");

const getCountryByName = async(req, res)=>{
    const {name} = req.query;
    if (!name) throw Error("No hay nombre proporcionado")
    try {
        const foundCountry = await findCountryByName(name);      
        if(foundCountry.length) return res.status(200).json(foundCountry);
        else throw Error(`No hay países que coincidan con la búsqueda de ${name}`);
    } catch (error) {
        return error.message.includes("No hay")
        ? res.status(404).json({error: error.message })
        :res.status(500).json({error: error.message})
    }
}

module.exports = {
    getCountryByName
}