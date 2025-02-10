import { Request, Response } from 'express';
import PedidoService from '../services/PedidoService';

class PedidoController {
    async crearPedido(req: Request, res: Response) {
        try {
            const { usuarioId, productos } = req.body;
            const pedido = await PedidoService.crearPedido(usuarioId, productos);
            res.status(201).json(pedido);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPedidoById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const pedido = await PedidoService.obtenerPedidoPorId(id);
            res.status(200).json(pedido);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new PedidoController();
