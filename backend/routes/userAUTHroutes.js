const express = require('express');
const router = express.Router();
const { registeruser, loginuser, getMe, updates, deletes } = require("../controllers/userAuthControllers")
const { protect } = require("../middleware/authmiddleware")
router.use(express.json())
router.post('/', registeruser);
router.post('/login', loginuser);
router.get('/me', protect, getMe);
router.put("/:_id", protect, updates);
router.delete("/:_id", protect, deletes);



module.exports = router;