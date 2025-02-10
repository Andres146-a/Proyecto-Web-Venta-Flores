import { prisma } from '../database/prismaClient';

class PedidoRepository {
    async crearPedido(usuarioId: number, productos: { id: number, cantidad: number }[]) {
        // Verificar si los productos existen antes de crear el pedido
        const productosExistentes = await prisma.producto.findMany({
            where: { id: { in: productos.map(p => p.id) } }
        });
    
        if (productosExistentes.length !== productos.length) {
            throw new Error("Uno o más productos no existen en la base de datos.");
        }
    
        return await prisma.pedido.create({
            data: {
                usuarioId,
                fecha: new Date(),
                total: productos.reduce((acc, p) => acc + p.cantidad * productosExistentes.find(pe => pe.id === p.id)!.precio, 0),
                detalles: {
                    create: productos.map(producto => ({
                        productoId: producto.id,
                        cantidad: producto.cantidad,
                        precioUnitario: productosExistentes.find(pe => pe.id === producto.id)!.precio, 
                    })),
                },
            },
        });
    }
    

    async getPedidoById(id: number) {
        return await prisma.pedido.findUnique({
            where: { id },
            include: { detalles: true }
        });
    }
}

export default new PedidoRepository();
