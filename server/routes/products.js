const express = require('express');
const router = express.Router();

// any routes can exe this middleware
router.use((req, res, next) => {
  console.log((new Date()).toISOString());
  next();
});

// if the route matches ''
router.get('', (req, res) => {
  res.json({"ok" : true});
});

module.exports = router;
