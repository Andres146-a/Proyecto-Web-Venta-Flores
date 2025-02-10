import axios from 'axios';

class WhatsAppService {
    async enviarMensaje(numero: string, mensaje: string) {
        if (!process.env.WHATSAPP_ACCESS_TOKEN || !process.env.WHATSAPP_PHONE_ID) {
            throw new Error("Falta configurar las variables de entorno WHATSAPP_ACCESS_TOKEN o WHATSAPP_PHONE_ID.");
        }

        const url = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_ID}/messages`;

        const data = {
            messaging_product: "whatsapp",
            to: numero,
            type: "text",
            text: { body: mensaje }
        };

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`
        };

        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error: any) {
            console.error("Error al enviar mensaje de WhatsApp:", error.response?.data || error.message);
            throw new Error("No se pudo enviar el mensaje de WhatsApp.");
        }
    }
}

export default new WhatsAppService();

