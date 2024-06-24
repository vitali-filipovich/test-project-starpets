const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');

router.put('/update-balance', userValidator.validateUpdateBalance, userController.updateBalance);

module.exports = router;
