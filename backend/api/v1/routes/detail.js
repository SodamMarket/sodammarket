const express = require('express');
const router = express.Router();

const { selectSpecialUser } = require('../DB/query/special');
const { selectContents } = require('../DB/query/contents');

const PATH = './images/sodam/';

/* GET home page. */
router.get('/', async function(req, res, next) {
  let session = req.session;
  const productId = req.query.productId;

  const content = await selectContents(productId);
  if (session.userId) {
    const user = await selectSpecialUser(productId, session.userId);

    console.log('user', user);
    if (user.length) {
      content['price'] = content['specialprice'];
    }
  }

  content['path'] = PATH + content['livestock'] + '.jpg';

  res.render('detail', {
    session,
    content,
  });
});

module.exports = router;
