import request from 'supertest';
import app from '../../../app';
import { prisma } from '../database/prismaClient';

describe('Pruebas de Productos', () => {
    beforeAll(async () => {
        await prisma.$connect();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test('Debe devolver productos de una categoría', async () => {
        const response = await request(app).get('/api/productos?categoria=Flores');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('Debe devolver error si la categoría no existe', async () => {
        const response = await request(app).get('/api/productos?categoria=NoExiste');
        expect(response.status).toBe(400);
    });
});
