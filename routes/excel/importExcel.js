// Import the excel file, then perform the parsing.
var express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render('excel/import');
});

module.exports = router;


