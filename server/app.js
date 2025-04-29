const express = require('express');
require('./config/connect.js'); // Connect to MongoDB
const app = express();
const userRouter = require('./routes/userRoute.js')
const userContactRouter = require('./routes/userContactRoute.js')
const cors = require('cors'); // Import CORS middleware
const port = process.env.PORT || 4000; 

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json()); // Middleware to parse JSON requests
app.use('/', userRouter)
app.use('/', userContactRouter)


app.listen(port, ()=>{
    console.log("Server is running on port 5000");
});