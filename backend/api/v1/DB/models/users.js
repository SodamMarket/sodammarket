module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'users',
    {
      index: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      birthday: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      seller: {
        type: DataTypes.BOOLEAN(),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
