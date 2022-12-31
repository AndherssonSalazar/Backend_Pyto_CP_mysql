"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;
var _mongoose = require("mongoose");
var ROLES = ["user", "admin", "jefe_almacen", "almacenero"];
exports.ROLES = ROLES;
var roleSchema = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
});
var _default = (0, _mongoose.model)("Role", roleSchema);
exports["default"] = _default;