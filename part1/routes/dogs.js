var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET dog list */
router.get('/dogs', async(req, res) {
    const [rows] = await req.db.execute('SELECT * FROM dogs');
    res.json(rows);
});

module.exports = router;
