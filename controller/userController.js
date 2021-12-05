import users from '../model/userSchema.js';

 export const userSignup = async (req,res) =>{
    try{
        const exist =await users.findOne({username: req.body.username})
        if(exist) {
            return res.status(401).json("username already exist")
        }
        const user = req.body;
        const newUser= new users(user)
        await newUser.save();
        res.status(200).json('User is successfully registered')
    }catch(err)
    {
        console.log("Error:", err.message)
    }
}

export const userLogin= async(req,res)=>{
try{
    let user =await users.findOne({username: req.body.username,password: req.body.password})
    if(user)
    {
        return res.status(200).json(`${req.body.username} login successful`)
    }
    else
    {
        return res.status(401).json("Invalid login");
    }
}catch(err)
{
    console.log("Error:", err.message)
}
}


