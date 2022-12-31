"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mongoose = require("mongoose");
// SETTING
_app["default"].set("port", process.env.PORT);
// SERVER  ESCUCHANDO
_app["default"].listen(_app["default"].get("port"), function () {
  console.log("Servidor en puerto", _app["default"].get("port"));
});