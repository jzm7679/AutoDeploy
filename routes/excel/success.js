// All success, and end.
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('excel/success');
});

module.exports = router;