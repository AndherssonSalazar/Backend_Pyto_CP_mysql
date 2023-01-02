"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mongoose = require("mongoose");
// SETTING
_app["default"].set("port", process.env.PORT);
_app["default"].set("host", process.env.HOST);
// SERVER  ESCUCHANDO
_app["default"].listen(_app["default"].get("port"), _app["default"].get("host"), function () {
  console.log("Servidor en puerto", _app["default"].get("port"));
});