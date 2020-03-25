const db = require('../models');
const { users } = db;

const selectAllUsers = async () => {
  const result = await users.findAll({ raw: true });
  return result;
};

const signInQuery = async (id, password) => {
  const result = await users.findOne({
    raw: true,
    where: {
      id,
      password,
    },
  });

  return result;
};
const insertUser = async user => {
  const { id, password, email, name, phone, address, birthday, seller } = user;
  await users.create({
    id,
    password,
    email,
    name,
    phone,
    address,
    birthday,
    seller,
  });
};

module.exports = {
  selectAllUsers,
  insertUser,
  signInQuery,
};
