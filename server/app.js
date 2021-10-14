const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const CONNECTION_URL = 'mongodb://localhost/contact-awesome'
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({ extended:true}));

app.listen(PORT,()=>console.log(`server running on port ${PORT}`));