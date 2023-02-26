import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next)=> {
  const token = req.headers.token

  if(token){
    jwt.verify(token, "secreto", (error, data)=> {
      if(error) { res.status(400).json({mensaje: "Token invalido"})
      console.log(req.headers)
    } else {
        console.log(data)
        req.user = data
        next()
      }
    });
  } else {
    next()
  }

}

export default verifyToken