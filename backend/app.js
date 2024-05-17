const express = require('express');
const cors = require('cors');
const Log = require('./middleware/Logger');
// const Auth = require('./middleware/Auth');
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Log);
// app.use(Auth);

// SIGN IN
const addUser = require('./modules/users/post.js');
app.post('/users', addUser);

// LOGIN
const login = require('./modules/users/login.js');
app.post('/login', login);

// SELL
const postProperty = require('./modules/sellProperty/post.js');
app.post('/postProperty', postProperty);

// RENT
const rentBachelor = require('./modules/rentProperty/bachelorFriendly/get.js')
app.get('/rentBachelor', rentBachelor)

const rentBudget = require('./modules/rentProperty/budgetFriendly/get.js') 
app.get('/rentBudget', rentBudget)

const rentFurnished = require('./modules/rentProperty/furnishedHomes/get.js')
app.get('/rentFurnished', rentFurnished)

// BUY
const buyBudget = require('./modules/buyProperty/budgetHomes/get.js')
app.get('/buyBudget', buyBudget)

const buyFurnished = require('./modules/buyProperty/furnishedProperty/get.js')
app.get('/buyFurnished', buyFurnished)

const buyPremium = require('./modules/buyProperty/premiumHomes/get.js')
app.get('/buyPremium', buyPremium)

const buyReady = require('./modules/buyProperty/readyToMove/get.js')
app.get('/buyReady', buyReady)

// SERVER
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
