import { Request, Response } from 'express';
import ProductoService from '../services/ProductoService';

class ProductoController {
    async getProductos(req: Request, res: Response) {
        try {
            const categoria = req.query.categoria as string;
            const productos = await ProductoService.obtenerProductosPorCategoria(categoria);
            res.status(200).json(productos);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async getProductoById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const producto = await ProductoService.obtenerProductoPorId(id);
            res.status(200).json(producto);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new ProductoController();

