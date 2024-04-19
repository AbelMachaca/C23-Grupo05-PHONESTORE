const express = require('express');
const router = express.Router();
const aboutController=require('../controllers/aboutController')



/* GET home page. */

router.get('/about',aboutController)

module.exports = router;