const express = require('express');
const router = express.Router();

// DB
const { signInQuery } = require('../DB/query/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

/* POST users */
router.post('/', async function(req, res, next) {
  const { id, password } = req.body;

  const user = await signInQuery(id, password);
  if (user === null) {
    res.send({
      state: 400,
    });
  }

  req.session.userId = user.id;
  // req.session.seller = user.seller;

  console.log('test', req.session);
  res.send({
    state: 200,
  });
});

module.exports = router;
