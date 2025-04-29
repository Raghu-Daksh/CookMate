const User = require('../schema/userSchema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
module.exports.userRegister = async(req,res)=>{
    try {
        const {username, email, password} = req.body;

        const salt = await bcrypt.genSalt(10); // Salt rounds (10 common hai)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save();
        res.status(200).json(newUser)
        
    } catch (error) {
        res.status(500).json({message: "Error registering user"})
    }
}

module.exports.userLogin = async(req,res)=>{

    const {email, password} = req.body;
    
    try {
        const findUser = await User.find({email});
        if(!findUser){
            return res.status(404).json({message: "User not found"})
        }
        
        const isMatch = await bcrypt.compare(password, findUser[0].password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({id: findUser[0]._id},'secretKey');

        res.status(200).json({
            token,
            user: {
                id: findUser[0]._id,
                username: findUser[0].username,
                email: findUser[0].email,
            }
        });

    } catch (error) {
        console.log(error);
    }

    
}