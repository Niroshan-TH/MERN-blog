import User from "../models/user.mode.js";
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
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