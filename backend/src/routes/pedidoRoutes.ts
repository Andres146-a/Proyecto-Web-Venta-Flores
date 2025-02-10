import express from 'express';
import PedidoController from '../controllers/PedidoController';

const router = express.Router();

router.post('/pedidos', PedidoController.crearPedido);
router.get('/pedidos/:id', PedidoController.getPedidoById);

export default router;
