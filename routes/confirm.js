const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
   res.render('order_confirmation')
});
  router.post("/", (req, res) => {
  res.render('order_confirmation')
})
return router;

};

