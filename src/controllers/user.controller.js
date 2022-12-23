import User from "../models/m_user";
import Role from "../models/m_role";

let mysql = require('mysql');
const { promisify } = require('util')
var config_mysql = require('../config_mysql.js')

// Autor: Jonatan Pacora Vega
// 17/10/22
/* el codigo aqui es usado para el
 CUS registrar a un usuario*/
export const createUser = async (req, res) => {
  try {
    const {
      id_user,
      username,
      email,
      password,
      direccion,
      telefono,
      dni,
      rol_id
    } = req.body;
    let sql = `CALL sp_create_user('${id_user}','${username}','${email}','${password}','${direccion}','${telefono}','${dni}','${rol_id}')`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)

    promisePoolEnd()
    const usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
    return res.json(
      {
        status: 200,
        message: "Se ha creado el usuario correctamente ",
        data: usuario
      }
    );
  } catch (error) {
    console.log(error)

    return res.json(
      {
        status: 500,
        message: "Se ha producido un ERROR al crear el  usuario",
        error
      }
    );
  }

};
/* el codigo aqui es permite listar
 los usuarios  habilitadas*/
export const getUsers = async (req, res) => {
  try {
    let sql = `CALL sp_get_users()`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)
    promisePoolEnd()
    const usuarios = Object.values(JSON.parse(JSON.stringify(result[0])));
    return res.json(
      {
        status: 200,
        message: "Se ha obtenido los usuarioos habilitados",
        data: usuarios
      }
    );
  } catch (error) {
    console.log(error)
    return res.json(
      {
        status: 500,
        message: "Se ha producido un ERROR al obtener los usuarios habilitados",
      }
    );
  }
};
// Autor: Jonatan Pacora Vega
// 18/10/22
/* el codigo aqui permite listar
 los usuarios inhabilitados*/
export const getUsersInhabiltados = async (req, res) => {
  try {
    let sql = `CALL sp_get_users_inhabiltados()`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)
    promisePoolEnd()
    const usuarios = Object.values(JSON.parse(JSON.stringify(result[0])));
    return res.json(
      {
        status: 200,
        message: "Se ha obtenido los usuarios inhabilitadas",
        data: usuarios
      }
    );
  } catch (error) {
    console.log(error)
    return res.json(
      {
        status: 500,
        message: "Se ha producido un ERROR al obtener los usuarios inhabilitados",
      }
    );
  }
};
// Autor: Jonatan Pacora Vega
// 19/10/22
/* el codigo aqui permite Buscar
  a un usuario por su dni*/
export const getUserDni = async (req, res) => {
  try {
    const { dni } = req.params;

    let sql = `CALL sp_get_user_dni('${dni}')`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)

    promisePoolEnd()
    const usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
    return res.json(
      {
        status: 200,
        message: "Se ha obtenido el usuario solicitado por dni",
        data: usuario
      }
    );
  } catch (error) {
    console.log(error)
    return res.json(
      {
        status: 500,
        message: "Se ha producido un ERROR al obtener el usuario por su dni",
        error
      }
    );
  }

};
/* el codigo aqui permite editar un usuario*/
export const updateUserById = async (req, res) => {
  try {
    const { username, email, dni, passwordNE, roles } = req.body;
    const rolesFound = await Role.find({ name: { $in: roles } });

    const { _id } = req.params;
    // Encriptando contraseñ al editar
    const password = await User.encryptPassword(passwordNE);

    const User_upd = await User.findOneAndUpdate(
      { _id },
      {
        username,
        dni,
        email,
        password,
        roles: rolesFound.map((role) => role._id),

      }
    );

    if (!User_upd) {
      return res.json({
        status: 404,
        message: "No se encontró al usuario que se quiere editar",
      });
    }
    const updated_user = await User.findOne({ _id });
    return res.json({
      status: 200,
      message: "Se ha actualizado el usuario",
      data: updated_user,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 500,
      message: "Ha aparecido un ERROR al momento de actualizar a un user",

    });
  }


}
/* el codigo aqui permite dar de baja a un usuario*/
export const updateUserInhabilitar = async (req, res) => {
  try {
    const { _id } = req.params;

    let sql = `CALL sp_update_user_inhabilitar('${_id}')`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)

    promisePoolEnd()
    const usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
    return res.json(
      {
        status: 200,
        message: "Se ha dado de baja al usuario",
        data: usuario
      }
    );
  } catch (error) {
    console.log(error)
    return res.json(
      {
        status: 500,
        message: "Se ha producido un ERROR al dar de baja usuario",
        error
      }
    );
  }
}

/* el codigo aqui permite dar de Alta a un usuario*/
export const updateUserHabilitar = async (req, res) => {
  try {
    const { _id } = req.params;

    let sql = `CALL sp_update_user_habilitar('${_id}')`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)

    promisePoolEnd()
    const usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
    return res.json(
      {
        status: 200,
        message: "Se ha habilitado el usuario",
        data: usuario
      }
    );
  } catch (error) {
    console.log(error)
    return res.json(
      {
        status: 500,
        message: "Se ha producido un ERROR al dar de alta al usuario",
        error
      }
    );
  }

}
