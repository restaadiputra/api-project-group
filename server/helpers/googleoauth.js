const { OAuth2Client } = require('google-auth-library')
require('dotenv').config()
// const jwt = require('json')
const clientId = process.env.IDClient
const client = new OAuth2Client(clientId)

module.exports = (token)=> {
    return new Promise((resolve, reject)=>{
        client.verifyIdToken({
            idToken: token,
            audience: clientId
        })
        .then(ticket=>{
            const payload = ticket.getPayload()
            resolve(payload)
        })
        .catch(err=>{
            reject(err)
        })
    })
}