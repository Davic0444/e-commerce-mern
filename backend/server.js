const express = require('express')
const app = express()
const apiRoutes = require('./routes/apiRoutes')

// mongoose connection
const connectDB = require('./config/db');
connectDB();

const port = 7000
app.use(express.json());

app.get("/", async (req, res, next) => {
    res.json({ message: "API running..." });
});

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
    console.error(error);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});