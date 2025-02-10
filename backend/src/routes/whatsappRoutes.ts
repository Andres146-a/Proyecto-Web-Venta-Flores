import express from 'express';
import WhatsAppController from '../controllers/WhatsAppController';

const router = express.Router();

router.post('/whatsapp/enviar', WhatsAppController.enviarMensaje);

export default router;
