const Sales = (sequelize, DataTypes) => {
	const Sales = sequelize.define('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
		userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sellerId: {
      field: 'seller_id',
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      field: 'total_price',
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
    },
    deliveryAddress: {
      field: 'delivery_address',
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      field: 'delivery_number',
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate : {
      field: 'sale_date',
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
	}, {
		timestamps: false,
	});

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, { as: 'seller', foreignKey: 'sellerId' });
		Sales.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
	};

	return Sales;
};

module.exports = Sales;
