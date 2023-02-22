const express = require('express');
const router = express.Router();
const { registeruser, loginuser, getMe } = require("../controllers/userAuthControllers")
router.use(express.json())
router.post('/', registeruser);
router.post('/login', loginuser);
router.get('/me', getMe);

module.exports = router;