// const {API_URL} = process.env;
const createAllCountries = require("../../controllers/creates/createAllCountries")


const getAllCountries= async(req, res)=>{
        try {
            const dbCountries = await createAllCountries();
            console.log(dbCountries);
            if(dbCountries){
                return res.status(201).json(dbCountries);
            }
        } 
        catch (error) {
            res.status(500).json({error: error.message})
        }
}



module.exports = {
    getAllCountries

}