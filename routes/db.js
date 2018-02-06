// 连接MySql数据库
var mysql = require('mysql');

var pool = mysql.createPool({
    host : '192.168.0.200',
    user : 'root',
    password : 'root',
    database : 'dpm_test',
    charset : 'UTF8'
});

// execute sql
function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();
        });
    });
}

exports.query = query;
