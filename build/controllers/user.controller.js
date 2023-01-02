"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserInhabilitar = exports.updateUserHabilitar = exports.updateUserById = exports.getUsersInhabiltados = exports.getUsers = exports.getUserDni = exports.createUser = void 0;
var _bcrypt = require("../core/bcrypt");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mysql = require('mysql');
var _require = require('util'),
  promisify = _require.promisify;
var config_mysql = require('../config_mysql.js');

// Autor: Jonatan Pacora Vega
// 17/10/22
/* el codigo aqui es usado para el
 CUS registrar a un usuario*/
var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, username, email, password, direccion, telefono, dni, rol_id, newpassword, sql, pool, promiseQuery, promisePoolEnd, result, usuario;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, direccion = _req$body.direccion, telefono = _req$body.telefono, dni = _req$body.dni, rol_id = _req$body.rol_id;
          _context.next = 4;
          return (0, _bcrypt.hashPassword)(password);
        case 4:
          newpassword = _context.sent;
          sql = "CALL sp_generar_usuario('".concat(username, "','").concat(email, "','").concat(newpassword, "','").concat(direccion, "','").concat(telefono, "','").concat(dni, "','").concat(rol_id, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context.next = 11;
          return promiseQuery(sql);
        case 11:
          result = _context.sent;
          promisePoolEnd();
          usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
          return _context.abrupt("return", res.json({
            status: 200,
            message: "Se ha creado el usuario correctamente ",
            data: usuario
          }));
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.json({
            status: 500,
            message: "Se ha producido un ERROR al crear el  usuario",
            error: _context.t0
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* el codigo aqui es permite listar
 los usuarios  habilitadas*/
exports.createUser = createUser;
var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var sql, pool, promiseQuery, promisePoolEnd, result, usuarios, i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          sql = "CALL sp_obtener_usuario_habilitado()";
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context2.next = 7;
          return promiseQuery(sql);
        case 7:
          result = _context2.sent;
          promisePoolEnd();
          usuarios = Object.values(JSON.parse(JSON.stringify(result[0])));
          for (i = 0; i < usuarios.length; i++) {
            if (usuarios[i].rol == 100) {
              usuarios[i].rol_display = "Administrador";
            }
            if (usuarios[i].rol == 120) {
              usuarios[i].rol_display = "Jefe de Almacen";
            }
            if (usuarios[i].rol == 121) {
              usuarios[i].rol_display = "Almacenero";
            }
          }
          return _context2.abrupt("return", res.json({
            status: 200,
            message: "Se ha obtenido los usuarioos habilitados",
            data: usuarios
          }));
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los usuarios habilitados"
          }));
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
// Autor: Jonatan Pacora Vega
// 18/10/22
/* el codigo aqui permite listar
 los usuarios inhabilitados*/
exports.getUsers = getUsers;
var getUsersInhabiltados = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var sql, pool, promiseQuery, promisePoolEnd, result, usuarios, i;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          sql = "CALL sp_obtener_usuario_inhabiltados()";
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context3.next = 7;
          return promiseQuery(sql);
        case 7:
          result = _context3.sent;
          promisePoolEnd();
          usuarios = Object.values(JSON.parse(JSON.stringify(result[0])));
          for (i = 0; i < usuarios.length; i++) {
            if (usuarios[i].rol == 100) {
              usuarios[i].rol_display = "Administrador";
            }
            if (usuarios[i].rol == 120) {
              usuarios[i].rol_display = "Jefe de Almacen";
            }
            if (usuarios[i].rol == 121) {
              usuarios[i].rol_display = "Almacenero";
            }
          }
          return _context3.abrupt("return", res.json({
            status: 200,
            message: "Se ha obtenido los usuarios inhabilitadas",
            data: usuarios
          }));
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.json({
            status: 500,
            message: "Se ha producido un ERROR al obtener los usuarios inhabilitados"
          }));
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function getUsersInhabiltados(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
// Autor: Jonatan Pacora Vega
// 19/10/22
/* el codigo aqui permite Buscar
  a un usuario por su dni*/
exports.getUsersInhabiltados = getUsersInhabiltados;
var getUserDni = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var dni, sql, pool, promiseQuery, promisePoolEnd, result, usuario, i;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          dni = req.params.dni;
          sql = "CALL sp_obtener_usuario_dni('".concat(dni, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context4.next = 8;
          return promiseQuery(sql);
        case 8:
          result = _context4.sent;
          promisePoolEnd();
          usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
          for (i = 0; i < usuario.length; i++) {
            if (usuario[i].rol == 100) {
              usuario[i].rol_display = "Administrador";
            }
            if (usuario[i].rol == 120) {
              usuario[i].rol_display = "Jefe de Almacen";
            }
            if (usuario[i].rol == 121) {
              usuario[i].rol_display = "Almacenero";
            }
          }
          return _context4.abrupt("return", res.json({
            status: 200,
            message: "Se ha obtenido el usuario solicitado por dni",
            data: usuario
          }));
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.json({
            status: 500,
            message: "Se ha producido un ERROR al obtener el usuario por su dni",
            error: _context4.t0
          }));
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function getUserDni(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/* el codigo aqui permite editar un usuario*/
exports.getUserDni = getUserDni;
var updateUserById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, email, password, telefono, direccion, rol, _id, contrasenia, sql, pool, promiseQuery, promisePoolEnd, result, usuario_updated;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, telefono = _req$body2.telefono, direccion = _req$body2.direccion, rol = _req$body2.rol;
          _id = req.params._id; // Encriptando contraseñ al editar
          _context5.next = 5;
          return (0, _bcrypt.hashPassword)(password);
        case 5:
          contrasenia = _context5.sent;
          sql = "CALL sp_actualizar_usuario_por_id('".concat(_id, "','").concat(email, "','").concat(contrasenia, "','").concat(telefono, "','").concat(direccion, "','").concat(rol, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context5.next = 12;
          return promiseQuery(sql);
        case 12:
          result = _context5.sent;
          promisePoolEnd();
          usuario_updated = Object.values(JSON.parse(JSON.stringify(result[0])));
          if (!(!usuario_updated.length == 1)) {
            _context5.next = 17;
            break;
          }
          return _context5.abrupt("return", res.json({
            status: 404,
            message: "No se encontró al usuario que se quiere editar"
          }));
        case 17:
          return _context5.abrupt("return", res.json({
            status: 200,
            message: "Se ha actualizado al usuario correctamente ",
            data: usuario_updated
          }));
        case 20:
          _context5.prev = 20;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.json({
            status: 500,
            message: "Ha aparecido un ERROR al momento de actualizar a un usuario"
          }));
        case 24:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 20]]);
  }));
  return function updateUserById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
/* el codigo aqui permite dar de baja a un usuario*/
exports.updateUserById = updateUserById;
var updateUserInhabilitar = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _id, sql, pool, promiseQuery, promisePoolEnd, result, usuario;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _id = req.params._id;
          sql = "CALL sp_actualizar_usuario_inhabilitar('".concat(_id, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context6.next = 8;
          return promiseQuery(sql);
        case 8:
          result = _context6.sent;
          promisePoolEnd();
          usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
          return _context6.abrupt("return", res.json({
            status: 200,
            message: "Se ha dado de baja al usuario",
            data: usuario
          }));
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.json({
            status: 500,
            message: "Se ha producido un ERROR al dar de baja usuario",
            error: _context6.t0
          }));
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return function updateUserInhabilitar(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/* el codigo aqui permite dar de Alta a un usuario*/
exports.updateUserInhabilitar = updateUserInhabilitar;
var updateUserHabilitar = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _id, sql, pool, promiseQuery, promisePoolEnd, result, usuario;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _id = req.params._id;
          sql = "CALL sp_actualizar_usuario_habilitar('".concat(_id, "')");
          pool = mysql.createPool(config_mysql);
          promiseQuery = promisify(pool.query).bind(pool);
          promisePoolEnd = promisify(pool.end).bind(pool);
          _context7.next = 8;
          return promiseQuery(sql);
        case 8:
          result = _context7.sent;
          promisePoolEnd();
          usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
          return _context7.abrupt("return", res.json({
            status: 200,
            message: "Se ha habilitado el usuario",
            data: usuario
          }));
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.json({
            status: 500,
            message: "Se ha producido un ERROR al dar de alta al usuario",
            error: _context7.t0
          }));
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 14]]);
  }));
  return function updateUserHabilitar(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.updateUserHabilitar = updateUserHabilitar;