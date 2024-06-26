const express = require('express');
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");
const path = require('path');
const userSessionValidate = require('../middleware/userSessionValidate');
const adminSessionValidate = require('../middleware/adminSessionValidate');
const validationProductCreate = require("../validations/validationProductCreate")


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
router.post('/addToCart', userSessionValidate, productController.addToCart);


router.post('/removeFromCart', productController.removeFromCart);
//sacamos esto ----  adminSessionValidate ---- de las 2 rutas,
//router.get('/productCreate_form', productController.createForm)
router.get('/productCreate_form',adminSessionValidate, productController.createForm)
router.post('/productCreate_form',upload.array("image"), validationProductCreate,productController.store); 

// router.get('/productEdit/:id', productController.edit )
// router.put('/productEdit/:id',upload.array("image"),productController.update)


router.get('/productEdit/:id', adminSessionValidate, productController.edit )
router.put('/productEdit/:id',upload.array("image"), adminSessionValidate, productController.update)


router.get('/dashboard',adminSessionValidate,productController.dashboard )

router.delete('/delete/:id',adminSessionValidate,productController.delete);


router.get('/photo/:id', productController.showPhotoProduct)
//router.get('/dashboard', adminSessionValidate, productController.dashboard )

//router.delete(`/delete/:id`, adminSessionValidate, productController.destroy);

module.exports = router;