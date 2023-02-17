const Employee = require('../models/employee');
const ProductExports = require('../models/product');
const Product = ProductExports.Product;
const ProductCategory = ProductExports.ProductCategories;
const PizzaBorder = ProductExports.PizzaBorders;
const PizzaFlavor = ProductExports.PizzaFlavors;
const CategoryPizzaFlavor = ProductExports.CategoryPizzaFlavors;

exports.getProductCategories = (req, res, next) => {
    ProductCategory.findAll()
    .then(productCategories => {
        res.status(200).json({
            message: 'Fetched product categories successfully.',
            productCategories
        });
    })
    .catch(err => {
        console.log('Error retrieving product categories');
        console.log(err);
    });
}

exports.addProductCategory = (req, res, next) => {
    const name = req.body.name;

    ProductCategory.create({
        name
    })
        .then(result => {
            res.status(201).json({
                message: 'Category has been added successfully.',
                employees: result
            });
        })
        .catch(err => {
            console.log('Error adding a product category');
            console.log(err);
        });
}

exports.updateProductCategory = (req, res, next) => {
    const categoryId = req.params.productCategoryId;

    ProductCategory.findByPk(categoryId)
    .then(category => {
        if (!category) {
            const error = new Error('Could not find category.');
            error.statusCode = 404;
            throw error; 
        } else {
            const name = req.body.name;

            return ProductCategory.update(
                {
                    name
                },
                { where: {id: categoryId} }
            );
        }
    }).then(result => {
        res.status(200).json({
            message: 'Employee updated successfully.'
        });
    })
    .catch(err => {
        console.log('Error trying to update a category');
        console.log(err);
    });
}

exports.deleteProductCategory = (req, res, next) => {

    const categoryId = req.params.productCategoryId;
    ProductCategory.findByPk(categoryId)
        .then(category => {
            if (!category) {
                const error = new Error('Could not find product category.');
                error.statusCode = 404;
                throw error;
            }

            return ProductCategory.destroy({where: { id: categoryId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Product category has been deleted successfully.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
            throw err;
        });
}
    
