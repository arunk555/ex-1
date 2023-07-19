const express = require('express');
const userrouter = require('./user.routes');
const authrouter = require('./auth.routes');
const router = express.Router();

router.use(userrouter);
router.use(authrouter);

module.exports = router;
