const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admand:Marvin@03141718@cluster0-aryaf.mongodb.net/test?retryWrites=true', 
    {
        useNewUrlParser: true
    }
);

app.get('/', (req, res) => {
    return res.send('Hello Word');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});