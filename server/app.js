const express = require('express');
const path = require('path');
require('./config/connect.js'); // Connect to MongoDB
const app = express();
const userRouter = require('./routes/userRoute.js')
const userContactRouter = require('./routes/userContactRoute.js')
const cors = require('cors'); // Import CORS middleware
const port = process.env.PORT || 4000; 

app.use(cors({
    origin: 'https://cookmate-1.onrender.com',
    credentials: true
}));
app.use(express.json()); // Middleware to parse JSON requests
app.use('/user', userRouter)
app.use('/contact', userContactRouter)

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, ()=>{
    console.log("Server is running on port 5000");
});
