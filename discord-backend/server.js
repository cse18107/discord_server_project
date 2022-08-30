const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;


const app = express();

app.use(express.json());
app.use(cors());

// register the routes
app.use('/api/auth',authRoutes);

const server = http.createServer(app);

server.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`);
});

mongoose.connect(`${process.env.MONGO_URI}`).then(()=>{
    console.log('Database connected successfully');
}).catch(error=> {
    console.log(error);
});
