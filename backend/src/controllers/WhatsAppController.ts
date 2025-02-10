import { Request, Response } from 'express';
import WhatsAppService from '../services/WhatsAppService';

class WhatsAppController {
    async enviarMensaje(req: Request, res: Response) {
        try {
            const { numero, mensaje } = req.body;
            await WhatsAppService.enviarMensaje(numero, mensaje);
            res.status(200).json({ success: true, message: "Mensaje enviado a WhatsApp Business" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new WhatsAppController();
