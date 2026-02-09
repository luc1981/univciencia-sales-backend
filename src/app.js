import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Rutas
app.use('/api', chatRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('🤖 Servidor de IA Virtual Univciencia: ACTIVO');
});

// Encender
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
