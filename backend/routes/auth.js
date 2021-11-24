const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res)=>{

    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
    })
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(401).json(err)
    }
})

router.post('/login', async (req, res)=>{
    const user = await User.findOne({"email": req.body.email})
    if(!user) return res.status(401).json("wrong password or  email")

    const password = bcrypt.compareSync(req.body.password, user.password)
    if(password === false){
        return res.status(401).json("wrong password or email")
    }

    res.status(201).json(user)
})

module.exports = router