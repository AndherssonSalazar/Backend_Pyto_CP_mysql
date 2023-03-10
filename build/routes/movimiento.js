"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _express = require("express");
var movCtrl = _interopRequireWildcard(require("../controllers/movimiento.controllers"));
var _middlewares = require("../middlewares");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
// Definimos las rutas::

// router.post('/create',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.createMovimiento);
// router.get('/searchByCode/:codigo',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientoByCode);
// router.put('/anular_mov/:_id',[authJwt.verifyToken,authJwt.isJefeAlmacen], movCtrl.updateAnular);
// router.get('/aprobados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAprobados);
// router.get('/anulados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAnulados);
// router.get('/reporte/:codigo'/*,[authJwt.verifyToken,authJwt.isJefeOrAlmacenero]*/, movCtrl.getReporte);
//-----------movimientos entrada-----------------------------------
router.post('/entrada/create', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.createMovimientoEntrada);
router.get('/entrada/searchByCode/:codigo', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientoByCodeEntrada);
router.put('/entrada/anular_mov/:_id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeAlmacen], movCtrl.updateAnularEntrada);
router.get('/entrada/aprobados', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAprobadosEntrada);
router.get('/entrada/anulados', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAnuladosEntrada);
router.get('/entrada/items/:_id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getItemsEntrada);
//-----------movimientos salida-----------------------------------
router.post('/salida/create', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.createMovimientoSalida);
router.get('/salida/searchByCode/:codigo', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientoByCodeSalida);
router.put('/salida/anular_mov/:_id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeAlmacen], movCtrl.updateAnularSalida);
router.get('/salida/aprobados', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAprobadosSalida);
router.get('/salida/anulados', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAnuladosSalida);
router.get('/salida/items/:_id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeOrAlmacenero], movCtrl.getItemsSalida);
module.exports = router;