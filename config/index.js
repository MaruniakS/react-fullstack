const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    cookieKey: process.env.cookieKey,
    google: {
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
    },
}
