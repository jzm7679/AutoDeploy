// 检验
var express = require('express');
var router = express.Router();
var db = require('./../db.js');

router.get('/', function (req, res , next) {

    var sql = 'select * from t_dept_info';
    db.query(sql, function (err, rows) {
        if(err){
            res.render('excel/check', null);
        }else{
            res.render('excel/check', {datas : rows});
        }
    });
});

router.get('/check', function (req, res , next) {
    
});

module.exports = router;

