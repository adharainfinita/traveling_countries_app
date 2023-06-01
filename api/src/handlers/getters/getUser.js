const findUser = require("../../controllers/finders/findUser");

const login = async(req, res)=>{
    const {email, password} = req.query;
    try {
        if(email && password){
            const foundUser = await findUser(email, password);
            if (foundUser) return res.status(200).json(foundUser)
        }
        throw Error("No existe el email o la contraseña");
        }catch (error) {
            return error.message.includes("No")
            ? res.status(400).json({error: error.message})
            : res.status(500).json({error: error.message})
    }
}

module.exports ={login};