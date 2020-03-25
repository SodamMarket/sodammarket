const express = require('express');
const router = express.Router();

// DB
const { selectAllUsers, insertUser } = require('../DB/query/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const session = req.session;
  res.render('signup', {
    session,
  });
});

/* POST users */
router.post('/', async function(req, res, next) {
  const user = req.body;
  try {
    await insertUser(user);
    res.send({
      state: 200,
    });
  } catch (error) {
    console.error('insert user error', error);
    res.send({
      state: 400,
    });
  }
});

module.exports = router;
