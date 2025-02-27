const User=require("../models/user-model");

// Home 
const home =async(req,res)=>{
    try {
        res.status(200).send(" welcome to the home page ");
    } catch (error) {
        console.log(error);
    }
};


// Register [page]
const register =async(req,res)=>{
    try {
        // console.log(req.body);
        const {username,email,phone, password}=req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email already exits"});
        }
        await User.create({username,email,phone, password})

        // const userExist=res.status(200).json({data});
        // res.status(200).json({message:req.body});
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

//module.exports={home, register};