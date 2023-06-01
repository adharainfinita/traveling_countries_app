const findUsers = require("../../controllers/finders/findUsers");

const getAllUsers = async(req, res)=>{
    try {
        const foundUsers = await findUsers();
        if(foundUsers) return res.status(200).json(foundUsers);
        throw Error("Hubo un error con la base de datos");
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getAllUsers
}