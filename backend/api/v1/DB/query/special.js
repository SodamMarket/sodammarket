const db = require('../models');
const { specials } = db;

const insertSpecialUsers = async data => {
  const { productid, specialusers } = data;

  console.log('query inserSepcialUsers', productid, specialusers);
  for (specialuser of specialusers) {
    await specials.create({
      productid,
      userid: specialuser,
    });
  }
};

const selectSpecialUser = async (productId, specialId) => {
  console.log(productId, specialId);
  const specialUsers = await specials.findAll({
    raw: true,
    where: {
      productid: productId,
      userid: specialId,
    },
  });

  return specialUsers;
};

module.exports = {
  insertSpecialUsers,
  selectSpecialUser,
};
