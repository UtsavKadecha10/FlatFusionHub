const express = require('express');
const cors = require('cors');
const Log = require('./middleware/Logger');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Log);

const addUser = require('./modules/users/post.js');
app.post('/users', addUser);

const login = require('./modules/users/login.js');
app.post('/login', login);

const postProperty = require('./modules/sellProperty/post.js');
app.post('/postProperty', postProperty);

const buyProperty = require('./modules/buyProperty/get.js')
app.get('/buyProperty', buyProperty);

const rentProperty = require('./modules/rentProperty/get.js')
app.get('/rentProperty', rentProperty);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
