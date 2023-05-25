const createNewActivity = require("../../controllers/creates/createNewActivity");

const postActivity = async(req, res) =>{
    const {name, difficulty, duration, season, countries} = req.body;
    try {
        if(!name || !difficulty || !duration || !season || !countries.length){
            throw Error("Faltan datos")
        }
        if(typeof difficulty !== "number" || typeof name !== "string" || countries[0].length !==3){
            throw Error("datos mal recibidos")
        }
        const newActivities = await createNewActivity(
            name, 
            difficulty, 
            duration, 
            season, 
            countries); 
    return res.status(200).json(newActivities);
    } catch (error) {
        return error.message.includes("datos")
        ? res.status(400).json({error: error.message})
        : res.status(500.).json({error: error.message});
    }
    
};


module.exports = {
    postActivity
}