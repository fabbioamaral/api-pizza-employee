const Employee = require('../models/employee');
const ProductExports = require('../models/product');
const Product = ProductExports.Product;
const ProductCategory = ProductExports.ProductCategories;
const PizzaBorder = ProductExports.PizzaBorders;
const PizzaFlavor = ProductExports.PizzaFlavors;
const CategoryPizzaFlavor = ProductExports.CategoryPizzaFlavors;


// Product Category

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

//  Pizza Border
    
exports.getPizzaBorders = (req, res, next) => {
    PizzaBorder.findAll()
    .then(pizzaBorders => {
        res.status(200).json({
            message: 'Fetched pizza borders successfully.',
            pizzaBorders
        });
    })
    .catch(err => {
        console.log('Error retrieving pizza borders');
        console.log(err);
    });
}

exports.addPizzaBorder = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const size = req.body.size;

    PizzaBorder.create({
        name,
        price,
        size
    })
        .then(result => {
            res.status(201).json({
                message: `${name} pizza border has been added successfully.`,
                employees: result
            });
        })
        .catch(err => {
            console.log('Error adding pizza border');
            console.log(err);
        });
}

exports.updatePizzaBorder = (req, res, next) => {
    const pizzaBorderId = req.params.pizzaBorderId;

    PizzaBorder.findByPk(pizzaBorderId)
    .then(pizzaBorder => {
        if (!pizzaBorder) {
            const error = new Error('Could not find pizza border.');
            error.statusCode = 404;
            throw error; 
        } else {
            const name = req.body.name;
            const price = req.body.price;
            const size = req.body.size;
            return PizzaBorder.update(
                {
                    name,
                    price,
                    size
                },
                { where: {id: pizzaBorderId} }
            );
        }
    }).then(result => {
        res.status(200).json({
            message: 'Pizza border updated successfully.'
        });
    })
    .catch(err => {
        console.log('Error trying to update a pizza border');
        console.log(err);
    });
}

exports.deletePizzaBorder = (req, res, next) => {

    const pizzaBorderId = req.params.pizzaBorderId;
    PizzaBorder.findByPk(pizzaBorderId)
        .then(pizzaBorder => {
            if (!pizzaBorder) {
                const error = new Error('Could not find pizza border.');
                error.statusCode = 404;
                throw error;
            }

            return PizzaBorder.destroy({where: { id: pizzaBorderId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Pizza border has been deleted successfully.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
            throw err;
        });
}

// Pizza Flavor

exports.getPizzaFlavors = (req, res, next) => {
    PizzaFlavor.findAll()
    .then(pizzaFlavors => {
        res.status(200).json({
            message: 'Fetched pizza flavors successfully.',
            pizzaFlavors
        });
    })
    .catch(err => {
        console.log('Error retrieving pizza flavors');
        console.log(err);
    });
}

exports.addPizzaFlavor = (req, res, next) => {
    const name = req.body.name;
    const category = req.body.category;

    PizzaFlavor.create({
        name,
        category
    })
        .then(result => {
            res.status(201).json({
                message: `${name} pizza flavor has been added successfully.`,
                employees: result
            });
        })
        .catch(err => {
            console.log('Error adding pizza flavor');
            console.log(err);
        });
}

exports.updatePizzaFlavor = (req, res, next) => {
    const pizzaFlavorId = req.params.pizzaFlavorId;

    PizzaFlavor.findByPk(pizzaFlavorId)
    .then(pizzaFlavor => {
        if (!pizzaFlavor) {
            const error = new Error('Could not find pizza flavor.');
            error.statusCode = 404;
            throw error; 
        } else {
            const name = req.body.name;
            const category = req.body.category;
            return PizzaFlavor.update(
                {
                    name,
                    category,
                },
                { where: {id: pizzaFlavorId} }
            );
        }
    }).then(result => {
        res.status(200).json({
            message: 'Pizza flavor updated successfully.'
        });
    })
    .catch(err => {
        console.log('Error trying to update a pizza flavor');
        console.log(err);
    });
}

exports.deletePizzaFlavor = (req, res, next) => {

    const pizzaFlavorId = req.params.pizzaFlavorId;
    PizzaFlavor.findByPk(pizzaFlavorId)
        .then(pizzaFlavor => {
            if (!pizzaFlavor) {
                const error = new Error('Could not find pizza flavor.');
                error.statusCode = 404;
                throw error;
            }

            return PizzaFlavor.destroy({where: { id: pizzaFlavorId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Pizza flavor has been deleted successfully.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
            throw err;
        });
}

// Category Pizza Flavor
exports.getCategoryPizzaFlavor = (req, res, next) => {
    CategoryPizzaFlavor.findAll()
    .then(categoryPizza => {
        res.status(200).json({
            message: 'Fetched category pizza flavors successfully.',
            categoryPizza
        });
    })
    .catch(err => {
        console.log('Error retrieving category pizza flavors');
        console.log(err);
    });
}

exports.addCategoryPizzaFlavor = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const size = req.body.size;

    PizzaFlavor.create({
        name,
        price,
        size
    })
        .then(result => {
            res.status(201).json({
                message: `${name} category pizza flavor has been added successfully.`,
                employees: result
            });
        })
        .catch(err => {
            console.log('Error adding category pizza flavor');
            console.log(err);
        });
}

exports.updateCategoryPizzaFlavor = (req, res, next) => {
    const categoryPizzaFlavorId = req.params.categoryPizzaFlavorId;

    CategoryPizzaFlavor.findByPk(categoryPizzaFlavorId)
    .then(categoryPizza => {
        if (!categoryPizza) {
            const error = new Error('Could not find category pizza flavor.');
            error.statusCode = 404;
            throw error; 
        } else {
            const name = req.body.name;
            const price = req.body.price;
            const size = req.body.size;
            return CategoryPizzaFlavor.update(
                {
                    name,
                    price,
                    size
                },
                { where: {id: categoryPizzaFlavorId} }
            );
        }
    }).then(result => {
        res.status(200).json({
            message: 'Category pizza flavor updated successfully.'
        });
    })
    .catch(err => {
        console.log('Error trying to update category pizza flavor');
        console.log(err);
    });
}

exports.deleteCategoryPizzaFlavor = (req, res, next) => {

    const categoryPizzaFlavorId = req.params.categoryPizzaFlavorId;
    CategoryPizzaFlavor.findByPk(categoryPizzaFlavorId)
        .then(categoryPizza => {
            if (!categoryPizza) {
                const error = new Error('Could not find category pizza flavor.');
                error.statusCode = 404;
                throw error;
            }

            return CategoryPizzaFlavor.destroy({where: { id: categoryPizzaFlavorId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Category pizza flavor has been deleted successfully.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
            throw err;
        });
}