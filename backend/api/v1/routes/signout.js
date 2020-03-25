const express = require('express');
const router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect('/');
});

module.exports = router;
