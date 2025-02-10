import express from 'express';
import ProductoController from '../controllers/ProductoController';

const router = express.Router();

router.get('/productos', ProductoController.getProductos);
router.get('/productos/:id', ProductoController.getProductoById);

export default router;
