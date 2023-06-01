const {User, Activity} = require("../../db");

module.exports = findUser =async(email, password)=>{
    return await User.findOne({
        where: {
            email: email,
            password: password
        }, 
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"]
        }
    })
}