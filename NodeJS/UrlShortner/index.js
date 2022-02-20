const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;

//Connect DB
connectDB();

app.use(express.json({extented : false}));

//Define Routes..
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));


app.listen(PORT,()=>{
    console.log(`Server Running...`);
    console.log(`http://localhost:${PORT}`);
})