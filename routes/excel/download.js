// 下载excel模板
const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const moment = require('moment');


router.get('/', function (request, response, next) {
    response.render('excel/download');
});

// 下载excel文件，1：科室，2：医务人员，3：疾病
router.get('/download', function (req, res, next) {
    var type = req.query.type;
    var en = ""; // 文件原名
    var cn = ""; // 下载时文件显示名称
    if(type == 1){
        cn = "科室";
        en = "dept.xlsx";
    }else if(type == 2){
        cn = "医务人员";
        en = "doctor.xlsx";
    }else if(type == 3){
        cn = "疾病";
        en = "disease.xlsx";
    }else{

    }
    // var filepath = path.join('__dirname', './tempfile');
    res.download('public/tempfile/' + en, cn + getServerTime() + '.xlsx', function (err) {

    })
});

// 获取服务器时间
function getServerTime() {
    var now = new Date();
    return moment(now).format('YYYY-MM-DD');
}

module.exports = router;