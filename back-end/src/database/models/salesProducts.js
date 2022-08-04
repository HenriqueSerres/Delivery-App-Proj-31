const Sales_Products = (sequelize, DataTypes) => {
	const Sales_Products = sequelize.define('Sales_Products', {
    sale_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    product_id: {
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

	return Sales_Products;
};

module.exports = Sales_Products;