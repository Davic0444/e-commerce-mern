const express = require('express')
const app = express()
const apiRoutes = require('./routes/apiRoutes')

const port = 7000

// mongoose connection
const connectDB = require('./config/db');
connectDB();

app.get('/', function (req, res) {
    console.log("first")
    res.send('Hello World')
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});