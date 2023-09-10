const { conectarDB, desconectarDB  } = require("../db/conection");
const User = require("../db/schemas/UserSchema");

const create = async (req, res) => {
    const { name, email, age } = req.body
    await conectarDB()
    const user = new User({ name, email, age })
    const newUser = await user.save()
    await desconectarDB()
    res.json(newUser)
}

module.exports = { create }