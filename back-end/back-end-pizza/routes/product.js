const express = require('express');
const router = express.Router();
const productCategoryController = require('../controllers/product');
const { body } = require('express-validator');
const isAuth = require('../middlewares/is-auth');

/** Product Category */
// GET /product-categories
router.get('/product-categories', isAuth, productCategoryController.getProductCategories);

// POST /product-category
router.post('/product-category', isAuth, productCategoryController.addProductCategory);

// PUT /product-category/:productCategoryId
router.put('/product-category/:productCategoryId', isAuth, productCategoryController.updateProductCategory);

// DELETE /product-category/:productCategoryId
router.delete('/product-category/:productCategoryId', isAuth, productCategoryController.deleteProductCategory);

/** Pizza Border */
// GET /pizza-borders
router.get('/pizza-borders', isAuth, productCategoryController.getPizzaBorders);

// POST /pizza-border
router.post('/pizza-border', isAuth, productCategoryController.addPizzaBorder);

// PUT /pizza-border/:id
router.put('/pizza-border/:pizzaBorderId', isAuth, productCategoryController.updatePizzaBorder);

// DELETE /pizza-border/:id
router.delete('/pizza-border/:pizzaBorderId', isAuth, productCategoryController.deletePizzaBorder);

/** Pizza Flavor */
// GET /pizza-flavors
router.get('/pizza-flavors', isAuth, productCategoryController.getPizzaFlavors);

// POST /pizza-flavor
router.post('/pizza-flavor', isAuth, productCategoryController.addPizzaFlavor);

// PUT /pizza-flavor/:pizzaFlavorId
router.put('/pizza-flavor/:pizzaFlavorId', isAuth, productCategoryController.updatePizzaFlavor);

// DELETE /pizza-flavor/:pizzaFlavorId
router.delete('/pizza-flavor/:pizzaFlavorId', isAuth, productCategoryController.deletePizzaFlavor);

/** Category Pizza Flavor */
// GET /category-pizza-flavors
router.get('/category-pizza-flavors', isAuth, productCategoryController.getCategoryPizzaFlavor);

// POST /category-pizza-flavor
router.post('/category-pizza-flavor', isAuth, productCategoryController.addCategoryPizzaFlavor);

// PUT /category-pizza-flavor/:pizzaFlavorId
router.put('/category-pizza-flavor/:pizzaFlavorId', isAuth, productCategoryController.updateCategoryPizzaFlavor);

// DELETE /category-pizza-flavor/:pizzaFlavorId
router.delete('/category-pizza-flavor/:pizzaFlavorId', isAuth, productCategoryController.deleteCategoryPizzaFlavor);

module.exports = router;
