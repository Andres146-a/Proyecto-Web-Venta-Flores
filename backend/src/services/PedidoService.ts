import PedidoRepository from '../repositories/PedidoRepository';

class PedidoService {
    private repository: typeof PedidoRepository;

    constructor() {
        this.repository = PedidoRepository;
    }

    async crearPedido(usuarioId: number, productos: { id: number; cantidad: number }[]) {
        return await this.repository.crearPedido(usuarioId, productos);
    }

    async obtenerPedidoPorId(id: number) {
        return await this.repository.getPedidoById(id);
    }
}

export default new PedidoService();
