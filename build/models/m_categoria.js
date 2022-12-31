"use strict";

var _mongoose = require("mongoose");
var categoria = new _mongoose.Schema({
  codigo: {
    type: String,
    unique: true
  },
  nombre: {
    type: String,
    unique: true
  },
  estado: {
    type: String
  }
}, {
  collection: 'categoria'
});

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

var M_categorias = (0, _mongoose.model)('m_categoria', categoria);
module.exports = M_categorias;