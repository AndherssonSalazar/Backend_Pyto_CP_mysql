"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _express = require("express");
var movCtrl = _interopRequireWildcard(require("../controllers/movimiento.controllers"));
var _middlewares = require("../middlewares");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
// Definimos las rutas::

router.post('/create', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.createMovimiento);
router.get('/searchByCode/:codigo', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientoByCode);
router.put('/anular_mov/:_id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeAlmacen], movCtrl.updateAnular);
router.get('/aprobados', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAprobados);
router.get('/anulados', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAnulados);
//router.get('/salida/aprobados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosSalidaAprobados);
//router.get('/salida/anulados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosSalidaAnulados);
//router.get('/entrada/aprobados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosEntradaAprobados);
//router.get('/entrada/anulados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosEntradaAnulados);
router.get('/reporte/:codigo' /*,[authJwt.verifyToken,authJwt.isJefeOrAlmacenero]*/, movCtrl.getReporte);
module.exports = router;