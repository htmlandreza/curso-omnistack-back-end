const express = require('express');
const mongoose = require('mongoose');

const app = express();

const serve = require('http').Server(app);
const io = require('socket.io')(serve);

mongoose.connect('mongodb+srv://admand:Marvin@03141718@cluster0-aryaf.mongodb.net/test?retryWrites=true', 
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});