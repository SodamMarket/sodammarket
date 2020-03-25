const db = require('../models');
const { contents } = db;

const insertContents = async content => {
  const { liveStock, productName, seller, price, specialPrice, weight } = content;

  await contents.create({
    livestock: liveStock,
    productname: productName,
    seller,
    price,
    specialprice: specialPrice,
    weight,
  });
};

const selectContents = async productIndex => {
  const content = await contents.findOne({
    raw: true,
    where: {
      index: productIndex,
    },
  });

  return content;
};

const latestContents = async () => {
  const contentsList = await contents.findAll({
    raw: true,
    order: [['index', 'DESC']],
    limit: 4,
  });
  return contentsList;
};

const topIndexContents = async () => {
  const [rows, fields] = await contents.findAll({
    raw: true,
    attributes: ['index'],
    order: [['index', 'DESC']],
    limit: 1,
  });

  return rows;
};

module.exports = {
  insertContents,
  latestContents,
  selectContents,
  topIndexContents,
};
