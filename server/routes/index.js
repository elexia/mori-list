const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const path = require('path');

const authenticationController = require('../controllers/authentication.js');
const permissions = require('express-jwt-permissions')({ requiestProperty: 'payload' });
const secret = "MOCHI_IS_THE_CUTEST_CAT";
const auth = jwt({ secret: secret, userProperty: 'payload' });

// Authentication
router.post('/signup', authenticationController.signup);
router.post('/login', authenticationController.login);

module.exports = router;
