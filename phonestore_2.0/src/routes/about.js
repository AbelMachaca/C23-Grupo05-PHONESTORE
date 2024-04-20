const express = require('express');
const router = express.Router();
var path = require('path');
const aboutController=require('../controllers/aboutController')



/* GET about page. */

router.get('/about',aboutController.description)

module.exports = router;