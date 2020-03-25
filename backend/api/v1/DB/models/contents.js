module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'contents',
    {
      index: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      livestock: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      productname: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      seller: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      specialprice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
