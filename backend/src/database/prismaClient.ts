import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Logs para depuración
});

// Manejar la desconexión de Prisma cuando el proceso finaliza
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('🔴 Prisma desconectado.');
  process.exit(0);
});
