const Sales = (sequelize, DataTypes) => {
	const Sales = sequelize.define('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
		user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    saller_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    total_price: {
      allowNull: false,
      type: DataTypes.FLOAT,
      
    },
    delivery_address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    delivery_number: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sale_date : {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    }
	}, {
		timestamps: false,
	});

	return Sales;
};

module.exports = Sales;