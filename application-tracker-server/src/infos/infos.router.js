const router = require("express").Router();
const controller = require("./infos.controller");
const MethodNotAllowed = require('../errors/MethodNotAllowed')

router.route("/").get(controller.list).all(MethodNotAllowed);
module.exports = router;
