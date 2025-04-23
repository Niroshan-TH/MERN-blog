import User from "../models/user.mode.js";
import bcrypt from 'bcryptjs'
export const signup = async(req,res)=>{
    const{username,email,password}=req.body;
    if(!username||!email || !password ||username===''||password===''||email===''){
        return res.status(400).json({massage:"all fields are rquered"});
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
        res.status(500).json({massage:e.massage})
    }
}