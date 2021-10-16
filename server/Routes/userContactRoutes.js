const express = require('express');
const router = express.Router();

const {createUser,getUser,addFriend} = require('../Controllers/userContactController')

router.post('/user/signup',createUser);

router.get('/user/:email',getUser)

router.post('/user/addFriend',addFriend)

module.exports = router;