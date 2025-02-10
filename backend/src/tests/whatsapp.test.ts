import request from 'supertest';
import app from '../../../app';
import { prisma } from '../database/prismaClient';

describe('Pruebas de WhatsApp', () => {
    beforeAll(async () => {
        await prisma.$connect();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test('Debe enviar un mensaje de WhatsApp', async () => {
        const response = await request(app).post('/api/whatsapp/enviar').send({
            numero: '+521234567890',
            mensaje: 'Prueba de mensaje de WhatsApp'
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
    });

    test('Debe devolver error si falta el número o mensaje', async () => {
        const response = await request(app).post('/api/whatsapp/enviar').send({});
        expect(response.status).toBe(400);
    });
});
