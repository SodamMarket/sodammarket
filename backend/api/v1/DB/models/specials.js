module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'specials',
    {
      productid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
