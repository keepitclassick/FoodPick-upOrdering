const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/admin", (req, res) => {
    res.render("admin");
  });

  return router;
};
