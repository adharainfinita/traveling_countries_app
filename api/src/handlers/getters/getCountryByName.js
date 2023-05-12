const findCountryByName = require("../../controllers/finders/findCountryByName");

const getCountryByName = async(req, res)=>{
    const {name} = req.query;
    if (!name) throw Error("No hay información proporcionada")
    try {
        
        const countryFound = await findCountryByName(name);
        
        if(countryFound.length) return res.status(200).json(countryFound);
        else throw Error(`No hay países que coincidan con la búsqueda de ${name}`);
        
    } catch (error) {
        return error.message.includes("países")
        ? res.status(202).send(error.message)
        :res.status(404).send(error.message)
    }
}

module.exports = {
    getCountryByName
}