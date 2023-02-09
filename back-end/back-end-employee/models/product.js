const { Sequelize } = require("sequelize");

const sequelize = require('../database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    pizzaBorder: {
        type: Sequelize.STRING
    },
    pizzaFlavor1: {
        type: Sequelize.STRING
    },
    pizzaFlavor2: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.ENUM('small', 'medium', 'large', 'extra large'),
    },
    notes: {
        type: Sequelize.STRING
    }
});

const ProductCategories = sequelize.define('product_categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const PizzaBorders = sequelize.define('pizza_borders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
    size: {
        type: Sequelize.ENUM('small', 'medium', 'large', 'extra large'),
        allowNull: false
    }
});

const PizzaFlavors = sequelize.define('pizza_flavors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const CategoryPizzaFlavors = sequelize.define('pizza_flavors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
    size: {
        type: Sequelize.ENUM('small', 'medium', 'large', 'extra large'),
        allowNull: false
    }
});

// One-to-Many relationship: Product-Product_Categories
Product.hasOne(ProductCategories);
ProductCategories.hasMany(Product, {
    foreignKey: {
        allowNull: false
    }
});

// One-to-Many relationship: Product-Pizza_Border
Product.hasOne(PizzaBorders);
PizzaBorders.hasMany(Product);

// One-to-Many relationship: Pizza_Flavor-Categories_Pizza_Flavor
PizzaFlavors.hasOne(CategoryPizzaFlavors);
CategoryPizzaFlavors.hasMany(PizzaFlavors);



ProductCategories.hasMany(Product, {
    foreignKey: {
        allowNull: false
    }
});


module.exports = Product;


// PAREI NA DÚVIDA
/**
 * atualizar o dbdocs
 */