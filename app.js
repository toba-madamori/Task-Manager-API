
// modules
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Database connection
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware (inbuilt)
app.use(express.static('./public'))
app.use(express.json());

// routes and custom built middleware
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);


//server
const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start(); 