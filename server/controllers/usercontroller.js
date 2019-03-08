const axios = require('axios')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const googlesignin = require('../helpers/googleoauth')

class UserController {

    static signup(req , res) {
        // axios.post(`https:localhost`)
        // console.log('signup is called!')
        const {username, password, email } = req.body
        let obj = {
            username,
            password,
            email
        }
        // cek if there is user same with the email
        User.findOne({
            email: obj.email
        })
        .then(user=>{
            if (user) {
                res.status(403).json({
                    message: 'User already exists!'
                })
            } else {
                return User.create(obj)
                .then(user=>{
                    let payload = {
                        sub: user._id
                    }
                    const token = jwt.sign(payload, process.env.SECRET_KEY)
                    // respond the token
                    res.status(201).json({token: token})
                })
            }
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static signin(req,res) {
        if (req.body.via === 'website') {
            User
            .findOne({
                username: req.body.username
            })
            .then(user => {
                // console.log(user)
                let valid =  bcrypt.compareSync(req.body.password, user.password)
                // console.log(valid)
                if (valid) {
                    let payload = {
                        sub: user._id
                    }   
                    let token = jwt.sign(payload, process.env.SECRET_KEY)
                    res.status(200).json({token: token})
                } else {
                    res.status(400).json({
                        message: 'Invalid username/password'
                    })
                }
            })
            .catch(err => {
                console.log('masok err')
                res.status(500).json({
                    message: 'Invalid username/password'
                })
            })
        } else if (req.body.via === 'google') {
            // console.log('masok google signin')
            // console.log(req.body.id_token)
           googlesignin(req.body.id_token)
           .then(user=>{
               console.log(user)
           })
           .catch(err=>{
               console.log(err)
           })

        }
        
    }

    

}

module.exports = UserController