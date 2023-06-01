const createUser = require("../../controllers/creates/createnewUser")

const postNewUser = async(req, res)=>{
    const {name, email, password} = req.body;

    try {
        if(email && password) {
            const newUser = await createUser(name, email, password);
            console.log(newUser)
            return res.status(200).json(newUser);
        }
        throw Error("Faltan datos");
    } catch (error) {
        return error.message.includes("datos")
        ? res.status(400).json({error: error.message})
        : res.status(500).json({error: error.message})
    }
}

module.exports = {postNewUser}