var express = require("express");
var router = express.Router();
const helloWorld = require("./services/helloWorld.service");
const keycloak = require("./config/config").getKeycloak();

router.get("/user", keycloak.protect("user"), function (req, res) {
  console.log("req...", req.body);
  const msg = helloWorld.hello();
  res.send(msg);
});

router.get("/admin", function (req, res) {
  res.send("Hello Admin");
});

router.get("/all-user", function (req, res) {
  res.send("Hello All User");
});

module.exports = router;
