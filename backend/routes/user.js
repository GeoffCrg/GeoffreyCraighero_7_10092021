const express = require('express');

const users = express.Router();
const userCtrl = require('../controllers/user');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

//Routes utilisateurs

users.post('/signup',  userCtrl.signup);
users.post('/login',   userCtrl.login);
users.delete('/delete/:id', auth, userCtrl.deleteAccount);
users.get('/userInfo/:email', auth, userCtrl.oneUser);
users.get('/usersInfo', auth, userCtrl.allUser); 
users.put('/:id', auth,  userCtrl.updateUser);

module.exports = users;
