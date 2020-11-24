const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');

const keys = require('./config')

const app = express();
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: keys.cookieKey
    })
);

app.use('/api', authRoutes)

app.get('/api', (req, res) => res.send(keys.google.clientID))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);