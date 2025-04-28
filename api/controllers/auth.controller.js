import User from "../models/user.mode.js";
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
export const signup = async(req,res,next)=>{
    const{username,email,password}=req.body;
    if(!username||!email || !password ||username===''||password===''||email===''){
        return next(errorHandler(400,'All feild are requred'))
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser=new User({
        username,
        email,
        password:hashedPassword,
    })

    try{
        await newuser.save();
        res.json('signup sucsess')
    }catch(e){
        next(e)
    }
}

export const signin =async(req,res,next)=>{
const{email,password}=req.body;
if(!email || !password ||password===''||email===''){
    return next(errorHandler(400,'All feild are requred'))
}
try{
    const validUser = await User.findOne({email});
    if(!validUser){
        return next(errorHandler(400,'no user found '))
    }
    const isMatch = await bcrypt.compare(password,validUser.password);
    if(!isMatch){
        return next(errorHandler(400,'invalid passwoe'))
    }
    const token = jwt.sign(
        {id:validUser._id},
        process.env.JWT_SECRET
    );

    const {password :pass ,...rest }=validUser._doc

    res.status(200).cookie('access_token',token,{
        httpOnly:true,
    }).json(rest)

}catch(error){
    next(error)
}
}