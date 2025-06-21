var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET dog list */
router.get('/dogs', async(req, res) {
    const [rows] = await db.query(
    )
    res.json(rows);
});

module.exports = router;
