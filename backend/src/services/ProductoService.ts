import { ProductoRepository } from '../repositories/ProductoRepository';

class ProductoService {
    private repository: ProductoRepository;

    constructor() {
        this.repository = new ProductoRepository();
    }

    async obtenerProductosPorCategoria(categoria: string) {
        if (!categoria) {
            throw new Error("Categoría no proporcionada");
        }
        
        const productos = await this.repository.getProductosPorCategoria(categoria);
        
        if (productos.length === 0) {
            throw new Error("Categoría no encontrada");
        }
    
        return productos;
    }
    

    async obtenerProductoPorId(id: number) {
        return await this.repository.getProductoById(id);
    }
}

export default new ProductoService();
