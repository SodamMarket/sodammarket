const express = require('express');
const router = express.Router();

const { latestContents } = require('../DB/query/contents');

const PATH = './images/sodam/';
const DETAIL = '/detail?productId=';
/* GET home page. */
router.get('/', async function(req, res, next) {
  let session = req.session;
  const contents = await latestContents();

  for (content of contents) {
    content['path'] = PATH + content['livestock'] + '.jpg';
    content['detail'] = DETAIL + content['index'];
  }

  res.render('index', {
    session,
    contents,
  });
});

router.get('/latest', async function(req, res, next) {
  const contents = await latestContents();
  res.json({
    result: contents,
  });
});

module.exports = router;
