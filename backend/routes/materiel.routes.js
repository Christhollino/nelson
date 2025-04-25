const express = require('express');
const router = express.Router();
const db = require('../db');

// Create
router.post('/', (req, res) => {
  const { numero, design, etat, quantite } = req.body;
  const sql = 'INSERT INTO materiel (numero, design, etat, quantite) VALUES (?, ?, ?, ?)';
  db.query(sql, [numero, design, etat, quantite], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM materiel', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// Update
router.put('/:id', (req, res) => {
  const { numero, design, etat, quantite } = req.body;
  const sql = 'UPDATE materiel SET numero = ?, design = ?, etat = ?, quantite = ? WHERE id = ?';
  db.query(sql, [numero, design, etat, quantite, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM materiel WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

module.exports = router;
