const express = require("express");
const indexRouter = require("./index");
const router = express.Router();

/* GET endpoint - add new message form. */
router.get("/", function (req, res, next) {
  res.render("new", {});
});

/* ADD endpoint - add new message to message stream. */
router.post("/", function (req, res, next) {
  indexRouter.addMessages({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  res.status(201).redirect("/");
});

module.exports = router;
