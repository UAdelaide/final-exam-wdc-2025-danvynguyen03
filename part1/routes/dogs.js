var express = require('express');
var router = express.Router();

/* GET dog list */
router.get('/', async(req, res) {
    const [rows] = await req.db.execute('SELECT * FROM dogs');
    res.json(rows);
});

module.exports = router;
