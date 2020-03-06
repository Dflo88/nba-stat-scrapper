var express = require('express');
var router = express.Router();
const results = require("../scraper")

/* GET home page. */
router.get("/", async function(req, res, next) {
  const result = await results();
  res.render('index', result);
});

module.exports = router;
