const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/siteController');

router.get('/new-products', homeController.newProductsShow);
router.get('/products', homeController.productsShow);
router.get('/selling', homeController.sellingShow);
router.get('/sale', homeController.saleShow);
router.get('/blog', homeController.blogShow);
router.get('/contact', homeController.contactShow);
router.get('/', homeController.homeShow);

module.exports = router;
