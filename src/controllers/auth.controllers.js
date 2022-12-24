import jwt from 'jsonwebtoken'
import config  from '../config'
import { hashPassword, comparePassword } from "../core/bcrypt";

let mysql = require('mysql');
const { promisify } = require('util')
var config_mysql = require('../config_mysql.js')


export const signUp = async (req, res) => {
    try {
        const {
          id_user,
          username,
          email,
          password,
          direccion,
          telefono,
          dni          
        } = req.body;

        const newpassword=  await hashPassword(password);
        const rol_id= 1221;
        let sql = `CALL sp_create_user('${id_user}','${username}','${email}','${newpassword}','${direccion}','${telefono}','${dni}','${rol_id}')`;
        const pool = mysql.createPool(config_mysql)
        const promiseQuery = promisify(pool.query).bind(pool)
        const promisePoolEnd = promisify(pool.end).bind(pool)
        const result = await promiseQuery(sql)
    
        promisePoolEnd()
        const usuario = Object.values(JSON.parse(JSON.stringify(result[0])));
        return res.status(200).json(
          {
            status: 200,
            message: "Se ha creado el usuario correctamente ",
            data: usuario
          }
        );      

      } catch (error) {
        console.log(error)
    
        return res.status(500).json(
          {
            status: 500,
            message: "Se ha producido un ERROR al crear el  usuario",
            error
          }
        );
      }       
   
}

export const signIn = async (req, res) => {
    //const userFound= await User.findOne({email: req.body.email}).populate("roles");   
    const correo=  req.body.email;
    const contrasenia=  req.body.password;
    let sql = `CALL sp_get_user_correo('${correo}')`;
    const pool = mysql.createPool(config_mysql)
    const promiseQuery = promisify(pool.query).bind(pool)
    const promisePoolEnd = promisify(pool.end).bind(pool)
    const result = await promiseQuery(sql)

    promisePoolEnd()
    const userFound = Object.values(JSON.parse(JSON.stringify(result[0])));

    if(userFound.estado =="inhabilitado") return res.status(403).json({message:"Usuario sin Permisos"})
    if(!userFound) return res.status(400).json({message:"Usuario no encontrado"})

    const matchPassword= await comparePassword(contrasenia, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'Contraseña invalida'})
    
    const roles= userFound.rol;
    
    console.log(roles)       

    const token= jwt.sign({id: userFound.id, username: userFound.username, rol: roles}, config.SECRET,{
        expiresIn: 86400
    })

    res.status(200).json({token})
    
}