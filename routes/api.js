var express = require('express');
var router = express.Router();

/* API STUFF HAPPENS HERE. */
router.get('/', function(req, res, next) {
  res.json({
    message: 'Welcome to the GAP!'
  });
});

module.exports = router;
