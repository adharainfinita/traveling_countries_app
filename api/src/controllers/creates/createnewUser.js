const {User} = require("../../db");

module.exports = createUser = async(name, email, password)=>{
    return await User.create({
        name,
        email,
        password
    });
}