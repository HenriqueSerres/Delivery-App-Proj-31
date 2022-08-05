const Prducts = (sequelize, DataTypes) => {
	const Prducts = sequelize.define('Prducts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    urlImage: {
      field: 'url_image',
      allowNull: false,
      type: DataTypes.STRING,
    },
	}, {
		timestamps: false,
	});

	return Prducts;
};

module.exports = Prducts;