const Products = (sequelize, DataTypes) => {
	const Products = sequelize.define('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    urlImage: {
      field: 'url_image',
      allowNull: false,
      type: DataTypes.STRING,
    },
	}, {
		timestamps: false,
    tableName: 'products'
	});

	return Products;
};

module.exports = Products;
