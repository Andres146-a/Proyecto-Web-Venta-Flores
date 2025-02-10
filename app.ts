import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import productoRoutes from "../Pagina Ventas/backend/src/routes/productoRoutes";
import pedidoRoutes from "../Pagina Ventas/backend/src/routes/pedidoRoutes";
import whatsappRoutes from "../Pagina Ventas/backend/src/routes/whatsappRoutes";

dotenv.config();

// Crear la aplicación de Express
const app = express();

// Middleware de CORS (para permitir solicitudes desde el frontend)
app.use(cors());

// Middleware para procesar JSON y datos
app.use(express.json());

// Definir rutas de la API antes de servir archivos estáticos
app.use("/api", productoRoutes);
app.use("/api", pedidoRoutes);
app.use("/api", whatsappRoutes);

// Servir archivos estáticos después
app.use(express.static(__dirname + "/frontend/Css"));
app.use(express.static(__dirname + "/frontend/js"));
app.use(express.static(__dirname + "/frontend/img"));
app.use(express.static(__dirname + "/frontend/websites"));

// Middleware para manejo de errores (captura errores en rutas asíncronas)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error en la API:", err.message);
    res.status(500).json({ message: "Error interno del servidor" });
});

// Exportar `app` para que pueda ser usado en pruebas
export default app;

// Si este archivo se ejecuta directamente, levanta el servidor
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    });

}
