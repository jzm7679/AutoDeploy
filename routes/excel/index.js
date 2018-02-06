const express = require('express');
const router = express.Router();

// 首页
router.get('/index', function (request, response, next) {

    response.render('excel/index');
});

module.exports = router;