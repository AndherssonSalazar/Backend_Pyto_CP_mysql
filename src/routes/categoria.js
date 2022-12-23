import { Router } from 'express';

const router = Router();

import * as categoriasCtrl from '../controllers/categoria.controllers';

import {authJwt} from '../middlewares'

// Definimos las rutas::
router.get('/read', categoriasCtrl.getCategorias);
router.get('/inhabilitados', categoriasCtrl.getCategoriasInhabilitadas);
router.get('/read/:codigo', categoriasCtrl.getCategoriaByCode);
router.get('/read/byname/:name', categoriasCtrl.getCategoriaByName);
router.post('/create', categoriasCtrl.createCategoria);
router.put('/inhabilitar/:_id', categoriasCtrl.updateCategoriaInhabilitar);
router.put('/habilitar/:_id', categoriasCtrl.updateCategoriaHabilitar);


module.exports= router;