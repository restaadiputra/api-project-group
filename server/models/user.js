const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/dbbook', {useNewUrlParser: true})

const Schema = mongoose.Schema

//  Create Schema
let userSchema = new Schema({
    name: String,
    username: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    }
})

userSchema.pre('save', function(next){
    const saltRounds = 10
    var salt = bcrypt.genSaltSync(saltRounds)
    var hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next()
})

// Create the Model 
let User = mongoose.model('user', userSchema)

// Export the Schema
module.exports = User