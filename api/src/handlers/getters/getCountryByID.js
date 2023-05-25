const findCountryByID = require("../../controllers/finders/findCountryByID");

const getCountryByID =async(req, res)=>{
    const {id}= req.params;
    try {
        if(id.length !== 3) throw Error ("El ID debe ser 3 caracteres");
        const foundCountry = await findCountryByID(id);
        if(foundCountry) return res.status(200).json(foundCountry);
        else throw Error(`No existe un país con el ID: ${id}`); 

    } catch (error) {
        return error.message.includes("ID")
            ? res.status(404).jsonn({error: error.message})
            : res.status(500).json({error: error.message})
    }
}

module.exports = {
    getCountryByID
}

