const express = require('express');
const router = express.Router();
const { insertContents } = require('../DB/query/contents');
const { insertSpecialUsers } = require('../DB/query/special');

/* GET home page. */
router.get('/', function(req, res, next) {
  let session = req.session;
  res.render('enroll', {
    session,
  });
});

router.post('/', async function(req, res, next) {
  let session = req.session;
  let contents = req.body;

  console.log('INSERT CONTENTS');
  try {
    await insertContents(contents);
    res.send({
      state: 200,
    });
  } catch (error) {
    console.error('INSERT CONTENTS ERROR', error);
    res.send({
      state: 404,
    });
  }
  // console.log('post enroll', contents);
});

router.post('/special', async function(req, res, next) {
  let session = req.session;
  let special = req.body;

  console.log('special', special);

  const { productid, specialusers } = special;

  console.log('productid', productid);
  console.log('specialusers', specialusers);
  try {
    await insertSpecialUsers(special);
    res.send({
      state: 200,
    });
  } catch (error) {
    console.error('INSERT SPECIAL ERROR', error);
    res.send({
      state: 404,
    });
  }

  // try {
  //   await insertContents(contents);
  // } catch (error) {
  //   console.error('INSERT CONTENTS ERROR', error);
  // }
  // console.log('post enroll', contents);
});

module.exports = router;
