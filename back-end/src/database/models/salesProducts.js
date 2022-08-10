const SalesProducts = (sequelize, DataTypes) => {
	const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      field: 'sale_id',
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      field: 'product_id',
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
	}, {
		timestamps: false,
    tableName: 'Sales_Products'
	});

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
		models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
	};

	return SalesProducts;
};

module.exports = SalesProducts;