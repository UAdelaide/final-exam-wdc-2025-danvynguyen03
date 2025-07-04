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

router.get('/walkrequests/open/', async(req, res) => {
    const [rows] = await db.query(`
        SELECT wr.request_id, wr.walk_date, u.name AS walker_name, d.name AS dog_name
        FROM WalkRequests wr
        JOIN Users u ON wr.walker_id = u.user_id
        JOIN Dogs d ON wr.dog_id = d.dog_id
        WHERE wr.status = 'open'
    `);
    res.json(rows);
});

router.get('/walkers/summary', async(req, res) => {
    const [rows] = await db.query(`
        SELECT u.name AS walker_name, COUNT(wr.request_id) AS total_walks
        FROM Users u
        LEFT JOIN WalkRequests wr ON u.user_id = wr.walker_id
        WHERE u.role = 'walker'
        GROUP BY u.user_id
    `);
    res.json(rows);
});

module.exports = router;
