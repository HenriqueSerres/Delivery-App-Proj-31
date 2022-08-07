const User = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
    role: DataTypes.STRING,
	}, {
		timestamps: false,
	});

	return User;
};

module.exports = User;
