const Sales_Products = (sequelize, DataTypes) => {
	const Sales_Products = sequelize.define('Sales_Products', {
    saleId: {
      field: 'sale_id',
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productId: {
      field: 'product_id',
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
	}, {
		timestamps: false,
	});

  Sales_Products.associate = (models) => {
    Sales_Products.belongsTo(models.Sales, { as: 'sales', foreignKey: 'saleId' });
		Sales_Products.belongsTo(models.Products, { as: 'products', foreignKey: 'productId' });
	};

	return Sales_Products;
};

module.exports = Sales_Products;