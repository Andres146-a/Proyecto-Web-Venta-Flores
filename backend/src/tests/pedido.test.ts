import request from 'supertest';
import app from'../../../app';
import { prisma } from '../database/prismaClient';

describe('Pruebas de Pedidos', () => {
    beforeAll(async () => {
        await prisma.$connect();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test('Debe crear un nuevo pedido', async () => {
        const response = await request(app).post('/api/pedidos').send({
            usuarioId: 1,
            productos: [{ id: 1, cantidad: 2 }]
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('Debe devolver error si no se envían datos', async () => {
        const response = await request(app).post('/api/pedidos').send({});
        expect(response.status).toBe(400);
    });
});
