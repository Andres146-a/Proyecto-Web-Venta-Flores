export interface IProductoRepository {
    getProductosPorCategoria(categoria: string): Promise<any>;
    getProductoById(id: number): Promise<any>;
}
