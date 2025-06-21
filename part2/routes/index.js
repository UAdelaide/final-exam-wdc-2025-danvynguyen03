const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const [rows] = await db.query(`
        SELECT user_id, username, role FROM Users
        WHERE email = ? AND password_hash = ?
      `, [email, password]);

      if (rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      res.json({ message: 'Login successful', user: rows[0] });
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
  });

  module.exports = router;