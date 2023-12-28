const express = require('express');
const { userRegisterValidate, userLoginValidate } = require('../utils/userValidation');
const { loginUser, registerUser, getUsers } = require('../userController/indexusercontroller');
const {ensureAuthenticated}  = require('../utils/auth');
const routes = express.Router();



routes.post('/register', userRegisterValidate ,registerUser);

routes.post('/login', userLoginValidate, loginUser
);

routes.get('/users', ensureAuthenticated, getUsers);


module.exports = routes;