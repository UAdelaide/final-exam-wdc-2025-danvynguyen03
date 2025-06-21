var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET dog list */
router.get('/dogs', async(req, res) => {
        const [rows] = await db.query(`
        SELECT d.name AS dog_name, d.size
        FROM Dogs d
        JOIN Users u ON d.owner_id = u.user_id
    `);
    res.json(rows);
});

router.get(/walkre)


module.exports = router;
