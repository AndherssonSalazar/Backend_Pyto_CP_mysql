"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAnular = exports.getReporte = exports.getMovimientosAprobados = exports.getMovimientosAnulados = exports.getMovimientoByCode = exports.createMovimiento = void 0;
var _m_movimiento = _interopRequireDefault(require("../models/m_movimiento"));
var _m_producto = _interopRequireDefault(require("../models/m_producto"));
var _BadRequestException = require("../exceptions/BadRequestException");
var _InternalServerException = require("../exceptions/InternalServerException");
var _NotFoundException = require("../exceptions/NotFoundException");
var _error = _interopRequireDefault(require("../constants/error.enum"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Autor: Jonatan Pacora
// 30/11/22
/* el codigo aqui es usado para el
 CUS 22 - 23 registrar a un movimiento*/

var createMovimiento = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, codigo, factura, tipo, fecha, id_responsable, name_responsable, lista_items, productsArray, _iterator, _step, item, item_code, Producto_item, stock_new, Producto_upd, updated_product, _iterator2, _step2, _item, _item_code, _Producto_item, _stock_new, code_product, _Producto_upd, _updated_product, newMov, MovSaved;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
      while (1) {
        switch (_context2.prev = _context2.next) {
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
      while (1) {
        switch (_context4.prev = _context4.next) {
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
                  while (1) {
                    switch (_context3.prev = _context3.next) {
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
      while (1) {
        switch (_context5.prev = _context5.next) {
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
      while (1) {
        switch (_context6.prev = _context6.next) {
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
      while (1) {
        switch (_context7.prev = _context7.next) {
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
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function getReporte(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getReporte = getReporte;