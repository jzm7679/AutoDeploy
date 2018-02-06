// 创建数据库，并初始化数据库表
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('excel/db');
});

module.exports = router;