var express = require('express');
// 路由
var router = express.Router();
var db = require('./db.js');

// 列表
router.get('/list', function (request, response, next) {
    var sql = 'select '
                +'user.number, '
                +'user.sex, '
                +'user.iphone, '
                +'user.state, '
                +'date_format(user.entry_time + "", "%Y-%m-%d %H:%m:%S") as entry_time, '
                +'role.role_name '
                +'from t_user_info user left join t_role_info role on user.role_id = role.id';
    db.query(sql, function (err, rows) {
        console.log(rows);
        if(err){
            response.render('user/user', null);
        }else{
            response.render('user/user', {title : '用户列表', datas : rows});
        }
    });
});

module.exports = router;