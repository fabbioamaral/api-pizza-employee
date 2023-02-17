const express = require('express');
const router = express.Router();
const productCategoryController = require('../controllers/product');
const { body } = require('express-validator');
const isAuth = require('../middlewares/is-auth');

// GET /product-categories
router.get('/product-categories', isAuth, productCategoryController.getProductCategories);

// POST /product-category
router.post('/product-category', isAuth, productCategoryController.addProductCategory);

// PUT /product-category/:productCategoryId
router.put('/product-category/:productCategoryId', isAuth, productCategoryController.updateProductCategory);

// DELETE /product-category/:productCategoryId
router.delete('/product-category/:productCategoryId', isAuth, productCategoryController.deleteProductCategory);

module.exports = router;
