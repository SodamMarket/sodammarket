const express = require('express');
const router = express.Router();
const { topIndexContents } = require('../DB/query/contents');
/* GET home page. */
router.get('/total', async function(req, res, next) {
  let topIndex = await topIndexContents();

  //   console.log(topIndex);
  if (topIndex === undefined) {
    topIndex = 1;
  } else {
    const { index } = topIndex;
    topIndex = index + 1;
  }
  //   console.log('topIndex', topIndex);
  res.json({
    topIndex,
  });
});

module.exports = router;
