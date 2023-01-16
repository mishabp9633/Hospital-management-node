import jwt from "jsonwebtoken";
import  config  from "dotenv";

export function verifyToken(req,res,next){
    const token = req.header('x-auth-token')

if (!token) {
    res.status(401).send("Access denied.No token provided")
}
try {
    const decoded = jwt.verify(token,process.env.TOKEN_KEY)
    req.user = decoded
    next()
} catch (error) {
    res.status(400).send("Invalid token")
}
}