"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _initialSetup = require("./libs/initialSetup");
var _producto = _interopRequireDefault(require("./routes/producto"));
var _categoria = _interopRequireDefault(require("./routes/categoria"));
var _auth = _interopRequireDefault(require("./routes/auth"));
var _user = _interopRequireDefault(require("./routes/user"));
var _movimiento = _interopRequireDefault(require("./routes/movimiento"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cors = require('cors');
var corsOptions = {
  origin: 'trustedwebsite.com' // Compliant
};

var app = (0, _express["default"])();
app.disable("x-powered-by");
app.use(cors(corsOptions));
//createRoles();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use('/api/productos', _producto["default"]);
app.use('/api/categoria', _categoria["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/movimiento', _movimiento["default"]);
var _default = app;
exports["default"] = _default;