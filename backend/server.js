const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express()


app.get('/api/index',(req, res) => {
    res.json({message:'Upload File'})
})



app.listen(port, ()=> console.log(`Server is running on port ${port}`));