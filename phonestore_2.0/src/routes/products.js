const express = require('express');
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");
const path = require('path');
const userSessionValidate = require('../middleware/userSessionValidate');
const adminSessionValidate = require('../middleware/adminSessionValidate');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,(path.join(__dirname,"../","../","public/images/imageHome")))
    },
    filename:(req,file,cb)=>{

        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const upload  = multer({storage});
/* GET home page. */

router.get('/productDetail/:id', productController.detail);

router.get('/productCart', userSessionValidate, productController.cart)

router.get('/productCreate_form', adminSessionValidate, productController.createForm)
router.post('/productCreate_form', adminSessionValidate,upload.array("image"), productController.store); 


router.get('/productEdit/:id', productController.edit )
router.put('/productEdit/:id',upload.array("image"),productController.update)


// router.get('/productEdit/:id', adminSessionValidate, productController.edit )
// router.put('/productEdit/:id',upload.array("image"), adminSessionValidate, productController.update)


router.get('/dashboard',productController.dashboard )

router.delete(`/delete/:id`,productController.destroy);

//router.get('/dashboard', adminSessionValidate, productController.dashboard )

//router.delete(`/delete/:id`, adminSessionValidate, productController.destroy);

module.exports = router;