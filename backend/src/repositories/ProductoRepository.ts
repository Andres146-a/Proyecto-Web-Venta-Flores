import { prisma } from '../database/prismaClient';
import { IProductoRepository } from '../repositories/IProductoRepository';

class ProductoRepository implements IProductoRepository {
    async getProductosPorCategoria(categoria: string) {
        const productos = await prisma.producto.findMany({
            where: { categoria: { nombre: categoria } },
            include: { categoria: true },
        });
    
        return productos.length > 0 ? productos : [];
    }
    

    async getProductoById(id: number) {
        return await prisma.producto.findUnique({ where: { id } });
    }
}

export { ProductoRepository };
