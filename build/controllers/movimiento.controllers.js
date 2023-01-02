"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAnularSalida = exports.updateAnularEntrada = exports.updateAnular = exports.getReporte = exports.getMovimientosAprobadosSalida = exports.getMovimientosAprobadosEntrada = exports.getMovimientosAprobados = exports.getMovimientosAnuladosSalida = exports.getMovimientosAnuladosEntrada = exports.getMovimientosAnulados = exports.getMovimientoByCodeSalida = exports.getMovimientoByCodeEntrada = exports.getMovimientoByCode = exports.createMovimientoSalida = exports.createMovimientoEntrada = exports.createMovimiento = void 0;
var _m_movimiento = _interopRequireDefault(require("../models/m_movimiento"));
var _m_movimiento_entrada = _interopRequireDefault(require("../models/m_movimiento_entrada"));
var _m_movimiento_salida = _interopRequireDefault(require("../models/m_movimiento_salida"));
var _m_producto = _interopRequireDefault(require("../models/m_producto"));
var _BadRequestException = require("../exceptions/BadRequestException");
var _InternalServerException = require("../exceptions/InternalServerException");
var _NotFoundException = require("../exceptions/NotFoundException");
var _error = _interopRequireDefault(require("../constants/error.enum"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mysql = require('mysql');
var _require = require('util'),
  promisify = _require.promisify;
var config_mysql = require('../config_mysql.js');

// Autor: Jonatan Pacora
// 30/11/22
/* el codigo aqui es usado para el
 CUS 22 - 23 registrar a un movimiento*/

var createMovimiento = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, codigo, factura, tipo, fecha, id_responsable, name_responsable, lista_items, productsArray, _iterator, _step, item, item_code, Producto_item, stock_new, Producto_upd, updated_product, _iterator2, _step2, _item, _item_code, _Producto_item, _stock_new, code_product, _Producto_upd, _updated_product, newMov, MovSaved;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, codigo = _req$body.codigo, factura = _req$body.factura, tipo = _req$body.tipo, fecha = _req$body.fecha, id_responsable = _req$body.id_responsable, name_responsable = _req$body.name_responsable, lista_items = _req$body.lista_items;
          if (lista_items.length) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se recibieron los items del movimiento"
          }));
        case 4:
          productsArray = []; // un ITEM (los objects del array lista_items) tiene los campos:
          //     codigo_product, name_product,description,categoria,
          //     stock, precio, cantidad
          if (!(tipo == "Salida")) {
            _context.next = 41;
            break;
          }
          _iterator = _createForOfIteratorHelper(lista_items);
          _context.prev = 7;
          _iterator.s();
        case 9:
          if ((_step = _iterator.n()).done) {
            _context.next = 31;
            break;
          }
          item = _step.value;
          // Validación de operacion aceptada con el stock
          item_code = item.codigo_product;
          _context.next = 14;
          return _m_producto["default"].findOne({
            codigo: item_code
          });
        case 14:
          Producto_item = _context.sent;
          if (!(item.cantidad > Producto_item.stock)) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return", res.status(_error["default"].BAD_REQUEST).json({
            message: "NO SE PUEDE REALIZAR OPERACION, STOCK INSUFICIENTE"
          }));
        case 17:
          console.log("old stock", Producto_item.stock);
          stock_new = Producto_item.stock - item.cantidad;
          console.log("new stock", stock_new);
          // Actualizar Colleccion Productos
          _context.next = 22;
          return _m_producto["default"].findOneAndUpdate({
            codigo: item.codigo_product
          }, {
            stock: stock_new
          });
        case 22:
          Producto_upd = _context.sent;
          if (Producto_upd) {
            _context.next = 25;
            break;
          }
          return _context.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se encontró al producto que se quiere añadir"
          }));
        case 25:
          _context.next = 27;
          return _m_producto["default"].findOne({
            codigo: item.codigo_product
          });
        case 27:
          updated_product = _context.sent;
          productsArray.push(updated_product);
        case 29:
          _context.next = 9;
          break;
        case 31:
          _context.next = 36;
          break;
        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](7);
          _iterator.e(_context.t0);
        case 36:
          _context.prev = 36;
          _iterator.f();
          return _context.finish(36);
        case 39:
          _context.next = 80;
          break;
        case 41:
          _iterator2 = _createForOfIteratorHelper(lista_items);
          _context.prev = 42;
          _iterator2.s();
        case 44:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 72;
            break;
          }
          _item = _step2.value;
          _context.prev = 46;
          _item_code = _item.codigo_product;
          _context.next = 50;
          return _m_producto["default"].findOne({
            codigo: _item_code
          });
        case 50:
          _Producto_item = _context.sent;
          console.log("old stock", _Producto_item.stock);
          _stock_new = _Producto_item.stock + _item.cantidad;
          console.log("new stock", _stock_new);
          code_product = _item.codigo_product; // Actualizar Colleccion Productos
          _context.next = 57;
          return _m_producto["default"].findOneAndUpdate({
            codigo: code_product
          }, {
            stock: _stock_new
          });
        case 57:
          _Producto_upd = _context.sent;
          if (_Producto_upd) {
            _context.next = 60;
            break;
          }
          return _context.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se encontró al producto que se quiere añadir"
          }));
        case 60:
          _context.next = 62;
          return _m_producto["default"].findOne({
            codigo: code_product
          });
        case 62:
          _updated_product = _context.sent;
          productsArray.push(_updated_product);
          _context.next = 70;
          break;
        case 66:
          _context.prev = 66;
          _context.t1 = _context["catch"](46);
          console.log(_context.t1);
          return _context.abrupt("return", res.status(_error["default"].INTERNAL_SERVER_ERROR).json({
            message: "Ha aparecido un ERROR al momento de crear el movimiento"
          }));
        case 70:
          _context.next = 44;
          break;
        case 72:
          _context.next = 77;
          break;
        case 74:
          _context.prev = 74;
          _context.t2 = _context["catch"](42);
          _iterator2.e(_context.t2);
        case 77:
          _context.prev = 77;
          _iterator2.f();
          return _context.finish(77);
        case 80:
          newMov = new _m_movimiento["default"]({
            codigo: codigo,
            factura: factura,
            tipo: tipo,
            fecha: fecha,
            id_responsable: id_responsable,
            name_responsable: name_responsable,
            lista_items: lista_items,
            estado: "Aprobado"
          });
          _context.next = 83;
          return newMov.save();
        case 83:
          MovSaved = _context.sent;
          return _context.abrupt("return", res.json({
            status: 200,
            movimiento: MovSaved,
            updated_product: productsArray,
            message: "Se ha creado el Movimiento correctamente"
          }));
        case 87:
          _context.prev = 87;
          _context.t3 = _context["catch"](0);
          console.log(_context.t3);
          return _context.abrupt("return", res.status(_error["default"].INTERNAL_SERVER_ERROR).json({
            message: "Se ha generado un error al momento de crear el movimiento: " + _context.t3
          }));
        case 91:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 87], [7, 33, 36, 39], [42, 74, 77, 80], [46, 66]]);
  }));
  return function createMovimiento(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// Autor: Jonatan Pacora
// 6/12/22
/* Esta parte del codigo permite buscar un movimiento por su code*/
exports.createMovimiento = createMovimiento;
var getMovimientoByCode = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var codigo, movimiento;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          codigo = req.params.codigo;
          _context2.next = 4;
          return _m_movimiento["default"].findOne({
            codigo: codigo
          });
        case 4:
          movimiento = _context2.sent;
          if (movimiento) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.json({
            status: 404,
            message: "No se encontró al Movimiento"
          }));
        case 7:
          return _context2.abrupt("return", res.json({
            status: 200,
            message: "Se ha obtenido el movimiento por codigo",
            data: movimiento
          }));
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener un movimiento por codigo"
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getMovimientoByCode(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
// Autor: Jonatan Pacora
// 6/12/22
/* Esta parte del codigo permite Anular un movimiento
 actualizando el stock en Productos*/
exports.getMovimientoByCode = getMovimientoByCode;
var updateAnular = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _id, movimiento_select, movementsArray, _iterator3, _step3, item, item_code, Producto_item, stock_new, Producto_upd, updated_product, lista_items, updated_mov, updated_movimiento;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _id = req.params._id;
          _context4.next = 4;
          return _m_movimiento["default"].findById({
            _id: _id
          });
        case 4:
          movimiento_select = _context4.sent;
          if (movimiento_select) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al movimiento que se quiere anular"
          }));
        case 7:
          movementsArray = []; //===== record
          if (!movimiento_select.lista_items) {
            _context4.next = 50;
            break;
          }
          if (!(movimiento_select.tipo == "Entrada")) {
            _context4.next = 47;
            break;
          }
          _iterator3 = _createForOfIteratorHelper(movimiento_select.lista_items);
          _context4.prev = 11;
          _iterator3.s();
        case 13:
          if ((_step3 = _iterator3.n()).done) {
            _context4.next = 37;
            break;
          }
          item = _step3.value;
          item_code = item.codigo_product; // Obteniendo Producto del item
          _context4.next = 18;
          return _m_producto["default"].findOne({
            codigo: item_code
          });
        case 18:
          Producto_item = _context4.sent;
          if (Producto_item) {
            _context4.next = 21;
            break;
          }
          return _context4.abrupt("return", res.json({
            status: 404,
            message: "No se encontró el producto del item"
          }));
        case 21:
          if (!(item.cantidad > Producto_item.stock)) {
            _context4.next = 23;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            status: 400,
            message: "NO SE PUEDE REALIZAR OPERACION, STOCK INSUFICIENTE"
          }));
        case 23:
          console.log("old stock", Producto_item.stock);
          stock_new = Producto_item.stock - item.cantidad;
          console.log("new stock", stock_new);
          // Actualizar Colleccion Productos
          _context4.next = 28;
          return _m_producto["default"].findOneAndUpdate({
            codigo: item.codigo_product
          }, {
            stock: stock_new
          });
        case 28:
          Producto_upd = _context4.sent;
          if (Producto_upd) {
            _context4.next = 31;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al producto que se quiere actualizar"
          }));
        case 31:
          _context4.next = 33;
          return _m_producto["default"].findOne({
            codigo: item.codigo_product
          });
        case 33:
          updated_product = _context4.sent;
          movementsArray.push(updated_product);
        case 35:
          _context4.next = 13;
          break;
        case 37:
          _context4.next = 42;
          break;
        case 39:
          _context4.prev = 39;
          _context4.t0 = _context4["catch"](11);
          _iterator3.e(_context4.t0);
        case 42:
          _context4.prev = 42;
          _iterator3.f();
          return _context4.finish(42);
        case 45:
          _context4.next = 50;
          break;
        case 47:
          lista_items = movimiento_select.lista_items;
          _context4.next = 50;
          return lista_items.forEach( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(item) {
              var item_code, Producto_item, stock_new, Producto_upd, updated_product;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    item_code = item.codigo_product; // Obteniendo el stock producto del item
                    _context3.next = 3;
                    return _m_producto["default"].findOne({
                      codigo: item_code
                    });
                  case 3:
                    Producto_item = _context3.sent;
                    if (Producto_item) {
                      _context3.next = 6;
                      break;
                    }
                    return _context3.abrupt("return", res.json({
                      status: 404,
                      message: "No se encontró el producto del item"
                    }));
                  case 6:
                    console.log("old stock", Producto_item.stock);
                    stock_new = Producto_item.stock + item.cantidad;
                    console.log("new stock", stock_new);
                    // Actualizar Colleccion Productos
                    _context3.next = 11;
                    return _m_producto["default"].findOneAndUpdate({
                      codigo: item.codigo_product
                    }, {
                      stock: stock_new
                    });
                  case 11:
                    Producto_upd = _context3.sent;
                    if (Producto_upd) {
                      _context3.next = 14;
                      break;
                    }
                    return _context3.abrupt("return", res.status(404).json({
                      status: 404,
                      message: "No se encontró al producto que se quiere actuañizar"
                    }));
                  case 14:
                    _context3.next = 16;
                    return _m_producto["default"].findOne({
                      codigo: item.codigo_product
                    });
                  case 16:
                    updated_product = _context3.sent;
                    movementsArray.push(updated_product);
                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x7) {
              return _ref4.apply(this, arguments);
            };
          }());
        case 50:
          _context4.next = 52;
          return _m_movimiento["default"].findOneAndUpdate({
            _id: _id
          }, {
            estado: "Anulado"
          });
        case 52:
          updated_mov = _context4.sent;
          if (updated_mov) {
            _context4.next = 55;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al movimiento para anularlo"
          }));
        case 55:
          _context4.next = 57;
          return _m_movimiento["default"].findOne({
            _id: _id
          });
        case 57:
          updated_movimiento = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha anulado el movimiento",
            data: updated_movimiento,
            movimientos: movementsArray
          }));
        case 61:
          _context4.prev = 61;
          _context4.t1 = _context4["catch"](0);
          console.log(_context4.t1);
          return _context4.abrupt("return", res.status(500).json({
            status: 500,
            message: "Ha aparecido un ERROR al momento de anular el movimiento"
          }));
        case 65:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 61], [11, 39, 42, 45]]);
  }));
  return function updateAnular(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Autor: Jonatan Pacora
// 13/12/22
/* Codigo permite Obtener los movimientos aprobados*/
exports.updateAnular = updateAnular;
var getMovimientosAprobados = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var movimientos;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _m_movimiento["default"].find({
            estado: "Aprobado"
          });
        case 3:
          movimientos = _context5.sent;
          if (movimientos) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró a los mov Aprobados"
          }));
        case 6:
          return _context5.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido los mov Aprobados",
            data: movimientos
          }));
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los mov Aprobados"
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function getMovimientosAprobados(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

// Autor: Jonatan Pacora
// 13/12/22
/* Codigo permite Obtener los movimientos Anulados*/
exports.getMovimientosAprobados = getMovimientosAprobados;
var getMovimientosAnulados = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var movimientos;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _m_movimiento["default"].find({
            estado: "Anulado"
          });
        case 3:
          movimientos = _context6.sent;
          if (movimientos) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró a los mov Aprobados"
          }));
        case 6:
          return _context6.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido los mov Anulados",
            data: movimientos
          }));
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los mov Anulados"
          }));
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function getMovimientosAnulados(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

// Autor: Andhersson Salazar
// 14/12/22
/* el codigo aqui es usado para el
 CUS 29 generar reporte de movimiento*/
exports.getMovimientosAnulados = getMovimientosAnulados;
var getReporte = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          return _context7.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido el reporte",
            data: "gg"
          }));
        case 4:
          _context7.prev = 4;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener el reporte"
          }));
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function getReporte(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

//---------------------------------- movimientos de entrada-----------------------------------
exports.getReporte = getReporte;
var createMovimientoEntrada = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body2, codigo, orden_compra, fecha, id_usuario, proveedor, lista_items, productsArray, _iterator4, _step4, item, item_code, sql, pool, promiseQuery, promisePoolEnd, result, Producto_item, stock_new, code_product, sql2, pool2, promiseQuery2, promisePoolEnd2, result2, Producto_upd, sql3, pool3, promiseQuery3, promisePoolEnd3, result3, updated_product, sql4, pool4, promiseQuery4, promisePoolEnd4, result4, MovSaved, a, i, sql5, pool5, promiseQuery5, promisePoolEnd5, result5, _MovSaved;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$body2 = req.body, codigo = _req$body2.codigo, orden_compra = _req$body2.orden_compra, fecha = _req$body2.fecha, id_usuario = _req$body2.id_usuario, proveedor = _req$body2.proveedor, lista_items = _req$body2.lista_items;
          if (lista_items.length) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se recibieron los items del movimiento entrada"
          }));
        case 4:
          productsArray = [];
          _iterator4 = _createForOfIteratorHelper(lista_items);
          _context8.prev = 6;
          _iterator4.s();
        case 8:
          if ((_step4 = _iterator4.n()).done) {
            _context8.next = 54;
            break;
          }
          item = _step4.value;
          _context8.prev = 10;
          item_code = item.codigo_product;
          sql = "CALL sp_obtener_producto_por_code('".concat(item_code, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context8.next = 18;
          return promiseQuery(sql);
        case 18:
          result = _context8.sent;
          promisePoolEnd();
          Producto_item = JSON.parse(JSON.stringify(result[0][0]));
          console.log("old stock", Producto_item.stock);
          stock_new = Producto_item.stock + item.cantidad;
          console.log("new stock", stock_new);
          code_product = item.codigo_product; // Actualizar Colleccion Productos
          sql2 = "CALL sp_actualizar_stock_producto_por_codigo('".concat(item_code, "','").concat(stock_new, "')");
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context8.next = 31;
          return promiseQuery2(sql2);
        case 31:
          result2 = _context8.sent;
          promisePoolEnd2();
          Producto_upd = JSON.parse(JSON.stringify(result2[0][0]));
          if (Producto_upd) {
            _context8.next = 36;
            break;
          }
          return _context8.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se encontró al producto que se quiere añadir"
          }));
        case 36:
          sql3 = "CALL sp_obtener_producto_por_code('".concat(item_code, "')");
          pool3 = mysql.createPool(config_mysql);
          promiseQuery3 = promisify(pool3.query).bind(pool3);
          promisePoolEnd3 = promisify(pool3.end).bind(pool3);
          _context8.next = 42;
          return promiseQuery3(sql3);
        case 42:
          result3 = _context8.sent;
          promisePoolEnd3();
          updated_product = JSON.parse(JSON.stringify(result3[0][0]));
          productsArray.push(updated_product);
          _context8.next = 52;
          break;
        case 48:
          _context8.prev = 48;
          _context8.t0 = _context8["catch"](10);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.status(_error["default"].INTERNAL_SERVER_ERROR).json({
            message: "Ha aparecido un ERROR al momento de crear el movimiento de entrada"
          }));
        case 52:
          _context8.next = 8;
          break;
        case 54:
          _context8.next = 59;
          break;
        case 56:
          _context8.prev = 56;
          _context8.t1 = _context8["catch"](6);
          _iterator4.e(_context8.t1);
        case 59:
          _context8.prev = 59;
          _iterator4.f();
          return _context8.finish(59);
        case 62:
          sql4 = "CALL sp_crear_movimiento_entrada('".concat(id_usuario, "', '").concat(codigo, "', '").concat(orden_compra, "', '").concat(proveedor, "')");
          pool4 = mysql.createPool(config_mysql);
          promiseQuery4 = promisify(pool4.query).bind(pool4);
          promisePoolEnd4 = promisify(pool4.end).bind(pool4);
          _context8.next = 68;
          return promiseQuery4(sql4);
        case 68:
          result4 = _context8.sent;
          promisePoolEnd4();
          MovSaved = JSON.parse(JSON.stringify(result4[0][0]));
          a = MovSaved;
          i = 0;
        case 73:
          if (!(i < lista_items.length)) {
            _context8.next = 86;
            break;
          }
          sql5 = "CALL sp_generar_item_movimiento_entrada('".concat(a.id, "', '").concat(productsArray[i].id, "', '").concat(productsArray[i].precio, "', '").concat(lista_items[i].cantidad, "')");
          pool5 = mysql.createPool(config_mysql);
          promiseQuery5 = promisify(pool5.query).bind(pool5);
          promisePoolEnd5 = promisify(pool5.end).bind(pool5);
          _context8.next = 80;
          return promiseQuery5(sql5);
        case 80:
          result5 = _context8.sent;
          promisePoolEnd5();
          _MovSaved = JSON.parse(JSON.stringify(result5[0][0]));
        case 83:
          i++;
          _context8.next = 73;
          break;
        case 86:
          return _context8.abrupt("return", res.json({
            status: 200,
            movimiento: MovSaved,
            updated_product: productsArray,
            message: "Se ha creado el Movimiento de entrada correctamente"
          }));
        case 89:
          _context8.prev = 89;
          _context8.t2 = _context8["catch"](0);
          console.log(_context8.t2);
          return _context8.abrupt("return", res.status(_error["default"].INTERNAL_SERVER_ERROR).json({
            message: "Se ha generado un error al momento de crear el movimiento de entrada: " + _context8.t2
          }));
        case 93:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 89], [6, 56, 59, 62], [10, 48]]);
  }));
  return function createMovimientoEntrada(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();
exports.createMovimientoEntrada = createMovimientoEntrada;
var getMovimientoByCodeEntrada = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var codigo, sql2, pool2, promiseQuery2, promisePoolEnd2, result2, movimiento;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          codigo = req.params.codigo;
          sql2 = "CALL sp_obtener_entrada_por_code('".concat(codigo, "')");
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context9.next = 8;
          return promiseQuery2(sql2);
        case 8:
          result2 = _context9.sent;
          promisePoolEnd2();
          movimiento = JSON.parse(JSON.stringify(result2[0]));
          if (movimiento) {
            _context9.next = 13;
            break;
          }
          return _context9.abrupt("return", res.json({
            status: 404,
            message: "No se encontró al Movimiento"
          }));
        case 13:
          return _context9.abrupt("return", res.json({
            status: 200,
            message: "Se ha obtenido el movimiento por codigo",
            data: movimiento
          }));
        case 16:
          _context9.prev = 16;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener un movimiento por codigo"
          }));
        case 20:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 16]]);
  }));
  return function getMovimientoByCodeEntrada(_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getMovimientoByCodeEntrada = getMovimientoByCodeEntrada;
var updateAnularEntrada = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _id, movimiento_select, movementsArray, _iterator5, _step5, item, item_code, Producto_item, stock_new, Producto_upd, updated_product, lista_items, updated_mov, updated_movimiento;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _id = req.params._id;
          _context11.next = 4;
          return _m_movimiento["default"].findById({
            _id: _id
          });
        case 4:
          movimiento_select = _context11.sent;
          if (movimiento_select) {
            _context11.next = 7;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al movimiento que se quiere anular"
          }));
        case 7:
          movementsArray = []; //===== record
          if (!movimiento_select.lista_items) {
            _context11.next = 50;
            break;
          }
          if (!(movimiento_select.tipo == "Entrada")) {
            _context11.next = 47;
            break;
          }
          _iterator5 = _createForOfIteratorHelper(movimiento_select.lista_items);
          _context11.prev = 11;
          _iterator5.s();
        case 13:
          if ((_step5 = _iterator5.n()).done) {
            _context11.next = 37;
            break;
          }
          item = _step5.value;
          item_code = item.codigo_product; // Obteniendo Producto del item
          _context11.next = 18;
          return _m_producto["default"].findOne({
            codigo: item_code
          });
        case 18:
          Producto_item = _context11.sent;
          if (Producto_item) {
            _context11.next = 21;
            break;
          }
          return _context11.abrupt("return", res.json({
            status: 404,
            message: "No se encontró el producto del item"
          }));
        case 21:
          if (!(item.cantidad > Producto_item.stock)) {
            _context11.next = 23;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            status: 400,
            message: "NO SE PUEDE REALIZAR OPERACION, STOCK INSUFICIENTE"
          }));
        case 23:
          console.log("old stock", Producto_item.stock);
          stock_new = Producto_item.stock - item.cantidad;
          console.log("new stock", stock_new);
          // Actualizar Colleccion Productos
          _context11.next = 28;
          return _m_producto["default"].findOneAndUpdate({
            codigo: item.codigo_product
          }, {
            stock: stock_new
          });
        case 28:
          Producto_upd = _context11.sent;
          if (Producto_upd) {
            _context11.next = 31;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al producto que se quiere actualizar"
          }));
        case 31:
          _context11.next = 33;
          return _m_producto["default"].findOne({
            codigo: item.codigo_product
          });
        case 33:
          updated_product = _context11.sent;
          movementsArray.push(updated_product);
        case 35:
          _context11.next = 13;
          break;
        case 37:
          _context11.next = 42;
          break;
        case 39:
          _context11.prev = 39;
          _context11.t0 = _context11["catch"](11);
          _iterator5.e(_context11.t0);
        case 42:
          _context11.prev = 42;
          _iterator5.f();
          return _context11.finish(42);
        case 45:
          _context11.next = 50;
          break;
        case 47:
          lista_items = movimiento_select.lista_items;
          _context11.next = 50;
          return lista_items.forEach( /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(item) {
              var item_code, Producto_item, stock_new, Producto_upd, updated_product;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    item_code = item.codigo_product; // Obteniendo el stock producto del item
                    _context10.next = 3;
                    return _m_producto["default"].findOne({
                      codigo: item_code
                    });
                  case 3:
                    Producto_item = _context10.sent;
                    if (Producto_item) {
                      _context10.next = 6;
                      break;
                    }
                    return _context10.abrupt("return", res.json({
                      status: 404,
                      message: "No se encontró el producto del item"
                    }));
                  case 6:
                    console.log("old stock", Producto_item.stock);
                    stock_new = Producto_item.stock + item.cantidad;
                    console.log("new stock", stock_new);
                    // Actualizar Colleccion Productos
                    _context10.next = 11;
                    return _m_producto["default"].findOneAndUpdate({
                      codigo: item.codigo_product
                    }, {
                      stock: stock_new
                    });
                  case 11:
                    Producto_upd = _context10.sent;
                    if (Producto_upd) {
                      _context10.next = 14;
                      break;
                    }
                    return _context10.abrupt("return", res.status(404).json({
                      status: 404,
                      message: "No se encontró al producto que se quiere actuañizar"
                    }));
                  case 14:
                    _context10.next = 16;
                    return _m_producto["default"].findOne({
                      codigo: item.codigo_product
                    });
                  case 16:
                    updated_product = _context10.sent;
                    movementsArray.push(updated_product);
                  case 18:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
            return function (_x20) {
              return _ref11.apply(this, arguments);
            };
          }());
        case 50:
          _context11.next = 52;
          return _m_movimiento["default"].findOneAndUpdate({
            _id: _id
          }, {
            estado: "Anulado"
          });
        case 52:
          updated_mov = _context11.sent;
          if (updated_mov) {
            _context11.next = 55;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al movimiento para anularlo"
          }));
        case 55:
          _context11.next = 57;
          return _m_movimiento["default"].findOne({
            _id: _id
          });
        case 57:
          updated_movimiento = _context11.sent;
          return _context11.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha anulado el movimiento",
            data: updated_movimiento,
            movimientos: movementsArray
          }));
        case 61:
          _context11.prev = 61;
          _context11.t1 = _context11["catch"](0);
          console.log(_context11.t1);
          return _context11.abrupt("return", res.status(500).json({
            status: 500,
            message: "Ha aparecido un ERROR al momento de anular el movimiento"
          }));
        case 65:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 61], [11, 39, 42, 45]]);
  }));
  return function updateAnularEntrada(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();
exports.updateAnularEntrada = updateAnularEntrada;
var getMovimientosAprobadosEntrada = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var sql2, pool2, promiseQuery2, promisePoolEnd2, result2, movimientos;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          sql2 = "CALL sp_obtener_movimientos_entrada_aprobados()";
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context12.next = 7;
          return promiseQuery2(sql2);
        case 7:
          result2 = _context12.sent;
          promisePoolEnd2();
          movimientos = JSON.parse(JSON.stringify(result2[0]));
          if (movimientos) {
            _context12.next = 12;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró a los mov Aprobados"
          }));
        case 12:
          return _context12.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido los mov Aprobados",
            data: movimientos
          }));
        case 15:
          _context12.prev = 15;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los mov Aprobados"
          }));
        case 18:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 15]]);
  }));
  return function getMovimientosAprobadosEntrada(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getMovimientosAprobadosEntrada = getMovimientosAprobadosEntrada;
var getMovimientosAnuladosEntrada = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var sql2, pool2, promiseQuery2, promisePoolEnd2, result2, movimientos;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          sql2 = "CALL sp_obtener_movimientos_entrada_anulados()";
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context13.next = 7;
          return promiseQuery2(sql2);
        case 7:
          result2 = _context13.sent;
          promisePoolEnd2();
          movimientos = JSON.parse(JSON.stringify(result2[0]));
          if (movimientos) {
            _context13.next = 12;
            break;
          }
          return _context13.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró a los mov Aprobados"
          }));
        case 12:
          return _context13.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido los mov Anulados",
            data: movimientos
          }));
        case 15:
          _context13.prev = 15;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los mov Anulados"
          }));
        case 18:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 15]]);
  }));
  return function getMovimientosAnuladosEntrada(_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}();

//--------------------------------movimientos salida-----------------------------
exports.getMovimientosAnuladosEntrada = getMovimientosAnuladosEntrada;
var createMovimientoSalida = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body3, codigo, factura, fecha, id_usuario, cliente, lista_items, productsArray, _iterator6, _step6, item, item_code, sql, pool, promiseQuery, promisePoolEnd, result, Producto_item, stock_new, sql2, pool2, promiseQuery2, promisePoolEnd2, result2, Producto_upd, sql3, pool3, promiseQuery3, promisePoolEnd3, result3, updated_product, sql4, pool4, promiseQuery4, promisePoolEnd4, result4, MovSaved, a, i, sql5, pool5, promiseQuery5, promisePoolEnd5, result5, _MovSaved2;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _req$body3 = req.body, codigo = _req$body3.codigo, factura = _req$body3.factura, fecha = _req$body3.fecha, id_usuario = _req$body3.id_usuario, cliente = _req$body3.cliente, lista_items = _req$body3.lista_items;
          if (lista_items.length) {
            _context14.next = 4;
            break;
          }
          return _context14.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se recibieron los items del movimiento entrada"
          }));
        case 4:
          productsArray = [];
          _iterator6 = _createForOfIteratorHelper(lista_items);
          _context14.prev = 6;
          _iterator6.s();
        case 8:
          if ((_step6 = _iterator6.n()).done) {
            _context14.next = 48;
            break;
          }
          item = _step6.value;
          // Validación de operacion aceptada con el stock
          item_code = item.codigo_product;
          sql = "CALL sp_obtener_producto_por_code('".concat(item_code, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context14.next = 17;
          return promiseQuery(sql);
        case 17:
          result = _context14.sent;
          promisePoolEnd();
          Producto_item = JSON.parse(JSON.stringify(result[0][0]));
          if (!(item.cantidad > Producto_item.stock)) {
            _context14.next = 22;
            break;
          }
          return _context14.abrupt("return", res.status(_error["default"].BAD_REQUEST).json({
            message: "NO SE PUEDE REALIZAR OPERACION, STOCK INSUFICIENTE"
          }));
        case 22:
          console.log("old stock", Producto_item.stock);
          stock_new = Producto_item.stock - item.cantidad;
          console.log("new stock", stock_new);
          // Actualizar Colleccion Productos
          sql2 = "CALL sp_actualizar_stock_producto_por_codigo('".concat(item_code, "','").concat(stock_new, "')");
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context14.next = 31;
          return promiseQuery2(sql2);
        case 31:
          result2 = _context14.sent;
          promisePoolEnd2();
          Producto_upd = JSON.parse(JSON.stringify(result2[0][0]));
          if (Producto_upd) {
            _context14.next = 36;
            break;
          }
          return _context14.abrupt("return", res.status(_error["default"].NOT_FOUND).json({
            message: "No se encontró al producto que se quiere añadir"
          }));
        case 36:
          sql3 = "CALL sp_obtener_producto_por_code('".concat(item_code, "')");
          pool3 = mysql.createPool(config_mysql);
          promiseQuery3 = promisify(pool3.query).bind(pool3);
          promisePoolEnd3 = promisify(pool3.end).bind(pool3);
          _context14.next = 42;
          return promiseQuery3(sql3);
        case 42:
          result3 = _context14.sent;
          promisePoolEnd3();
          updated_product = JSON.parse(JSON.stringify(result3[0][0]));
          productsArray.push(updated_product);
        case 46:
          _context14.next = 8;
          break;
        case 48:
          _context14.next = 53;
          break;
        case 50:
          _context14.prev = 50;
          _context14.t0 = _context14["catch"](6);
          _iterator6.e(_context14.t0);
        case 53:
          _context14.prev = 53;
          _iterator6.f();
          return _context14.finish(53);
        case 56:
          sql4 = "CALL sp_crear_movimiento_salida('".concat(id_usuario, "', '").concat(codigo, "', '").concat(factura, "', '").concat(cliente, "')");
          pool4 = mysql.createPool(config_mysql);
          promiseQuery4 = promisify(pool4.query).bind(pool4);
          promisePoolEnd4 = promisify(pool4.end).bind(pool4);
          _context14.next = 62;
          return promiseQuery4(sql4);
        case 62:
          result4 = _context14.sent;
          promisePoolEnd4();
          MovSaved = JSON.parse(JSON.stringify(result4[0][0]));
          a = MovSaved;
          i = 0;
        case 67:
          if (!(i < lista_items.length)) {
            _context14.next = 80;
            break;
          }
          sql5 = "CALL sp_generar_item_movimiento_salida('".concat(a.id, "', '").concat(productsArray[i].id, "', '").concat(productsArray[i].precio, "', '").concat(lista_items[i].cantidad, "')");
          pool5 = mysql.createPool(config_mysql);
          promiseQuery5 = promisify(pool5.query).bind(pool5);
          promisePoolEnd5 = promisify(pool5.end).bind(pool5);
          _context14.next = 74;
          return promiseQuery5(sql5);
        case 74:
          result5 = _context14.sent;
          promisePoolEnd5();
          _MovSaved2 = JSON.parse(JSON.stringify(result5[0][0]));
        case 77:
          i++;
          _context14.next = 67;
          break;
        case 80:
          return _context14.abrupt("return", res.json({
            status: 200,
            movimiento: MovSaved,
            updated_product: productsArray,
            message: "Se ha creado el Movimiento de salida correctamente"
          }));
        case 83:
          _context14.prev = 83;
          _context14.t1 = _context14["catch"](0);
          console.log(_context14.t1);
          return _context14.abrupt("return", res.status(_error["default"].INTERNAL_SERVER_ERROR).json({
            message: "Se ha generado un error al momento de crear el movimiento de salida: " + _context14.t1
          }));
        case 87:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 83], [6, 50, 53, 56]]);
  }));
  return function createMovimientoSalida(_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}();
exports.createMovimientoSalida = createMovimientoSalida;
var getMovimientoByCodeSalida = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var codigo, sql2, pool2, promiseQuery2, promisePoolEnd2, result2, movimiento;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          codigo = req.params.codigo;
          console.log(req.params);
          console.log(codigo);
          sql2 = "CALL sp_obtener_salida_por_code('".concat(codigo, "')");
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context15.next = 10;
          return promiseQuery2(sql2);
        case 10:
          result2 = _context15.sent;
          promisePoolEnd2();
          movimiento = JSON.parse(JSON.stringify(result2[0]));
          if (movimiento) {
            _context15.next = 15;
            break;
          }
          return _context15.abrupt("return", res.json({
            status: 404,
            message: "No se encontró al Movimiento"
          }));
        case 15:
          return _context15.abrupt("return", res.json({
            status: 200,
            message: "Se ha obtenido el movimiento por codigo",
            data: movimiento
          }));
        case 18:
          _context15.prev = 18;
          _context15.t0 = _context15["catch"](0);
          return _context15.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener un movimiento por codigo"
          }));
        case 21:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 18]]);
  }));
  return function getMovimientoByCodeSalida(_x27, _x28) {
    return _ref15.apply(this, arguments);
  };
}();
exports.getMovimientoByCodeSalida = getMovimientoByCodeSalida;
var updateAnularSalida = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _id, movimiento_select, movementsArray, _iterator7, _step7, item, item_code, Producto_item, stock_new, Producto_upd, updated_product, lista_items, updated_mov, updated_movimiento;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _id = req.params._id;
          _context17.next = 4;
          return _m_movimiento["default"].findById({
            _id: _id
          });
        case 4:
          movimiento_select = _context17.sent;
          if (movimiento_select) {
            _context17.next = 7;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al movimiento que se quiere anular"
          }));
        case 7:
          movementsArray = []; //===== record
          if (!movimiento_select.lista_items) {
            _context17.next = 50;
            break;
          }
          if (!(movimiento_select.tipo == "Entrada")) {
            _context17.next = 47;
            break;
          }
          _iterator7 = _createForOfIteratorHelper(movimiento_select.lista_items);
          _context17.prev = 11;
          _iterator7.s();
        case 13:
          if ((_step7 = _iterator7.n()).done) {
            _context17.next = 37;
            break;
          }
          item = _step7.value;
          item_code = item.codigo_product; // Obteniendo Producto del item
          _context17.next = 18;
          return _m_producto["default"].findOne({
            codigo: item_code
          });
        case 18:
          Producto_item = _context17.sent;
          if (Producto_item) {
            _context17.next = 21;
            break;
          }
          return _context17.abrupt("return", res.json({
            status: 404,
            message: "No se encontró el producto del item"
          }));
        case 21:
          if (!(item.cantidad > Producto_item.stock)) {
            _context17.next = 23;
            break;
          }
          return _context17.abrupt("return", res.status(400).json({
            status: 400,
            message: "NO SE PUEDE REALIZAR OPERACION, STOCK INSUFICIENTE"
          }));
        case 23:
          console.log("old stock", Producto_item.stock);
          stock_new = Producto_item.stock - item.cantidad;
          console.log("new stock", stock_new);
          // Actualizar Colleccion Productos
          _context17.next = 28;
          return _m_producto["default"].findOneAndUpdate({
            codigo: item.codigo_product
          }, {
            stock: stock_new
          });
        case 28:
          Producto_upd = _context17.sent;
          if (Producto_upd) {
            _context17.next = 31;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al producto que se quiere actualizar"
          }));
        case 31:
          _context17.next = 33;
          return _m_producto["default"].findOne({
            codigo: item.codigo_product
          });
        case 33:
          updated_product = _context17.sent;
          movementsArray.push(updated_product);
        case 35:
          _context17.next = 13;
          break;
        case 37:
          _context17.next = 42;
          break;
        case 39:
          _context17.prev = 39;
          _context17.t0 = _context17["catch"](11);
          _iterator7.e(_context17.t0);
        case 42:
          _context17.prev = 42;
          _iterator7.f();
          return _context17.finish(42);
        case 45:
          _context17.next = 50;
          break;
        case 47:
          lista_items = movimiento_select.lista_items;
          _context17.next = 50;
          return lista_items.forEach( /*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(item) {
              var item_code, Producto_item, stock_new, Producto_upd, updated_product;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    item_code = item.codigo_product; // Obteniendo el stock producto del item
                    _context16.next = 3;
                    return _m_producto["default"].findOne({
                      codigo: item_code
                    });
                  case 3:
                    Producto_item = _context16.sent;
                    if (Producto_item) {
                      _context16.next = 6;
                      break;
                    }
                    return _context16.abrupt("return", res.json({
                      status: 404,
                      message: "No se encontró el producto del item"
                    }));
                  case 6:
                    console.log("old stock", Producto_item.stock);
                    stock_new = Producto_item.stock + item.cantidad;
                    console.log("new stock", stock_new);
                    // Actualizar Colleccion Productos
                    _context16.next = 11;
                    return _m_producto["default"].findOneAndUpdate({
                      codigo: item.codigo_product
                    }, {
                      stock: stock_new
                    });
                  case 11:
                    Producto_upd = _context16.sent;
                    if (Producto_upd) {
                      _context16.next = 14;
                      break;
                    }
                    return _context16.abrupt("return", res.status(404).json({
                      status: 404,
                      message: "No se encontró al producto que se quiere actuañizar"
                    }));
                  case 14:
                    _context16.next = 16;
                    return _m_producto["default"].findOne({
                      codigo: item.codigo_product
                    });
                  case 16:
                    updated_product = _context16.sent;
                    movementsArray.push(updated_product);
                  case 18:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }));
            return function (_x31) {
              return _ref17.apply(this, arguments);
            };
          }());
        case 50:
          _context17.next = 52;
          return _m_movimiento["default"].findOneAndUpdate({
            _id: _id
          }, {
            estado: "Anulado"
          });
        case 52:
          updated_mov = _context17.sent;
          if (updated_mov) {
            _context17.next = 55;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró al movimiento para anularlo"
          }));
        case 55:
          _context17.next = 57;
          return _m_movimiento["default"].findOne({
            _id: _id
          });
        case 57:
          updated_movimiento = _context17.sent;
          return _context17.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha anulado el movimiento",
            data: updated_movimiento,
            movimientos: movementsArray
          }));
        case 61:
          _context17.prev = 61;
          _context17.t1 = _context17["catch"](0);
          console.log(_context17.t1);
          return _context17.abrupt("return", res.status(500).json({
            status: 500,
            message: "Ha aparecido un ERROR al momento de anular el movimiento"
          }));
        case 65:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 61], [11, 39, 42, 45]]);
  }));
  return function updateAnularSalida(_x29, _x30) {
    return _ref16.apply(this, arguments);
  };
}();
exports.updateAnularSalida = updateAnularSalida;
var getMovimientosAprobadosSalida = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var sql2, pool2, promiseQuery2, promisePoolEnd2, result2, movimientos;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          sql2 = "CALL sp_obtener_movimientos_salida_aprobados()";
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context18.next = 7;
          return promiseQuery2(sql2);
        case 7:
          result2 = _context18.sent;
          promisePoolEnd2();
          movimientos = JSON.parse(JSON.stringify(result2[0]));
          if (movimientos) {
            _context18.next = 12;
            break;
          }
          return _context18.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró a los mov Aprobados"
          }));
        case 12:
          return _context18.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido los mov Aprobados",
            data: movimientos
          }));
        case 15:
          _context18.prev = 15;
          _context18.t0 = _context18["catch"](0);
          return _context18.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los mov Aprobados"
          }));
        case 18:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 15]]);
  }));
  return function getMovimientosAprobadosSalida(_x32, _x33) {
    return _ref18.apply(this, arguments);
  };
}();
exports.getMovimientosAprobadosSalida = getMovimientosAprobadosSalida;
var getMovimientosAnuladosSalida = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var sql2, pool2, promiseQuery2, promisePoolEnd2, result2, movimientos;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          sql2 = "CALL sp_obtener_movimientos_salida_anulados()";
          pool2 = mysql.createPool(config_mysql);
          promiseQuery2 = promisify(pool2.query).bind(pool2);
          promisePoolEnd2 = promisify(pool2.end).bind(pool2);
          _context19.next = 7;
          return promiseQuery2(sql2);
        case 7:
          result2 = _context19.sent;
          promisePoolEnd2();
          movimientos = JSON.parse(JSON.stringify(result2[0]));
          if (movimientos) {
            _context19.next = 12;
            break;
          }
          return _context19.abrupt("return", res.status(404).json({
            status: 404,
            message: "No se encontró a los mov Aprobados"
          }));
        case 12:
          return _context19.abrupt("return", res.status(200).json({
            status: 200,
            message: "Se ha obtenido los mov Anulados",
            data: movimientos
          }));
        case 15:
          _context19.prev = 15;
          _context19.t0 = _context19["catch"](0);
          return _context19.abrupt("return", res.status(500).json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los mov Anulados"
          }));
        case 18:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 15]]);
  }));
  return function getMovimientosAnuladosSalida(_x34, _x35) {
    return _ref19.apply(this, arguments);
  };
}();
exports.getMovimientosAnuladosSalida = getMovimientosAnuladosSalida;