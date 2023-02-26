let ctrlUser = {}
import UserSchema from '../models/users'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


ctrlUser.signup = async (req, res) => {
  let mgs
  let state

  const { name, password } = req.body

  const User = await UserSchema.findOne({ name }) || false
  console.log(User)

  if (name.length < 5 || name.length > 20) {
    mgs = "El nombre tiene que tener entre 5 y 20 caracteres"
  } else if (password.length < 5 || password.length > 20) {
    mgs = "La contraseña tiene que tener entre 5 y 20 caracteres"
  } else if (User.name) {
    mgs = "El usuario ya esta en uso"
  }
  else {
    const newUser = new UserSchema({ name, password })
    newUser.password = await newUser.encryptPassword(password)
    await newUser.save()
  }

  res.status(200).json({ mgs, state });
}

ctrlUser.singin = async (req, res) => {
  const { name, password } = req.body
  const userValid = await UserSchema.findOne({ name });
  if (!userValid) {
    return res.json({ mensaje: 'El usuario no existe' });
  }
  const validPassword = await bcryptjs.compare(password, userValid.password);
  if (validPassword) {
    const { id, name } = UserSchema
    const data = {
      id, name
    }
    const token = jwt.sign(data, "secreto", {
      expiresIn: 86020
    });

    res.json({
      usuario: {
        id, name, token
      }
    })
  } else {
    res.json({ mensaje: "Escribí bien la contraseña bobo" })
  }
}

export default ctrlUser