var express = require('express');
var router = express.Router();
const db = require("./db_connect");

/* GET home page. */
router.get('/', function(req, res, next) {
  db((err, connection) => {
    connection.query("SELECT * FROM TEST1", (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }
      console.log(rows);
    });
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
