var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET dog list */
router.get('/dogs', async(req, res) {

    try {
        const [rows] = await db.query(
        'SELECT
        FROM 
    )
    res.json(rows);
});

module.exports = router;
