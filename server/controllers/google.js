

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'wwqreewrfd';


class GoogleAuthController {
  static signin(req, res, next) {
    client
    .verifyIdToken({
      idToken: req.body.idtoken,
      audience: process.env.CLIENT_ID,
    })
    .then(ticket => {
      const { email, name, picture } = ticket.getPayload();
      const accessToken = jwt.sign({ email }, JWT_SECRET);

      res.status(200).json({ email, name, picture, accessToken })
    })
    .catch(next)
  }
}

module.exports = GoogleAuthController