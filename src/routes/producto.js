import { Router } from 'express';
const router = Router();
import * as productosCtrl from '../controllers/producto.controllers';
import {authJwt} from '../middlewares'
// Definimos las rutas::
router.get('/', productosCtrl.getProductos);
router.get('/inhabilitados/', productosCtrl.getProductosInhabilitados);
router.get('/read/:codigo', productosCtrl.getProductoByCode);
router.get('/stockminimo/', productosCtrl.getProductoByStockMinimo);
router.get('/:_id', productosCtrl.getProductoById);

router.post('/', productosCtrl.createProducto);
// router.put('/:_id', productosCtrl.updateProductById);
router.put("/inhabilitar/:_id",  productosCtrl.updateProductInhabilitar);
router.put("/habilitar/:_id", productosCtrl.updateProductHabilitar);

module.exports= router;