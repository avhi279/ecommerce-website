import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

//protected routes token base

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Invalid or expired token",
    });
  }
};


export const  isAdmin=async(req,res,next)=>{
    try{

const user = await userModel.findById(req.user.id)
 if(user.role !=1){
    return res.status(401).send({
        success:false,
        massage:'unAutorized acess'
    })
 }else{
    next();
 }

    }catch(error){
        console.log(error);
        res.status(401).send({
            success :false,
            error,
            massage:'error in admin middelware',
        });
    }
}
